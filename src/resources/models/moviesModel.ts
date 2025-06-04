import { ParamValue } from 'next/dist/server/request/params';
import { MovieResponseType } from '../types/categoryMovies';
import { MovieDetailsType } from '../types/singleMovieDetail';
import { baseAxiosInstance } from '../utils/baseRequest';

const APIREADACCESSTOKEN = process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN;

class MovieModel {
  static async getBoardMovies(category: string): Promise<MovieResponseType> {
    const response = await baseAxiosInstance.get<MovieResponseType>(`/${category}`, {
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
    const response = await baseAxiosInstance.get<MovieResponseType>(
      `/${category}?page=${pageParam}`,
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
    const response = await baseAxiosInstance.get<MovieDetailsType>(`/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIREADACCESSTOKEN}`,
      },
    });

    return response.data;
  }
}

export default MovieModel;
