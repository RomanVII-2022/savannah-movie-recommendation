import { allSidebarItems } from '@/constants/sidebarItems';
import React from 'react';

function SideBar() {
  return (
    <div className="space-y-10">
      {allSidebarItems.map(item => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-2 cursor-pointer hover:bg-[#ffffff0d] py-2 mx-2 rounded-md"
        >
          {item.path === '/' ? (
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
        </div>
      ))}
    </div>
  );
}

export default SideBar;
