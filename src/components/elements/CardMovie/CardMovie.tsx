import {IMovieInfo} from "../../../types/movies";
import {Card, CardMedia} from "@mui/material";

function CardMovie ({movie} : {movie: IMovieInfo}) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={movie.title}
        height="200"
        image={movie.thumbnail}
      />
    </Card>
  )
}

export default CardMovie
