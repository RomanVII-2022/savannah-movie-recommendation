import { Button } from '@/components/ui/button';
import UserAction from '@/components/UserAction';
import { ChevronLeftIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function SingleMovie() {
  return (
    <div className="w-full min-h-screen bg-[url(/poster.jpeg)] bg-no-repeat bg-cover">
      <div className="bg-black/50 w-full min-h-screen flex flex-col">
        <div className="flex justify-between px-10 py-5">
          <Button variant="secondary" className="size-12 bg-tertiary cursor-pointer">
            <ChevronLeftIcon className="text-muted-foreground size-7" />
          </Button>
          <UserAction />
        </div>
        <div className="px-15 py-10 bg-black/50 grid md:grid-cols-2 flex-1">
          <div className="space-y-7 mb-5">
            <p className="text-3xl font-bold text-white">Sinners</p>
            <div className="flex items-center text-white gap-10">
              <p className="text-lg font-semibold">133 mins</p>
              <p className="text-lg font-semibold">2025</p>
              <div className="flex gap-3">
                <p className="text-lg font-semibold">7.7</p>
                <Image src="/rate.png" alt="imdb logo used for rating" width={50} height={50} />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">GENRES</p>
              <div className="flex gap-5">
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">CASTS</p>
              <div className="flex gap-5">
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">DIRECTORS</p>
              <div className="flex gap-5">
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
                <Badge variant="secondary" className="size-8 w-auto text-lg">
                  Badge
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-lg font-semibold text-muted-foreground">SUMMARY</p>
            <div className="flex gap-5">
              <p className="text-lg text-white">
                Christian Wolff applies his brilliant mind and illegal methods to reconstruct the
                unsolved puzzle of a Treasury chiefs murder. Christian Wolff applies his brilliant
                mind and illegal methods to reconstruct the unsolved puzzle of a Treasury chiefs
                murder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
