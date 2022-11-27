import {Box, styled, Typography} from "@mui/material";
import {PlayCircle} from "@mui/icons-material";

export const CardInfo = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  left: 0,
  right: 0,
  position: 'absolute',
  bottom: 0,
  zIndex: 10,
  background: 'linear-gradient(0deg, rgba(0,0,0,0.8785889355742297) 0%, rgba(0,0,0,0.665703781512605) 43%, rgba(0,0,0,0.2987570028011205) 84%, rgba(0,0,0,0) 100%)'
}));
export const CardTitle = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '15pt',
  fontWeight: 'bold',
  color:theme.colors.white
}));
export const CardSummary = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '12pt',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color:theme.colors.white
}));
export const PlayIcon = styled(PlayCircle)(({ theme }) => ({
  fontSize: 40,
  color:theme.colors.white
}));
