import { procedure, router } from '@/server/trpc';

export const appRouter = router({
  magicNumber: procedure.query(() => {
    return 42;
  }),
});

export type AppRouter = typeof appRouter;
