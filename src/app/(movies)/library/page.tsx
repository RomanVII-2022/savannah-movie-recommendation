'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CloudHail, PersonStanding } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Library() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    const response = await fetch('/api/auth', { cache: 'no-store' });
    const tokenData = await response.json();

    const requestToken = tokenData.data.request_token;
    if (!requestToken) throw new Error('Failed to get request token');

    const currentPath = window.location.pathname;
    const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${encodeURIComponent(`http://localhost:3000/api/callback?state=${currentPath}`)}`;

    window.location.href = redirectUrl;
    setIsLoggedIn(false);
  };
  return isLoggedIn ? (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center space-y-5">
        <p className="text-white text-2xl text-wrap">
          Library is only available to logged in users
        </p>
        <Image src="/library.png" alt="library image" width={300} height={300} />
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex gap-3 w-[250px]">
            <CloudHail color="white" className="size-15" />
            <p className="text-white ">
              Access your favorite movies and TV shows anytime, anywhere
            </p>
          </div>
          <div className="flex gap-3 w-[250px]">
            <PersonStanding color="white" className="size-15" />
            <p className="text-white ">Recommendations tailored to your viewing history</p>
          </div>
        </div>
        <Button variant="secondary" className="cursor-pointer" onClick={handleLogin}>
          Log in
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center space-y-5 p-5">
        <p className="text-white text-2xl text-wrap">
          Library is only available to logged in users
        </p>
        <Image src="/library.png" alt="library image" width={300} height={300} />
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex gap-3 w-[250px]">
            <CloudHail color="white" className="size-15" />
            <p className="text-white ">
              Access your favorite movies and TV shows anytime, anywhere
            </p>
          </div>
          <div className="flex gap-3 w-[250px]">
            <PersonStanding color="white" className="size-15" />
            <p className="text-white ">Recommendations tailored to your viewing history</p>
          </div>
        </div>
        <Button variant="secondary" className="cursor-pointer" onClick={handleLogin}>
          Log in
        </Button>
      </div>
    </div>
  );
}
