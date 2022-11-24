import ConsoleLayout from "../../layouts/Console/ConsoleLayout";
import {useContext, useEffect, useMemo} from "react";
import {Container, Block, BlockTitle, BlockMovies} from "./styles";
import CardMovie from "../../elements/CardMovie";
import {Grid, Fade} from "@mui/material";
import {FirebaseContext} from "../../../utils/context";
import {useNavigate, useSearchParams} from "react-router-dom";

function ConsoleSearchPage () {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const keyword = useMemo(() => {
    if(typeof searchParams.get('keyword') !== 'undefined' && searchParams.get('keyword') !== null) {
      return searchParams.get('keyword')?.toString().trim()
    }
    return ''
  }, [searchParams])
  useEffect(() => {
    if(!keyword) {
      navigate('/console')
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
                {/*{favorites.map(favorite => (*/}
                {/*  <Grid item xs={12} sm={5.8} lg={3.87} xl={2.9} key={`favorite-${favorite.movieId}-${favorite.uuid}`}>*/}
                {/*    <CardMovie movie={favorite.movieData} />*/}
                {/*  </Grid>*/}
                {/*))}*/}
              </BlockMovies>
            </Block>
          </Container>
        </div>
      </Fade>
    </ConsoleLayout>
  )
}

export default ConsoleSearchPage
