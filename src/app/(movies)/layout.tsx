import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden mt-3">
        <div className="w-1/5 md:w-1/9 lg:w-1/15 2xl:w-1/20">
          <SideBar />
        </div>
        <div className="w-4/5 md:w-8/9 lg:w-14/15 2xl:w-19/20 overflow-y-auto scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
