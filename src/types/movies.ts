export interface IMovieInfo {
  id: string | number,
  title: string,
  thumbnail?: string,
  backdrop?: string,
  isAdult?: boolean,
  overview?: string,
  voteAverage?: number,
  voteCount?: number,
  releaseDate?: string,
  genreIds?: number[],
}

export interface IFavoriteMovieInfo {
  movieId: number | string,
  uuid: string,
  movieData: IMovieInfo,
}
