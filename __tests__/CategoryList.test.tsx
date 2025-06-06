/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryList from '@/components/CategoryList';
import { useSearchParams } from 'next/navigation';
import { useFetchMovieCategoryList } from '@/resources/services/movieQueries';

jest.mock('../src/components/MovieItem', () => {
  const MockMovieItem = (props: any) => <div data-testid="movie-item">{props.details.title}</div>;
  MockMovieItem.displayName = 'MockMovieItem';
  return MockMovieItem;
});

jest.mock('../src/components/MovieSkeleton', () => {
  const MockMovieSkeleton = () => <div data-testid="movie-skeleton" />;
  MockMovieSkeleton.displayName = 'MockMovieSkeleton';
  return MockMovieSkeleton;
});

jest.mock('../src/components/MovieError', () => {
  const MockMovieError = ({ message }: { message: string }) => (
    <div data-testid="movie-error">{message}</div>
  );
  MockMovieError.displayName = 'MockMovieError';
  return MockMovieError;
});

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

jest.mock('../src/resources/services/movieQueries', () => ({
  useFetchMovieCategoryList: jest.fn(),
}));

describe('CategoryList', () => {
  const mockUseSearchParams = useSearchParams as jest.Mock;
  const mockUseFetchMovieCategoryList = useFetchMovieCategoryList as jest.Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue({
      get: () => 'popular',
    });
  });

  it('renders loading state', () => {
    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: true,
      isError: false,
    });

    render(<CategoryList />);
    expect(screen.getByTestId('movie-skeleton')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: false,
      isError: true,
      error: { message: 'Failed to fetch' },
    });

    render(<CategoryList />);
    expect(screen.getByTestId('movie-error')).toHaveTextContent('Failed to fetch');
  });

  it('renders movie items and "Load More" button', () => {
    const movies = [
      { id: 1, title: 'Movie One' },
      { id: 2, title: 'Movie Two' },
    ];

    const fetchNextPage = jest.fn();

    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: false,
      isError: false,
      data: movies,
      fetchNextPage,
      hasNextPage: true,
      isFetching: false,
    });

    render(<CategoryList />);

    const items = screen.getAllByTestId('movie-item');
    expect(items).toHaveLength(2);
    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Load More');
  });

  it('disables the "Load More" button when there is no next page', () => {
    const movies = [{ id: 1, title: 'Movie One' }];
    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: false,
      isError: false,
      data: movies,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetching: false,
    });

    render(<CategoryList />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows spinner and disables button while fetching next page', () => {
    const movies = [{ id: 1, title: 'Movie One' }];
    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: false,
      isError: false,
      data: movies,
      fetchNextPage: jest.fn(),
      hasNextPage: true,
      isFetching: true,
    });

    render(<CategoryList />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Please wait');
    expect(screen.getByTestId('movie-item')).toBeInTheDocument();
  });

  it('calls fetchNextPage on button click', () => {
    const fetchNextPage = jest.fn();
    const movies = [{ id: 1, title: 'Movie One' }];

    mockUseFetchMovieCategoryList.mockReturnValue({
      isPending: false,
      isError: false,
      data: movies,
      fetchNextPage,
      hasNextPage: true,
      isFetching: false,
    });

    render(<CategoryList />);
    fireEvent.click(screen.getByRole('button'));
    expect(fetchNextPage).toHaveBeenCalled();
  });
});
