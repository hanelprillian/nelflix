import {IMovieInfo} from "../../../types/movies";
import {Card, CardMedia, Grid, Stack, IconButton} from "@mui/material";
import {CardTitle, CardInfo, CardSummary} from "./styles"
import { PlayCircle, AddCircleOutline } from '@mui/icons-material';
import {syncFavorite} from "../../../services/firebase/favorites";

function CardMovie ({movie} : {movie: IMovieInfo}) {
  function handleFavorite () {
    syncFavorite(movie)
  }
  return (
    <Card sx={{height: 300, position: 'relative'}}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="100%"
        image={movie.thumbnail}
      />
      <CardInfo>
        <Grid p={2}>
          <CardTitle>
            {movie.title}
          </CardTitle>
          <CardSummary>
            {movie.overview}
          </CardSummary>
          <Stack direction="row" spacing={0}>
            <IconButton>
              <PlayCircle sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton onClick={handleFavorite}>
              <AddCircleOutline sx={{ fontSize: 40 }} />
            </IconButton>
          </Stack>
        </Grid>
      </CardInfo>
    </Card>
  )
}

export default CardMovie
