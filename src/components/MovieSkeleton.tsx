import React from 'react';
import { Skeleton } from './ui/skeleton';

export default function MovieSkeleton() {
  return (
    <div className="space-y-10 px-10">
      <Skeleton className="h-[200px] w-full rounded-xl bg-tertiary" />
      <Skeleton className="h-[200px] w-full rounded-xl bg-tertiary" />
      <Skeleton className="h-[200px] w-full rounded-xl bg-tertiary" />
    </div>
  );
}
