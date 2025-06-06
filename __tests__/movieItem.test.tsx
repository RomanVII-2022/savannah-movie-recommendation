import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieItem from '@/components/MovieItem';
import { MovieType } from '@/resources/types/categoryMovies';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...rest } = props;
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...rest} />;
  },
}));

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('MovieItem Component', () => {
  const mockMovie: MovieType = {
    adult: false,
    backdrop_path: '/nAxGnGHOsfzufThz20zgmRwKur3.jpg',
    genre_ids: [27, 28, 53],
    id: 1233413,
    original_language: 'en',
    original_title: 'Sinners',
    overview:
      'Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.',
    popularity: 476.8801,
    poster_path: '/yqsCU5XOP2mkbFamzAqbqntmfav.jpg',
    release_date: '2025-04-16',
    title: 'Sinners',
    video: false,
    vote_average: 7.529,
    vote_count: 1118,
  };

  test('renders correctly with valid movie details', () => {
    render(<MovieItem details={mockMovie} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/movie/${mockMovie.id}`);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/original${mockMovie.poster_path}`
    );
    expect(image).toHaveAttribute('alt', 'movie poster');
    expect(image).toHaveClass('object-cover');
    expect(image).toHaveClass('rounded-lg');

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.title)).toHaveClass('text-center');
    expect(screen.getByText(mockMovie.title)).toHaveClass('text-white');
    expect(screen.getByText(mockMovie.title)).toHaveClass('text-lg');
    expect(screen.getByText(mockMovie.title)).toHaveClass('font-medium');
    expect(screen.getByText(mockMovie.title)).toHaveClass('my-3');
  });

  test('renders without breaking when details is undefined', () => {
    render(<MovieItem details={undefined} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/movie/undefined');
  });

  test('applies correct hover styles', () => {
    render(<MovieItem details={mockMovie} />);

    const imageContainer = screen.getByTestId('image-container');
    expect(imageContainer).toHaveClass('group-hover:border-2');
  });

  test('has correct responsive height classes', () => {
    render(<MovieItem details={mockMovie} />);

    const imageContainer = screen.getByTestId('image-container');
    expect(imageContainer).toHaveClass('h-[180px]');
    expect(imageContainer).toHaveClass('md:h-[200px]');
    expect(imageContainer).toHaveClass('lg:h-[220px]');
    expect(imageContainer).toHaveClass('2xl:h-[300px]');
  });

  test('matches snapshot with movie details', () => {
    const { asFragment } = render(<MovieItem details={mockMovie} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot without details', () => {
    const { asFragment } = render(<MovieItem details={undefined} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
