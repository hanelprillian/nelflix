import {IMovieInfo} from "../types/movies";

export function movieAdapter (attributes : any) : IMovieInfo {
  return {
    id: attributes.id,
    title: attributes.title,
    thumbnail: `${process.env.REACT_APP_TMDB_API_IMG_URL}w1280${attributes.poster_path}`,
    backdrop: `${process.env.REACT_APP_TMDB_API_IMG_URL}w1280${attributes.backdrop_path}`,
    isAdult: attributes.adult,
    overview: attributes.overview,
    voteAverage: attributes.vote_average,
    voteCount: attributes.vote_count,
    releaseDate: attributes.release_date,
    genreIds: attributes.genre_ids,
  }
}
