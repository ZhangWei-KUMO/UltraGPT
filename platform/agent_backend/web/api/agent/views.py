from typing import List

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse as FastAPIStreamingResponse
from pydantic import BaseModel

from agent_backend.schemas import AgentRequestBody
from agent_backend.web.api.agent.agent_service.agent_service_provider import (
    get_agent_service,
)
from agent_backend.web.api.agent.analysis import Analysis
from agent_backend.web.api.agent.dependancies import agent_validator
from agent_backend.web.api.agent.tools.tools import get_external_tools, get_tool_name

router = APIRouter()


class NewTasksResponse(BaseModel):
    newTasks: List[str]


@router.post("/start")
async def start_tasks(
    req_body: 
    AgentRequestBody = Depends(
        agent_validator(
            example={
                "goal": "Create business plan for a bagel company",
                "task": "Identify the most common bagel shapes",
                "modelSettings": {
                    "customModelName": "gpt-3.5-turbo",
                },
            }
        )
    ),
) -> NewTasksResponse:
    # 启动任务
    new_tasks = await get_agent_service(req_body.modelSettings).start_goal_agent(
        goal=req_body.goal
    )
    return NewTasksResponse(newTasks=new_tasks)

"""
根据任务的目标、任务名称、工具名称
返回分析结果。
"""
@router.post("/analyze")
async def analyze_tasks(
    req_body: AgentRequestBody = Depends(agent_validator()),
) -> Analysis:
    return await get_agent_service(req_body.modelSettings).analyze_task_agent(
        goal=req_body.goal,
        task=req_body.task or "",
        tool_names=req_body.toolNames or [],
    )


class CompletionResponse(BaseModel):
    response: str

# 执行任务API
@router.post("/execute")
async def execute_tasks(
    req_body: AgentRequestBody = Depends(
        agent_validator(
            example={
                "goal": "Perform tasks accurately",
                "task": "Write code to make a platformer",
                "analysis": {
                    "reasoning": "I like to write code.",
                    "action": "code",
                    "arg": "",
                },
            }
        )
    ),
) -> FastAPIStreamingResponse:
    print("执行API任务时参数：",req_body.analysis)
    res = await get_agent_service(req_body.modelSettings).execute_task_agent(
        goal=req_body.goal or "",
        task=req_body.task or "",
        analysis=req_body.analysis or Analysis.get_default_analysis(),
    )
    return res


@router.post("/create")
async def create_tasks(
    req_body: AgentRequestBody = Depends(agent_validator()),
) -> NewTasksResponse:
    new_tasks = await get_agent_service(req_body.modelSettings).create_tasks_agent(
        goal=req_body.goal,
        tasks=req_body.tasks or [],
        last_task=req_body.lastTask or "",
        result=req_body.result or "",
        completed_tasks=req_body.completedTasks or [],
    )
    return NewTasksResponse(newTasks=new_tasks)


class ToolModel(BaseModel):
    name: str
    description: str
    color: str


class ToolsResponse(BaseModel):
    tools: List[ToolModel]


@router.get("/tools")
async def get_user_tools() -> ToolsResponse:
    tools = get_external_tools()
    formatted_tools = [
        ToolModel(
            name=get_tool_name(tool),
            description=tool.public_description,
            color="TODO: Change to image of tool",
        )
        for tool in tools
        if tool.available()
    ]

    return ToolsResponse(tools=formatted_tools)
