/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetails from '@/components/MovieDetails';

// Mock next/navigation hooks
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock components used inside MovieDetails
jest.mock('../src/components/MovieSkeleton', () => {
  const MovieSkeletonMock = () => <div data-testid="movie-skeleton" />;
  MovieSkeletonMock.displayName = 'MovieSkeleton';
  return MovieSkeletonMock;
});

jest.mock('../src/components/MovieError', () => {
  const MovieErrorMock = ({ message }: { message: string }) => (
    <div data-testid="movie-error">{message}</div>
  );
  MovieErrorMock.displayName = 'MovieError';
  return MovieErrorMock;
});

jest.mock('../src/components/UserAction', () => {
  const Mock = () => <div data-testid="user-action" />;
  Mock.displayName = 'UserAction';
  return Mock;
});

jest.mock('../src/components/ui/button', () => ({
  Button: ({ children, onClick, className }: any) => (
    <button onClick={onClick} className={className} data-testid="button">
      {children}
    </button>
  ),
}));

jest.mock('next/image', () => {
  // eslint-disable-next-line @next/next/no-img-element
  const NextImageMock = (props: any) => <img {...props} alt={props.alt} data-testid="image" />;
  NextImageMock.displayName = 'NextImage';
  return {
    __esModule: true,
    default: NextImageMock,
  };
});

// Mock the data fetching hook
jest.mock('../src/resources/services/movieQueries', () => ({
  useFetchMovieDetails: jest.fn(),
}));

import { useParams, useRouter } from 'next/navigation';
import { useFetchMovieDetails } from '@/resources/services/movieQueries';

describe('MovieDetails component', () => {
  const mockRouterBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useParams as jest.Mock).mockReturnValue({ movieId: '123' });
    (useRouter as jest.Mock).mockReturnValue({ back: mockRouterBack });
  });

  it('renders loading state with MovieSkeleton', () => {
    (useFetchMovieDetails as jest.Mock).mockReturnValue({
      data: null,
      isPending: true,
      isError: false,
      error: null,
    });

    render(<MovieDetails />);
    expect(screen.getByTestId('movie-skeleton')).toBeInTheDocument();
  });

  it('renders error state with MovieError', () => {
    (useFetchMovieDetails as jest.Mock).mockReturnValue({
      data: null,
      isPending: false,
      isError: true,
      error: { message: 'Failed to fetch' },
    });

    render(<MovieDetails />);
    expect(screen.getByTestId('movie-error')).toHaveTextContent('Failed to fetch');
  });

  it('renders movie details correctly when data is loaded', () => {
    (useFetchMovieDetails as jest.Mock).mockReturnValue({
      data: {
        title: 'Inception',
        runtime: 148,
        release_date: '2010-07-16',
        vote_average: 8.8,
        backdrop_path: '/backdrop.jpg',
        poster_path: '/poster.jpg',
        tagline: 'Your mind is the scene of the crime.',
        overview:
          'A thief who steals corporate secrets through the use of dream-sharing technology...',
        genres: [
          { id: 1, name: 'Action' },
          { id: 2, name: 'Sci-Fi' },
        ],
        production_companies: [
          { id: 1, name: 'Legendary Pictures' },
          { id: 2, name: 'Syncopy' },
        ],
        spoken_languages: [
          { english_name: 'English', name: 'English' },
          { english_name: 'Japanese', name: 'Japanese' },
        ],
      },
      isPending: false,
      isError: false,
      error: null,
    });

    render(<MovieDetails />);

    // Check background style contains backdrop image url
    const container =
      screen.getByTestId('movie-details-container') ||
      screen.getByText('Inception').parentElement?.parentElement;
    expect(container).toHaveStyle(
      `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/backdrop.jpg)`
    );

    // Title
    expect(screen.getByText('Inception')).toBeInTheDocument();

    // Runtime and release year
    expect(screen.getByText('148 mins')).toBeInTheDocument();
    expect(screen.getByText('2010')).toBeInTheDocument();

    // Rating (substring to 3 chars)
    expect(screen.getByText('8.8')).toBeInTheDocument();

    // Tagline and Overview
    expect(screen.getByText('Your mind is the scene of the crime.')).toBeInTheDocument();
    expect(screen.getByText(/A thief who steals corporate secrets/i)).toBeInTheDocument();

    // Genres badges
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Sci-Fi')).toBeInTheDocument();

    // Production companies badges
    expect(screen.getByText('Legendary Pictures')).toBeInTheDocument();
    expect(screen.getByText('Syncopy')).toBeInTheDocument();

    // Spoken languages badges
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Japanese')).toBeInTheDocument();

    // Image for rating is present
    expect(screen.getByAltText('imdb logo used for rating')).toBeInTheDocument();
  });

  it('calls router.back when back button is clicked', () => {
    (useFetchMovieDetails as jest.Mock).mockReturnValue({
      data: null,
      isPending: false,
      isError: false,
      error: null,
    });

    render(<MovieDetails />);
    const backButton = screen.getByTestId('button');
    fireEvent.click(backButton);
    expect(mockRouterBack).toHaveBeenCalledTimes(1);
  });
});
