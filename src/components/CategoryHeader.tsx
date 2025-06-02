import React from 'react';
import { Button } from './ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

function CategoryHeader() {
  return (
    <div className="mb-5 flex justify-between">
      <p className="text-white text-2xl font-semibold">Popular Movies</p>
      <Button
        variant="secondary"
        className="bg-tertiary cursor-pointer text-muted-foreground text-lg font-medium hover:text-black"
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
