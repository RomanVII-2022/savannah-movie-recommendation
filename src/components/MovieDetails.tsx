import React from 'react';
import { Badge } from './ui/badge';

export default function MovieDetails() {
  return (
    <div className="space-y-10 p-10 h-full bg-black/50">
      <p className="text-3xl font-bold text-center text-white">Sinners</p>
      <div className="flex justify-between items-center text-white">
        <p className="text-lg font-semibold">133 mins</p>
        <p className="text-lg font-semibold">2025</p>
        <p className="text-lg font-semibold">7.7</p>
      </div>
      <p className="text-lg text-white">
        Christian Wolff applies his brilliant mind and illegal methods to reconstruct the unsolved
        puzzle of a Treasury chiefs murder.
      </p>
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
  );
}
