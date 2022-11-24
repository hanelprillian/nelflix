import {IconButton} from "@mui/material";
import {IMovieInfo} from "../../../types/movies";
import {MouseEvent, useContext, useEffect, useState} from "react";
import {syncFavorite} from "../../../services/firebase/favorites";
import {FirebaseContext} from "../../../utils/context";
import {FavoriteBorderOutlined, FavoriteOutlined} from "@mui/icons-material";

function MovieFavoriteButton ({movie} : {movie: IMovieInfo}) {
  const { favorites, refreshFavorites } = useContext(FirebaseContext);
  const [liked, setLiked] = useState<boolean>(false);
  async function handleFavorite (event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    await syncFavorite(movie)
    setLiked(!liked)
    await refreshFavorites()
  }
  useEffect(() => {
    setLiked(Boolean(favorites.find(favorite => favorite.movieId === movie.id)))
  }, [favorites])
  return (
    <IconButton onClick={handleFavorite}>
      {liked ? (
        <FavoriteOutlined sx={{ fontSize: 40, color: 'rgb(229, 9, 20)' }} />
      ) : (
        <FavoriteBorderOutlined sx={{ fontSize: 40 }} />
      )}
    </IconButton>
  )
}

export default MovieFavoriteButton
