'use client';
import { Button } from '@/components/ui/button';
import UserAction from '@/components/UserAction';
import { ChevronLeftIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useFetchMovieDetails } from '@/resources/services/movieQueries';
import { useParams, useRouter } from 'next/navigation';

export default function SingleMovie() {
  const { movieId } = useParams();
  const router = useRouter();
  const { data: movieDetails } = useFetchMovieDetails(movieId);

  return (
    <div
      className={`w-full min-h-screen`}
      style={{
        backgroundImage: movieDetails?.backdrop_path
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
          : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black/30 w-full min-h-screen flex flex-col">
        <div className="flex justify-between px-10 py-5">
          <Button
            variant="secondary"
            className="size-12 bg-tertiary cursor-pointer"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="text-muted-foreground size-7" />
          </Button>
          <UserAction />
        </div>
        <div className="px-15 py-10 bg-black/50 grid lg:grid-cols-2 flex-1 gap-5">
          <div className="space-y-7 mb-5">
            <p className="text-3xl font-bold text-white">{movieDetails?.title}</p>
            <div className="flex items-center text-white gap-10">
              <p className="text-lg font-semibold">{movieDetails?.runtime} mins</p>
              <p className="text-lg font-semibold">{movieDetails?.release_date.split('-')[0]}</p>
              <div className="flex gap-3">
                <p className="text-lg font-semibold">
                  {movieDetails?.vote_average.toString().substring(0, 3)}
                </p>
                <Image src="/rate.png" alt="imdb logo used for rating" width={50} height={50} />
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">GENRES</p>
              <div className="flex flex-wrap gap-5">
                {movieDetails?.genres.map(genre => (
                  <Badge key={genre.id} variant="secondary" className="size-8 w-auto text-lg">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">PRODUCTION</p>
              <div className="flex flex-wrap gap-5 ">
                {movieDetails?.production_companies.map(company => (
                  <Badge key={company.id} variant="secondary" className="size-8 w-auto text-lg">
                    {company.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-muted-foreground">LANGUEGES</p>
              <div className="flex flex-wrap gap-5">
                {movieDetails?.spoken_languages.map(language => (
                  <Badge
                    key={language.english_name}
                    variant="secondary"
                    className="size-8 w-auto text-lg"
                  >
                    {language.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-lg font-semibold text-muted-foreground">TAGLINE</p>
            <div className="flex gap-5">
              <p className="text-lg text-white">{movieDetails?.tagline}</p>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">SUMMARY</p>
            <div className="flex gap-5">
              <p className="text-lg text-white">{movieDetails?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
