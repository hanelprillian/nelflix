import {styled} from "@mui/material";
import FilmsImg from '../../../assets/images/films.jpg';

export const Header = styled("div",{
  shouldForwardProp: (prop) => prop !== "transparent"
})<{transparent?: boolean}>(({ transparent, theme }) => ({
  background: `url(${FilmsImg})`,
}));
export const Logo = styled("img")(({ theme }) => ({
  width: 200,
  marginTop: 10,
  marginLeft: 10,
}));
