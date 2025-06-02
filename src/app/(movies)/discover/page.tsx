import React from 'react';

import MovieFilters from '@/components/MovieFilters';
import CategoryList from '@/components/CategoryList';
import MovieDetails from '@/components/MovieDetails';

export default function Discover() {
  return (
    <div className="flex h-full">
      <div className="w-7/9 mx-10 flex flex-col h-full">
        <MovieFilters />
        <CategoryList />
      </div>
      <div className="w-2/9 bg-[url(/poster.jpeg)] bg-no-repeat bg-cover sticky top-0 rounded-s-lg ">
        <MovieDetails />
      </div>
    </div>
  );
}
