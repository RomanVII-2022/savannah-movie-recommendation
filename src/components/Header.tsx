import Image from 'next/image';
import React from 'react';
import UserAction from './UserAction';
import SearchInput from './SearchInput';

function Header() {
  return (
    <div className="w-full flex justify-between items-center pr-5">
      <div className="w-1/5 md:w-1/9 lg:w-1/10 xl:w-1/15 2xl:w-1/20 flex justify-center">
        <Image src={'/logo.png'} alt="movie informatics logo" width={100} height={100} />
      </div>
      <SearchInput />
      <UserAction />
    </div>
  );
}

export default Header;
