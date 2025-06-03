import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import UserAction from './UserAction';

function Header() {
  return (
    <div className="w-full flex justify-between items-center pr-5">
      <div className="w-1/5 md:w-1/9 lg:w-1/15 2xl:w-1/20 flex justify-center">
        <Image src={'/logo.png'} alt="movie informatics logo" width={100} height={100} />
      </div>

      <div className="w-[200px] md:w-[500px] px-5 py-2 rounded-3xl bg-tertiary flex justify-between items-center">
        <Input
          type="text"
          placeholder="Find something great ..."
          className="border-0 text-muted font-MEDIUM"
        />
        <Search className="text-muted-foreground" />
      </div>
      <UserAction />
    </div>
  );
}

export default Header;
