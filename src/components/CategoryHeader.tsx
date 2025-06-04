import React from 'react';
import { Button } from './ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

function CategoryHeader({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="mb-5 flex justify-between">
      <p className="text-white text-lg md:text-2xl font-medium">{title}</p>
      <Button
        variant="secondary"
        className="bg-transparent cursor-pointer text-muted-foreground font-medium hover:text-black"
        asChild
      >
        <Link href={`/discover?category=${slug}`}>
          <p>See All</p>
          <ChevronRightIcon />
        </Link>
      </Button>
    </div>
  );
}

export default CategoryHeader;
