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
