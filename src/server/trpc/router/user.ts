import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { contextProps } from "@trpc/react/dist/internals/context";

export const userRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
