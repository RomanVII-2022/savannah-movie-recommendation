import React from 'react';
import Image from 'next/image';
import { MovieType } from '@/resources/types/categoryMovies';
import Link from 'next/link';

export default function MovieItem({ details }: { details?: MovieType }) {
  return (
    <Link
      href={`/movie/${details?.id}`}
      className="w-full cursor-pointer rounded-lg group"
      data-testid="movie-item-container"
    >
      <div
        className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2"
        data-testid="image-container"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
          alt="movie poster"
          fill
          className="object-cover rounded-lg"
          data-testid="movie-image"
        />
      </div>
      <p className="text-center text-white text-lg font-medium my-3" data-testid="movie-title">
        {details?.title}
      </p>
    </Link>
  );
}
