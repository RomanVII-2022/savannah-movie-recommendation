import CategoryHeader from '@/components/CategoryHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-5">
      {[1, 2, 3].map(item => (
        <div key={item} className="mb-8">
          <CategoryHeader />
          <div className="hidden 2xl:grid grid-cols-10 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
              <div key={item} className="w-full cursor-pointer rounded-lg group">
                <div className="relative w-full h-[300px] xl:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2">
                  <Image
                    src="/poster.jpeg"
                    alt="movie poster"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-white text-lg font-medium my-3">Sinners</p>
              </div>
            ))}
          </div>
          <div className="hidden xl:grid grid-cols-7 2xl:hidden gap-5">
            {[1, 2, 3, 4, 5, 6, 7].map(item => (
              <div key={item} className="w-full cursor-pointer rounded-lg group">
                <div className="relative w-full h-[300px] xl:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2">
                  <Image
                    src="/poster.jpeg"
                    alt="movie poster"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-white text-lg font-medium my-3">Sinners</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid grid-cols-4 lg:hidden gap-5">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="w-full cursor-pointer rounded-lg group">
                <div className="relative w-full h-[300px] md:h-[200px] xl:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2">
                  <Image
                    src="/poster.jpeg"
                    alt="movie poster"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-white text-lg font-medium my-3">Sinners</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:hidden gap-5">
            {[1, 2].map(item => (
              <div key={item} className="w-full cursor-pointer rounded-lg group">
                <div className="relative w-full h-[150px] md:h-[200px] xl:h-[220px] 2xl:h-[300px] rounded-lg group-hover:border-2">
                  <Image
                    src="/poster.jpeg"
                    alt="movie poster"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-white text-lg font-medium my-3">Sinners</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
