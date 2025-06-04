import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className="w-[200px] md:w-[500px] px-5 py-2 rounded-3xl bg-tertiary flex justify-between items-center">
      <Input
        type="text"
        placeholder="Find something great ..."
        className="border-0 text-muted font-MEDIUM"
      />
      <Search className="text-muted-foreground" />
    </div>
  );
}
