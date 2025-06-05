import Image from 'next/image';
import React from 'react';

export default function MovieError({ message }: { message?: string }) {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src={'/err.png'} alt="error image" width={200} height={200} />
        <p className="text-center text-lg font-bold text-muted-foreground">
          {' '}
          Something went wrong.
        </p>
        <p className="text-center text-lg text-white my-3">
          {message ? message : 'Kindly check your network connection and try again.'}
        </p>
      </div>
    </div>
  );
}
