import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import UserAction from '@/components/UserAction';
import { ChevronLeftIcon } from 'lucide-react';
import React from 'react';

export default function SingleMovie() {
  return (
    <div className="w-full h-full bg-[url(/poster.jpeg)] bg-no-repeat bg-cover">
      <div className="bg-black/50 w-full h-screen">
        <div className="flex justify-between px-10 py-5">
          <Button variant="secondary" className="size-12 bg-tertiary cursor-pointer">
            <ChevronLeftIcon className="text-muted-foreground size-7" />
          </Button>
          <UserAction />
        </div>
        <div className="p-20 h-[94vh] bg-black/50">
          <div className="space-y-10">
            <p className="text-3xl font-bold text-center text-white">Sinners</p>
            <div className="flex justify-between items-center text-white">
              <p className="text-lg font-semibold">133 mins</p>
              <p className="text-lg font-semibold">2025</p>
              <p className="text-lg font-semibold">7.7</p>
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

            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">SUMMARY</p>
              <div className="flex gap-5">
                <p className="text-lg text-white">
                  Christian Wolff applies his brilliant mind and illegal methods to reconstruct the
                  unsolved puzzle of a Treasury chiefs murder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
