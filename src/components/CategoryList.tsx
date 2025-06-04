'use client';
import React from 'react';
import MovieItem from './MovieItem';
import { useSearchParams } from 'next/navigation';
import { useFetchMovieCategoryList } from '@/resources/services/movieQueries';

export default function CategoryList() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category') || '';
  const { data } = useFetchMovieCategoryList(categorySlug);

  return (
    <div className="px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-5 overflow-y-auto flex-auto pb-5">
      {data?.results.map(movie => <MovieItem key={movie.id} details={movie} />)}
    </div>
  );
}
