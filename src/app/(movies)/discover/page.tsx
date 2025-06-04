import React from 'react';

import MovieFilters from '@/components/MovieFilters';
import CategoryList from '@/components/CategoryList';

export default function Discover() {
  return (
    <div className="flex flex-col h-full">
      <MovieFilters />
      <CategoryList />
    </div>
  );
}
