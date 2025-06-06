import { ParamValue } from 'next/dist/server/request/params';
import { MovieResponseType } from '../types/categoryMovies';
import { MovieDetailsType } from '../types/singleMovieDetail';
import { baseAxiosInstance } from '../utils/baseRequest';

const APIREADACCESSTOKEN = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

class MovieModel {
  static async getBoardMovies(category: string): Promise<MovieResponseType> {
    const response = await baseAxiosInstance.get<MovieResponseType>(`/movie/${category}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIREADACCESSTOKEN}`,
      },
    });

    return response.data;
  }

  static async getMoviesPerCategory(
    category: string,
    pageParam: number
  ): Promise<MovieResponseType> {
    console.log('url called', `/${category}?page=${pageParam}`);
    const response = await baseAxiosInstance.get<MovieResponseType>(
      `/movie/${category}?page=${pageParam}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIREADACCESSTOKEN}`,
        },
      }
    );

    return response.data;
  }

  static async getMoviesDetails(id: ParamValue): Promise<MovieDetailsType> {
    const response = await baseAxiosInstance.get<MovieDetailsType>(`/movie/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIREADACCESSTOKEN}`,
      },
    });

    return response.data;
  }

  static async searchMovies(searchQuery: string): Promise<MovieResponseType> {
    const response = await baseAxiosInstance.get<MovieResponseType>(
      `/search/movie?query=${searchQuery}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${APIREADACCESSTOKEN}`,
        },
      }
    );

    return response.data;
  }
}

export default MovieModel;
