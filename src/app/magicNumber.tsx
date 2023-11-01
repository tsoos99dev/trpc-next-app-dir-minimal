'use client';

import { trpc } from '@/util/trpc';

export default function MagicNumber() {
  const { data, error, isError, isLoading } = trpc.magicNumber.useQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <span>Your magic number is {data}</span>;
}
