import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/SearchInput';
import { useMovieStore } from '@/resources/store/movieStore';
import { useSearchMovies } from '@/resources/services/movieQueries';
import '@testing-library/jest-dom';

const push = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}));

const setSearchValue = jest.fn();
jest.mock('../src//resources/store/movieStore', () => ({
  useMovieStore: jest.fn(),
}));

jest.mock('../src/resources/services/movieQueries', () => ({
  useSearchMovies: jest.fn(),
}));

describe('SearchInput component', () => {
  beforeEach(() => {
    (useMovieStore as unknown as jest.Mock).mockImplementation(cb =>
      cb({
        searchValue: 'initial search',
        setSearchValue,
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and search icon', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Find something great ...');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('initial search');
  });

  it('calls router.push when wrapper is clicked', () => {
    render(<SearchInput />);
    const wrapper = screen.getByRole('textbox').parentElement as HTMLElement;
    fireEvent.click(wrapper);
    expect(push).toHaveBeenCalledWith('/search');
  });

  it('calls setSearchValue on input change', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Find something great ...');
    fireEvent.change(input, { target: { value: 'batman' } });
    expect(setSearchValue).toHaveBeenCalledWith('batman');
  });

  it('calls useSearchMovies with current search value', () => {
    render(<SearchInput />);
    expect(useSearchMovies).toHaveBeenCalledWith('initial search');
  });
});
