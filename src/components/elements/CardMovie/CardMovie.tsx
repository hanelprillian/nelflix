import {IMovieInfo} from "../../../types/movies";
import {Card, CardMedia, Grid, IconButton} from "@mui/material";
import {CardTitle, CardInfo, CardSummary, PlayIcon} from "./styles"
import {MouseEvent, useState} from "react";
import ModalDetailMovie from "../ModalDetailMovie";
import MovieFavoriteButton from "../MovieFavoriteButton";

function CardMovie ({movie} : {movie: IMovieInfo}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  function handleModalClose (event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setIsModalOpen(false)
  }
  return (
    <Card
      onClick={handleModalOpen}
      sx={{height: 300, position: 'relative', cursor: 'pointer'}}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="100%"
        image={movie.backdrop}
      />
      <CardInfo>
        <Grid p={2}>
          <CardTitle>
            {movie.title}
          </CardTitle>
          <CardSummary>
            {movie.overview}
          </CardSummary>
          <IconButton>
            <PlayIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <MovieFavoriteButton movie={movie}/>
        </Grid>
      </CardInfo>

      <ModalDetailMovie
        open={isModalOpen}
        onClose={handleModalClose}
        movie={movie}
      />
    </Card>
  )
}

export default CardMovie
