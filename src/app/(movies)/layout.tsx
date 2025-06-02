import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden mt-5">
        <div className="w-1/15">
          <SideBar />
        </div>
        <div className="w-14/15 overflow-y-auto scrollbar">{children}</div>
      </div>
    </div>
  );
}
