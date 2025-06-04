import React from 'react';
import Image from 'next/image';

export default function MovieItem() {
  return (
    <div className="w-full cursor-pointer rounded-lg group">
      <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2">
        <Image src="/poster.jpeg" alt="movie poster" fill className="object-cover rounded-lg" />
      </div>
      <p className="text-center text-white text-lg font-medium my-3">Sinners</p>
    </div>
  );
}
