import {Grid, IconButton} from "@mui/material";
import {IMovieInfo} from "../../../types/movies";
import {MouseEvent, useContext, useEffect, useState} from "react";
import {syncFavorite} from "../../../services/firebase/favorites";
import {FirebaseContext} from "../../../utils/context";
import {PlayCircle, InfoOutlined} from "@mui/icons-material";
import {BannerContainer, BannerImage, BannerImageCover, Title, Overview, ButtonContainer, PlayButton, InfoButton} from "./styles";
import ModalDetailMovie from "../ModalDetailMovie";

function BannerMovie ({movie} : {movie: IMovieInfo}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  function handleModalClose (event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setIsModalOpen(false)
  }
  return (
    <BannerContainer>
      <BannerImage src={movie.backdrop}/>
      <BannerImageCover>
        <Grid container>
          <Grid sm={12} md={12} lg={7}>
            <Title>
              {movie.title}
            </Title>
            <Overview>
              {movie.overview}
            </Overview>
            <ButtonContainer>
              <PlayButton>
                <PlayCircle sx={{ fontSize: 30 }} />
                Play
              </PlayButton>
              <InfoButton onClick={handleModalOpen}>
                <InfoOutlined sx={{ fontSize: 30 }} />
                Info
              </InfoButton>
            </ButtonContainer>
          </Grid>
        </Grid>
      </BannerImageCover>
      <ModalDetailMovie
        open={isModalOpen}
        onClose={handleModalClose}
        movie={movie}
      />
    </BannerContainer>
  )
}

export default BannerMovie
