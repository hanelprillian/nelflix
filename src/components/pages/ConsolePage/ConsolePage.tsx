import ConsoleLayout from "../../layouts/Console/ConsoleLayout";
import {useEffect, useState} from "react";
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies
} from "../../../services/tmdb/apis";
import {IMovieInfo} from "../../../types/movies";
import {movieAdapter} from "../../../adapters/movies";

function ConsolePage () {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [blocks, setBlocks] = useState<{
    blockName: string,
    movies: IMovieInfo[]
  }[]>([])

  useEffect(() => {
    setIsLoading(true)

    async function handleFetchGenres () {
      await Promise.all([
        getNowPlayingMovies(),
        getUpcomingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
      ]).then(async responses => {
        setBlocks([])

        await responses.forEach(async (response, index) => {
          const {results} = await response.json();
          let blockName = 'Now Playing'

          if(index === 1) {
            blockName = 'Up Coming Movies'
          } else if(index === 2) {
            blockName = 'Popular Movies'
          }  else if(index === 3) {
            blockName = 'Top Rated Movies'
          }
          setBlocks(oldBlocks => [...oldBlocks, {
            blockName,
            movies: results.map(movieAdapter)
          }])
        })

        setIsLoading(false)
      })
    }
    handleFetchGenres()
  }, [])

  useEffect(() => {
    if(!isLoading) {
      console.log('blocks', blocks)
    }
  }, [isLoading, blocks])
  return (
    <ConsoleLayout>
      {isLoading ? 'loading...' : 'movies'}
    </ConsoleLayout>
  )
}

export default ConsolePage
