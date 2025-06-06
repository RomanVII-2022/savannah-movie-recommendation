'use client';

import React, { useState } from 'react';
import { LogIn, LogOut, UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

function UserAction() {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="size-12 bg-tertiary cursor-pointer">
          <UserRound className="text-muted-foreground size-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={'bottom'}
        align="start"
        sideOffset={4}
      >
        {isLoggedIn ? (
          <>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{'John Doe'}</span>
                  <span className="truncate text-xs">{'xyz@gmail.com'}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={handleLogin}>
            <LogIn />
            Log In
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAction;
