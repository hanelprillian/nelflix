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
import {Container, Block, BlockTitle, BlockMovies} from "./styles";
import CardMovie from "../../elements/CardMovie";
import {Grid, Fade} from "@mui/material";
import BannerMovie from "../../elements/BannerMovie";

function ConsolePage () {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [blocks, setBlocks] = useState<{
    blockName: string,
    movies: IMovieInfo[]
  }[]>([])
  const [selectedMovie, setSelectedMovie] = useState<IMovieInfo | null>(null)

  useEffect(() => {
    setIsLoading(true)

    async function handleMovieBanner () {
      const { results } = await (await getPopularMovies()).json()
      const randomBlocksIndex = getRandomIntInclusive(0, results.length - 1)
      setSelectedMovie(movieAdapter(results[randomBlocksIndex]))
    }
    async function handleFetchGenres () {
      await Promise.all([
        getNowPlayingMovies(),
        getUpcomingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
      ]).then(async responses => {
        setBlocks([])
        await Promise.all(responses.map(async (response, index) => {
          const { results } = await response.json();
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
            movies: results.filter((d : any,i : number) => i <= 11).map(movieAdapter)
          }])
        })).then(() => {
          setIsLoading(false)
        })
      })
    }
    handleMovieBanner()
    handleFetchGenres()
  }, [])

  return (
    <ConsoleLayout>
      {!isLoading && (
        <Fade in={true}>
          <div>
            {selectedMovie && (
              <BannerMovie movie={selectedMovie}></BannerMovie>
            )}
            <Container>
              {blocks.map(block => (
                <Block key={block.blockName}>
                  <BlockTitle>
                    {block.blockName}
                  </BlockTitle>
                  <BlockMovies container gap={2} justifyContent="center">
                    {block.movies.map(movie => (
                      <Grid item xs={12} sm={5.8} lg={3.87} xl={2.9} key={`${block.blockName}-${movie.id}`}>
                        <CardMovie key={movie.id} movie={movie} />
                      </Grid>
                    ))}
                  </BlockMovies>
                </Block>
              ))}
            </Container>
          </div>
        </Fade>
      )}
    </ConsoleLayout>
  )
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default ConsolePage
