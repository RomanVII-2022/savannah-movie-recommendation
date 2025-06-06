import { create } from 'zustand';

interface MovieStoreType {
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
}

export const useMovieStore = create<MovieStoreType>(set => ({
  searchValue: '',
  setSearchValue: (newSearchValue: string) =>
    set({
      searchValue: newSearchValue,
    }),
}));
