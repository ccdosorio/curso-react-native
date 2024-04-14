import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a9cd3d1db6166a2a7aa999932eabf4f1',
    language: 'es',
  },
});
