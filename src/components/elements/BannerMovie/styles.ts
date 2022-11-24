import {Box, styled} from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 800,
}));
export const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}));
export const BannerImageCover = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  left: 0,
  right: 0,
  position: 'absolute',
  bottom: 0,
  zIndex: 10,
  height: '100%',
  background: 'linear-gradient(0deg, rgba(0,0,0,0.8785889355742297) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,0.665703781512605) 14%, rgba(0,0,0,0.2987570028011205) 34%, rgba(0,0,0,0) 69%, rgba(0,0,0,0.7441351540616247) 100%)'
}));
