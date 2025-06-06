'use client';
import CategoryHeader from '@/components/CategoryHeader';
import MovieError from '@/components/MovieError';
import MovieItem from '@/components/MovieItem';
import MovieSkeleton from '@/components/MovieSkeleton';
import { useFetchMovieBoardList } from '@/resources/services/movieQueries';

export default function Home() {
  const { categoryItems, categoryPending, categoryIsError } = useFetchMovieBoardList();

  if (categoryPending) {
    return <MovieSkeleton />;
  }

  if (categoryIsError) {
    return <MovieError />;
  }

  return (
    <div className="px-5">
      {categoryItems.map(category => (
        <div key={category.categoryTitle} className="mb-3">
          <CategoryHeader title={category.categoryTitle} slug={category.slug} />
          <div className="hidden 2xl:grid grid-cols-10 gap-5">
            {category?.results
              ?.slice(0, 10)
              .map(movie => <MovieItem key={movie.id} details={movie} />)}
          </div>
          <div className="hidden xl:grid grid-cols-7 2xl:hidden gap-5">
            {category?.results
              ?.slice(0, 7)
              .map(movie => <MovieItem key={movie.id} details={movie} />)}
          </div>
          <div className="hidden lg:grid grid-cols-5 xl:hidden gap-5">
            {category?.results
              ?.slice(0, 5)
              .map(movie => <MovieItem key={movie.id} details={movie} />)}
          </div>
          <div className="hidden md:grid grid-cols-4 lg:hidden gap-5">
            {category?.results
              ?.slice(0, 4)
              .map(movie => <MovieItem key={movie.id} details={movie} />)}
          </div>
          <div className="grid grid-cols-2 md:hidden gap-5">
            {category?.results
              ?.slice(0, 2)
              .map(movie => <MovieItem key={movie.id} details={movie} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
