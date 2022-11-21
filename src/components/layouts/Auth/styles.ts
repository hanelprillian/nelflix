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
  background: 'rgba(19,19,19,0.5)',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
}));
export const CenterBox = styled("div")(({ theme }) => ({
  width: 500,
  marginTop: '200px',
  padding: '60px 68px',
  background: theme.palette.mode === 'light' ? 'rgba(255,255,255,.75)' : 'rgba(0,0,0,.75)',
}));
export const Title = styled("h2")(({ theme }) => ({
  fontSize: 32,
  fontWeight: 600,
  marginTop: 0,
  marginBottom: 28,
}));
export const Logo = styled("img")(({ theme }) => ({
  position: 'absolute',
  width: 200,
  marginTop: 10,
  marginLeft: 10,
}));
