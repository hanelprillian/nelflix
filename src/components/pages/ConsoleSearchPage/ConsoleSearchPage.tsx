import ConsoleLayout from "../../layouts/Console/ConsoleLayout";
import {useEffect, useMemo, useState} from "react";
import {Container, Block, BlockTitle, BlockMovies} from "./styles";
import {Grid, Fade} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";
import {IMovieInfo} from "../../../types/movies";
import {getSearchMovies} from "../../../services/tmdb/apis";
import {movieAdapter} from "../../../adapters/movies";
import CardMovie from "../../elements/CardMovie/CardMovie";

function ConsoleSearchPage () {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<IMovieInfo[]>([])
  const keyword = useMemo(() => {
    if(typeof searchParams.get('keyword') !== 'undefined' && searchParams.get('keyword') !== null) {
      return searchParams.get('keyword')?.toString().trim()
    }
    return ''
  }, [searchParams])
  useEffect(() => {
    async function handleMovieSearch () {
      const q = keyword ? keyword : ''
      const { results } = await (await getSearchMovies(q)).json()
      setMovies(results.map(movieAdapter))
    }

    if(!keyword) {
      navigate('/console')
    }

    if(keyword && keyword.length > 2) {
      handleMovieSearch()
    }
  }, [keyword])
  return (
    <ConsoleLayout>
      <Fade in={true}>
        <div>
          <Container>
            <Block>
              <BlockTitle>
                Search: {keyword}
              </BlockTitle>
              <BlockMovies container gap={2} justifyContent="center">
                {movies.map(movie => (
                  <Grid item xs={12} sm={5.8} lg={3.87} xl={2.9} key={`search-${movie.id}`}>
                    <CardMovie movie={movie} />
                  </Grid>
                ))}
              </BlockMovies>
            </Block>
          </Container>
        </div>
      </Fade>
    </ConsoleLayout>
  )
}

export default ConsoleSearchPage
