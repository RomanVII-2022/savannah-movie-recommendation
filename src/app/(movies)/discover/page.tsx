import React, { Suspense } from 'react';
import CategoryList from '@/components/CategoryList';
import MovieSkeleton from '@/components/MovieSkeleton';

export default function Discover() {
  return (
    <div className="flex flex-col h-full">
      <Suspense fallback={<MovieSkeleton />}>
        <CategoryList />
      </Suspense>
    </div>
  );
}
