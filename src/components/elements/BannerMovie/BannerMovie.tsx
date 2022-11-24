import {IconButton} from "@mui/material";
import {IMovieInfo} from "../../../types/movies";
import {MouseEvent, useContext, useEffect, useState} from "react";
import {syncFavorite} from "../../../services/firebase/favorites";
import {FirebaseContext} from "../../../utils/context";
import {FavoriteBorderOutlined, FavoriteOutlined} from "@mui/icons-material";
import {BannerContainer, BannerImage, BannerImageCover} from "./styles";

function BannerMovie ({movie} : {movie: IMovieInfo}) {
  const { favorites } = useContext(FirebaseContext);
  return (
    <BannerContainer>
      <BannerImage src={movie.backdrop}/>
      <BannerImageCover>
      </BannerImageCover>
    </BannerContainer>
  )
}

export default BannerMovie
