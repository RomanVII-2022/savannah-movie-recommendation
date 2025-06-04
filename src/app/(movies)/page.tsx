import CategoryHeader from '@/components/CategoryHeader';
import MovieItem from '@/components/MovieItem';

export default function Home() {
  return (
    <div className="px-5">
      {[1, 2, 3].map(item => (
        <div key={item} className="mb-8">
          <CategoryHeader />
          <div className="hidden 2xl:grid grid-cols-10 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
              <MovieItem key={item} />
            ))}
          </div>
          <div className="hidden xl:grid grid-cols-7 2xl:hidden gap-5">
            {[1, 2, 3, 4, 5, 6, 7].map(item => (
              <MovieItem key={item} />
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-5 xl:hidden gap-5">
            {[1, 2, 3, 4, 5].map(item => (
              <MovieItem key={item} />
            ))}
          </div>
          <div className="hidden md:grid grid-cols-4 lg:hidden gap-5">
            {[1, 2, 3, 4].map(item => (
              <MovieItem key={item} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:hidden gap-5">
            {[1, 2].map(item => (
              <MovieItem key={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
