import type { Message } from "../../types/agentTypes";
import {
  MESSAGE_TYPE_GOAL,
  MESSAGE_TYPE_SYSTEM,
  MESSAGE_TYPE_THINKING,
} from "../../types/agentTypes";
import { translate } from "../../utils/translations";
import type { Analysis } from "./analysis";
import axios from "axios";
import { isPlatformError } from "../../types/errors";
import { useMessageStore } from "../../stores";

class MessageService {
  private isRunning: boolean;
  private readonly renderMessage: (message: Message) => void;

  constructor(renderMessage: (message: Message) => void) {
    this.isRunning = false;
    this.renderMessage = renderMessage;
  }

  setIsRunning(isRunning: boolean) {
    this.isRunning = isRunning;
  }

  sendMessage(message: Message) {
    if (this.isRunning) {
      this.renderMessage({ ...message });
    }
  }

  updateMessage(message: Message) {
    if (this.isRunning) {
      useMessageStore.getState().updateMessage(message);
    }
  }

  sendGoalMessage(goal: string) {
    this.sendMessage({ type: MESSAGE_TYPE_GOAL, value: goal });
  }
 // Loops Error
  sendLoopMessage() {
    this.sendMessage({
      type: MESSAGE_TYPE_SYSTEM,
      value: translate("DEMO_LOOPS_REACHED", "errors"),
    });
  }

  sendManualShutdownMessage() {
    this.sendMessage({
      type: MESSAGE_TYPE_SYSTEM,
      value: translate("AGENT_MANUALLY_SHUT_DOWN", "errors"),
    });
  }

  sendCompletedMessage() {
    this.sendMessage({
      type: MESSAGE_TYPE_SYSTEM,
      value: translate("ALL_TASKS_COMPLETETD", "errors"),
    });
  }
  // 发生分析信息
  sendAnalysisMessage(analysis: Analysis) {
    let message = 'AI正在计算中...';
    if (analysis.action == "search") {
      message = `🔍正在互联网中搜索 "${analysis.arg}"...`;
    }
    if (analysis.action == "维基百科") {
      message = `🌐 正在维基百科中查找 "${analysis.arg}"...`;
    }
    if(analysis.action == "财务报表"){
      message = `🌐 正在财务报表中查找 "${analysis.arg}"...`;
    }
    // if (analysis.action == "image") {
    //   message = `🎨 Generating an image with prompt: "${analysis.arg}"...`;
    // }
    if (analysis.action == "code") {
      message = `💻 Writing code...`;
    }

    this.sendMessage({
      type: MESSAGE_TYPE_SYSTEM,
      value: message,
    });
  }

  sendThinkingMessage() {
    this.sendMessage({ type: MESSAGE_TYPE_THINKING, value: "" });
  }

  sendErrorMessage(e: unknown) {
    console.error(e);
    let message = "ERROR_RETRIEVE_INITIAL_TASKS";
    if (typeof e == "string") message = e;
    else if (axios.isAxiosError(e) && !e.response) {
      message = "后端程序连接失败，请检查后端程序是否正常运行";
    } else if (axios.isAxiosError(e)) {
      switch (e.response?.status) {
        case 409:
          const data = (e.response?.data as object) || {};
          message = isPlatformError(data)
            ? data.detail
            : "出现未知错误!";
          break;
        case 429:
          message = "ERROR_API_KEY_QUOTA";
          break;
        case 404:
          message = "ERROR_OPENAI_API_KEY_NO_GPT4";
          break;
        default:
          message = "ERROR_ACCESSING_OPENAI_API_KEY";
          break;
      }
    }

    this.sendMessage({ type: "error", value: translate(message, "errors") });
  }
}

export default MessageService;
