import axios from 'axios';

export const baseAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
