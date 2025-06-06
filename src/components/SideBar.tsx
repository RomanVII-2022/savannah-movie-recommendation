'use client';
import { allSidebarItems } from '@/constants/sidebarItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SideBar() {
  const currentPath = usePathname();
  return (
    <div className="space-y-10">
      {allSidebarItems.map(item => (
        <Link
          key={item.id}
          href={`${item.path}?category=now_playing`}
          className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#ffffff0d] py-2 mx-2 rounded-md"
        >
          {item.path === currentPath ? (
            <>
              <item.icon className="text-primary" size={30} />
              <p className="text-primary">{item.name}</p>
            </>
          ) : (
            <>
              <item.icon className="text-muted-foreground" size={30} />
              <p className="text-muted-foreground">{item.name}</p>
            </>
          )}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
