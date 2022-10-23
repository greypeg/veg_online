// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { appUserRouter } from "./appUser";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  appuUser: appUserRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
