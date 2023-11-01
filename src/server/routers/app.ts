import { procedure, router } from '@/server/trpc';
import { z } from 'zod';

export const appRouter = router({
  magicNumber: procedure.query(() => {
    return 42;
  }),
});

export type AppRouter = typeof appRouter;
