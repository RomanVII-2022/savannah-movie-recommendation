/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from '@/components/SideBar';
import { usePathname } from 'next/navigation';
import { allSidebarItems } from '@/constants/sidebarItems';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('../src/constants/sidebarItems', () => ({
  allSidebarItems: [
    {
      id: '1',
      name: 'Home',
      path: '/home',
      icon: (props: any) => <svg data-testid="icon-home" {...props} />,
    },
    {
      id: '2',
      name: 'Search',
      path: '/search',
      icon: (props: any) => <svg data-testid="icon-search" {...props} />,
    },
  ],
}));

describe('SideBar component', () => {
  it('renders all sidebar items with inactive styles when no path matches', () => {
    (usePathname as jest.Mock).mockReturnValue('/not-matching');

    render(<SideBar />);

    allSidebarItems.forEach(item => {
      const link = screen.getByRole('link', {
        name: new RegExp(item.name, 'i'),
      });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `${item.path}?category=now_playing`);
      expect(screen.getByText(item.name)).toHaveClass('text-muted-foreground');
    });

    expect(screen.getByTestId('icon-home')).toHaveClass('text-muted-foreground');
    expect(screen.getByTestId('icon-search')).toHaveClass('text-muted-foreground');
  });

  it('applies active styles when the current path matches an item', () => {
    (usePathname as jest.Mock).mockReturnValue('/search');

    render(<SideBar />);

    const activeItem = allSidebarItems.find(item => item.path === '/search');
    const activeText = screen.getByText(activeItem!.name);
    const activeIcon = screen.getByTestId('icon-search');

    expect(activeText).toHaveClass('text-primary');
    expect(activeIcon).toHaveClass('text-primary');
  });

  it('renders correct number of sidebar links', () => {
    (usePathname as jest.Mock).mockReturnValue('/home');

    render(<SideBar />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(allSidebarItems.length);
  });
});
