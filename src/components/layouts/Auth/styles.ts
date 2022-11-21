import {styled} from "@mui/material";
import FilmsImg from '../../../assets/images/films.jpg';

export const BodyLayout = styled("div")(({ theme }) => ({
  background: `url(${FilmsImg})`,
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  backgroundSize: 'cover',
}));
export const BodyContainer = styled("div")(({ theme }) => ({
  height: '100vh',
  background: 'rgba(19,19,19,0.38)'
}));
export const CenterBox = styled("div")(({ theme }) => ({
  width: 300,
  background: theme.palette.success.main,
}));
