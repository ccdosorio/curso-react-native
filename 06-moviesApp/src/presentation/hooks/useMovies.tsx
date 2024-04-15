import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    // properties
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    // Methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase(
        movieDBFetcher,
        {page: popularPageNumber},
      );
      // PopularMovies + Nuevas Popular Movies
      setPopular(prev => {
        // Filtrar películas duplicadas basadas en el ID
        const uniqueMovies = popularMovies.filter(
          newMovie => !prev.some(oldMovie => oldMovie.id === newMovie.id),
        );
        // Agregar películas únicas al estado
        return [...prev, ...uniqueMovies];
      });
    },
  };
};
