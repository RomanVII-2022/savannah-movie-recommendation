'use client';
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { useSearchMovies } from '@/resources/services/movieQueries';
import { useRouter } from 'next/navigation';
import { useMovieStore } from '@/resources/store/movieStore';

export default function SearchInput() {
  const searchValue = useMovieStore(state => state.searchValue);
  const setSearchValue = useMovieStore(state => state.setSearchValue);
  useSearchMovies(searchValue);
  const router = useRouter();
  return (
    <div
      className="relative w-[200px] md:w-[500px] px-5 py-2 rounded-3xl bg-tertiary flex justify-between items-center"
      onClick={() => router.push('/search')}
    >
      <Input
        type="text"
        placeholder="Find something great ..."
        className="border-0 text-muted font-MEDIUM"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <Search className="text-muted-foreground" />
    </div>
  );
}
