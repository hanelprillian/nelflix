import {Box, Grid, styled, Typography} from "@mui/material";
export const Container = styled('div')(({ theme }) => ({
  padding: '15px 30px',
}));
export const Block = styled(Box)(({ theme }) => ({
  width: 'auto',
  marginTop: 20,
  marginBottom: 20,
}));
export const BlockTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '15pt',
  textTransform: 'capitalize',
  marginBottom: 15
}));
export const BlockMovies = styled(Grid)(({ theme }) => ({
}));
