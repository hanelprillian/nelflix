import {IMovieInfo} from "../../../types/movies";
import {Card, CardMedia, Grid, Stack, IconButton} from "@mui/material";
import {CardTitle, CardInfo, CardSummary} from "./styles"
import { PlayCircle, FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import {syncFavorite} from "../../../services/firebase/favorites";
import {useContext, useEffect, useState} from "react";
import {FirebaseContext} from "../../../utils/context";

function CardMovie ({movie} : {movie: IMovieInfo}) {
  const { favorites } = useContext(FirebaseContext);
  const [liked, setLiked] = useState<boolean>(false);

  async function handleFavorite () {
    await syncFavorite(movie)
    setLiked(!liked)
  }

  useEffect(() => {
    setLiked(Boolean(favorites.find(favorite => favorite.movieId === movie.id)))
  }, [favorites])

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
              {liked ? (
                <FavoriteOutlined sx={{ fontSize: 40, color: 'rgb(229, 9, 20)' }} />
              ) : (
                <FavoriteBorderOutlined sx={{ fontSize: 40 }} />
              )}
            </IconButton>
          </Stack>
        </Grid>
      </CardInfo>
    </Card>
  )
}

export default CardMovie
