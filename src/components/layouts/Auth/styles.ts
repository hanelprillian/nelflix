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
  background: 'rgba(19,19,19,0.38)',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
}));
export const CenterBox = styled("div")(({ theme }) => ({
  minWidth: 450,
  marginTop: '200px',
  padding: '60px 68px 40px',
  background: theme.palette.mode === 'light' ? 'rgba(255,255,255,.75)' : 'rgba(0,0,0,.75)',
}));
export const Title = styled("h2")(({ theme }) => ({
  fontSize: 32,
  fontWeight: 600,
  marginTop: 0,
  marginBottom: 28,
}));
