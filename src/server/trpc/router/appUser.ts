import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { contextProps } from "@trpc/react/dist/internals/context";

export const appUserRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});

