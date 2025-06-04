import React from 'react';
import MovieItem from './MovieItem';

export default function CategoryList() {
  return (
    <div className="px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-10 gap-5 overflow-y-auto flex-auto pb-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
        <MovieItem key={item} />
      ))}
    </div>
  );
}
