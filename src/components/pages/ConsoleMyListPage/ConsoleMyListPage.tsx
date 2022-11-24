import ConsoleLayout from "../../layouts/Console/ConsoleLayout";
import {useContext} from "react";
import {Container, Block, BlockTitle, BlockMovies} from "./styles";
import CardMovie from "../../elements/CardMovie";
import {Grid, Fade} from "@mui/material";
import {FirebaseContext} from "../../../utils/context";

function ConsoleMyListPage () {
  const { favorites } = useContext(FirebaseContext);

  return (
    <ConsoleLayout>
      <Fade in={true}>
        <div>
          <Container>
            <Block>
              <BlockTitle>
                My Favorite Movies
              </BlockTitle>
              <BlockMovies container gap={2} justifyContent="center">
                {favorites.map(favorite => (
                  <Grid item xs={12} sm={5.8} lg={3.87} xl={2.9} key={`favorite-${favorite.movieId}-${favorite.uuid}`}>
                    <CardMovie movie={favorite.movieData} />
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

export default ConsoleMyListPage
