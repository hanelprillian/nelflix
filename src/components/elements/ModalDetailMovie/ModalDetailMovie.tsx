import {Card, CardMedia, Grid, IconButton, Modal} from "@mui/material";
import {ModalBoxContent,MovieOverview,ButtonBack} from "./styles";
import {IMovieInfo} from "../../../types/movies";
import {CardInfo, CardTitle, PlayIcon} from "../CardMovie/styles";
import {ChevronLeftRounded} from "@mui/icons-material";
import MovieFavoriteButton from "../MovieFavoriteButton";

function ModalDetailMovie ({open, onClose, movie} : {open: boolean, onClose: any, movie: IMovieInfo}) {
  return (
    <Modal
      sx={{
        overflowY: 'scroll'
      }}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBoxContent>
        <Card
          sx={{height: 500, position: 'relative', cursor: 'pointer'}}>
          <ButtonBack>
            <ChevronLeftRounded onClick={onClose} sx={{ fontSize: 40 }}/>
          </ButtonBack>
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
              <IconButton>
                <PlayIcon/>
              </IconButton>
              <MovieFavoriteButton movie={movie}/>
            </Grid>
          </CardInfo>
        </Card>
        <MovieOverview>
          <h3>
            Overview
          </h3>
          {movie.overview}
        </MovieOverview>
        <MovieOverview>
          <h3>
            Detail Information
          </h3>
          <Grid container gap={2}>
            <Grid item sx={{color: 'gray'}} sm={3}>
              Release Date
            </Grid>
            <Grid item sm={8}>
              {movie.releaseDate}
            </Grid>

            <Grid item sx={{color: 'gray'}} sm={3}>
              Average Votes
            </Grid>
            <Grid item sm={8}>
              {movie.voteAverage} <small>({movie.voteCount})</small>
            </Grid>

            <Grid item sx={{color: 'gray'}} sm={3}>
              Age classification
            </Grid>
            <Grid item sm={8}>
              {movie.isAdult ? 'Adult' : 'Suitable for all ages'}
            </Grid>
          </Grid>
        </MovieOverview>
      </ModalBoxContent>
    </Modal>
  )
}

export default ModalDetailMovie
