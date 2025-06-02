import CategoryHeader from '@/components/CategoryHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-5">
      {[1, 2, 3].map(item => (
        <div key={item} className="mb-10">
          <CategoryHeader />
          <div className="grid grid-cols-10 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
              <div key={item} className="w-full cursor-pointer rounded-lg group">
                <div className="relative w-full h-[300px] rounded-lg group-hover:border-2">
                  <Image
                    src="/poster.jpeg"
                    alt="movie poster"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-white text-lg font-semibold my-3">Sinners</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
