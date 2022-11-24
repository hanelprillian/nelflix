import {Box, IconButton, styled} from "@mui/material";

export const ModalBoxContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  left: 0,
  right: 0,
  margin: 'auto',
  outline: 'none',
  width: 700,
  borderRadius: 15,
  overflow: 'hidden',
  background: theme.palette.background.default,
  border: '2px solid #000',

  [theme.breakpoints.down("sm")]: {
    top: 0,
    width: '100%',
  }
}));
export const MovieOverview = styled(Box)(({ theme }) => ({
  padding: 20,
  '& h3' : {
    margin: 0,
    marginBottom: 15,
    fontSize: '18pt',
    fontWeight: 'bold',
  }
}));
export const ButtonBack = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: 10,
  top: 10,
}));
