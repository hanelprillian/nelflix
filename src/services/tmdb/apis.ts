const config = {
  API_KEY: process.env.REACT_APP_TMDB_API_KEY,
  BASE_URL: process.env.REACT_APP_TMDB_API_URL,
}

export async function getNowPlayingMovies () {
  const params = new URLSearchParams()
  params.append("api_key", config.API_KEY || '')
  return fetch(`${config.BASE_URL}movie/now_playing?${params.toString()}`)
}
export async function getPopularMovies () {
  const params = new URLSearchParams()
  params.append("api_key", config.API_KEY || '')
  return fetch(`${config.BASE_URL}movie/popular?${params.toString()}`)
}
export async function getUpcomingMovies () {
  const params = new URLSearchParams()
  params.append("api_key", config.API_KEY || '')
  return fetch(`${config.BASE_URL}movie/upcoming?${params.toString()}`)
}
export async function getTopRatedMovies () {
  const params = new URLSearchParams()
  params.append("api_key", config.API_KEY || '')
  return fetch(`${config.BASE_URL}movie/top_rated?${params.toString()}`)
}
