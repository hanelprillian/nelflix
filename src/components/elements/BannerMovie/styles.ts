import {Box, Button, styled, Typography} from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 800,

  [theme.breakpoints.down("sm")]: {
    height: 600,
  }
}));
export const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}));
export const BannerImageCover = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingBottom: 30,
  cursor: 'pointer',
  left: 0,
  right: 0,
  position: 'absolute',
  bottom: 0,
  zIndex: 10,
  height: '100%',
  background: theme.palette.mode === 'dark' ?
    'linear-gradient(0deg, rgba(0,0,0,0.8785889355742297) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,0.665703781512605) 14%, rgba(0,0,0,0.2987570028011205) 43%, rgba(0,0,0,0.11668417366946782) 68%, rgba(0,0,0,0.7441351540616247) 100%)' :
    'linear-gradient(0deg, rgba(0,0,0,0.8785889355742297) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,0.665703781512605) 14%, rgba(255,255,255,0.2987570028011205) 43%, rgba(255,255,255,0.11668417366946782) 68%, rgba(255,255,255,0.7441351540616247) 100%)'
}));
export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '45pt',
  fontWeight: 'bold',
  lineHeight: 1.1,
  marginBottom: 20,
  color:theme.colors.white,

  [theme.breakpoints.down("sm")]: {
    fontSize: '25pt',
  }
}));
export const Overview = styled(Typography)(({ theme }) => ({
  fontSize: '15pt',
  lineHeight: 1.5,
  marginBottom: 40,
  color:theme.colors.white,

  [theme.breakpoints.down("sm")]: {
    fontSize: '12pt',
  }
}));
export const PlayButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  fontSize: '17pt',
  lineHeight: 1.5,
  marginBottom: 20,
  textTransform: 'capitalize',
  borderRadius: 10,
  padding: '10px 50px',
  background: 'rgb(229, 9, 20)',
  color: 'white',

  [theme.breakpoints.down("sm")]: {
    fontSize: '12pt',
    padding: '5px 30px',
  }
}));
export const InfoButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  fontSize: '17pt',
  lineHeight: 1.5,
  marginBottom: 20,
  textTransform: 'capitalize',
  borderRadius: 10,
  padding: '10px 50px',
  background: 'rgb(89,89,89)',
  color: 'white',

  [theme.breakpoints.down("sm")]: {
    fontSize: '12pt',
    padding: '5px 30px',
  }
}));
export const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 10,
}));
