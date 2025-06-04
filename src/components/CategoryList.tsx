'use client';
import React from 'react';
import MovieItem from './MovieItem';
import { useSearchParams } from 'next/navigation';
import { useFetchMovieCategoryList } from '@/resources/services/movieQueries';
import { Button } from './ui/button';

export default function CategoryList() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') || '';
  const { data, fetchNextPage, hasNextPage, isFetching } = useFetchMovieCategoryList(categorySlug);

  return (
    <>
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-5 overflow-y-auto flex-auto pb-5">
        {data.map(movie => (
          <MovieItem key={movie.id} details={movie} />
        ))}
        <div className="col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-7 2xl:col-span-10 justify-self-center">
          <Button
            variant={'secondary'}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
            className="cursor-pointer"
          >
            Load More
          </Button>
        </div>
      </div>
    </>
  );
}
