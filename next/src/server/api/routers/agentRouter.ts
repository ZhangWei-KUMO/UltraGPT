import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { prisma } from "../../db";
import { MESSAGE_TYPE_TASK, messageSchema } from "../../../types/agentTypes";

const saveAgentParser = z.object({
  name: z.string(),
  goal: z.string(),
  tasks: z.array(messageSchema),
});

export const agentRouter = createTRPCRouter({
  create: publicProcedure.input(saveAgentParser).mutation(async ({ input, ctx }) => {
    const agent = await prisma.agent.create({
      data: {
        name: input.name,
        goal: input.goal,
        // 暂不存储用户信息
        userId: '',
        // userId: ctx.session?.user?.id,
      },
    });

    const all = input.tasks.map((e, i) => {
      return prisma.agentTask.create({
        data: {
          agentId: agent.id,
          type: e.type,
          ...(e.type === MESSAGE_TYPE_TASK && { status: e.status }),
          info: e.info,
          value: e.value,
          sort: i,
        },
      });
    });

    await Promise.all(all);
    return agent;
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return prisma.agent.findMany({
      where: {
        userId:'',
        // userId: ctx.session?.user?.id,
        deleteDate: null,
      },
      orderBy: { createDate: "desc" },
      take: 20,
    });
  }),
  findById: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    return await prisma.agent.findFirstOrThrow({
      where: { id: input, deleteDate: null },
      include: {
        tasks: {
          orderBy: {
            sort: "asc",
          },
        },
      },
    });
  }),
  deleteById: publicProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    await prisma.agent.updateMany({
      where: {
         id: input, 
        //  userId: ctx.session?.user?.id 
        },
      data: {
        deleteDate: new Date(),
      },
    });
  }),
});
