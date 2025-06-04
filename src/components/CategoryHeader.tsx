import React from 'react';
import { Button } from './ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

function CategoryHeader() {
  return (
    <div className="mb-5 flex justify-between">
      <p className="text-white text-lg md:text-2xl font-medium">Popular Movies</p>
      <Button
        variant="secondary"
        className="bg-transparent cursor-pointer text-muted-foreground font-medium hover:text-black"
        asChild
      >
        <Link href="/discover">
          <p>See All</p>
          <ChevronRightIcon />
        </Link>
      </Button>
    </div>
  );
}

export default CategoryHeader;
