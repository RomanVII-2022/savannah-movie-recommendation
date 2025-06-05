import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query';
import MovieModel from '../models/moviesModel';
import { ParamValue } from 'next/dist/server/request/params';
import { useMemo } from 'react';

export const useFetchMovieBoardList = () => {
  const categories = ['now_playing', 'top_rated', 'popular'];
  const results = useQueries({
    queries: categories.map(category => ({
      queryKey: ['boardMovieList', category],
      queryFn: () => MovieModel.getBoardMovies(category),
    })),
    combine: results => {
      return {
        data: [
          { ...results[0].data, categoryTitle: 'Now Playing', slug: 'now_playing' },
          { ...results[1].data, categoryTitle: 'Top Rated', slug: 'top_rated' },
          { ...results[2].data, categoryTitle: 'Popular', slug: 'popular' },
        ],
        pending: results.some(result => result.isPending),
        isError: results.some(item => item.isError),
      };
    },
  });
  return {
    categoryItems: results.data,
    categoryPending: results.pending,
    categoryIsError: results.isError,
  };
};

export const useFetchMovieCategoryList = (category: string) => {
  const result = useInfiniteQuery({
    queryKey: ['categoryList', category],
    queryFn: ({ pageParam = 1 }) => MovieModel.getMoviesPerCategory(category, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      if (lastPage.total_pages === nextPage) return undefined;
      return nextPage;
    },
  });

  const combinedResults = useMemo(() => {
    return result.data?.pages.flatMap(page => page.results) || [];
  }, [result.data]);
  return {
    data: combinedResults,
    fetchNextPage: result.fetchNextPage,
    isFetchingNextPage: result.isFetchingNextPage,
    hasNextPage: result.hasNextPage,
    isFetching: result.isFetching,
    ispending: result.isPending,
    isError: result.isError,
    error: result.error,
  };
};

export const useFetchMovieDetails = (id: ParamValue) => {
  const results = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => MovieModel.getMoviesDetails(id),
  });
  return results;
};
