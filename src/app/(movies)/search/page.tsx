'use client';
import MovieError from '@/components/MovieError';
import MovieItem from '@/components/MovieItem';
import MovieSkeleton from '@/components/MovieSkeleton';
import { useSearchMovies } from '@/resources/services/movieQueries';
import { useMovieStore } from '@/resources/store/movieStore';
import Image from 'next/image';
import React from 'react';

export default function Search() {
  const searchValue = useMovieStore(state => state.searchValue);
  const { data, isPending, isError, error } = useSearchMovies(searchValue);

  if (isPending) {
    return <MovieSkeleton />;
  }

  if (isError) {
    return <MovieError message={error.message} />;
  }
  return (
    <div className="flex flex-col h-full">
      {searchValue.length < 1 ? (
        <Image
          src={'/online.png'}
          width={200}
          height={200}
          alt="search image"
          className="self-center"
        />
      ) : (
        <div className="px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-5 overflow-y-auto flex-auto pb-5">
          {data?.results.map(movie => <MovieItem key={movie.id} details={movie} />)}
        </div>
      )}
    </div>
  );
}
