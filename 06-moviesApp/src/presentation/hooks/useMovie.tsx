import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const [fullMovie] = await Promise.all([fullMoviePromise]);
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
};
