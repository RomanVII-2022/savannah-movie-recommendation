// __tests__/CategoryHeader.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryHeader from '@/components/CategoryHeader';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} data-testid="category-link">
      {children}
    </a>
  );
  Link.displayName = 'Link';
  return Link;
});

describe('CategoryHeader component', () => {
  const title = 'Popular Movies';
  const slug = 'popular';

  it('renders the title correctly', () => {
    render(<CategoryHeader title={title} slug={slug} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the "See All" button with ChevronRightIcon', () => {
    render(<CategoryHeader title={title} slug={slug} />);
    const link = screen.getByTestId('category-link');
    expect(link).toHaveAttribute('href', `/discover?category=${slug}`);
    expect(screen.getByText('See All')).toBeInTheDocument();
  });

  it('has correct styles and structure applied to the link inside the button', () => {
    render(<CategoryHeader title={title} slug={slug} />);
    const link = screen.getByTestId('category-link');
    expect(link).toHaveAttribute('href', `/discover?category=${slug}`);
    expect(link).toHaveTextContent('See All');
  });
});
