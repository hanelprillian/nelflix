import {Button, styled} from "@mui/material";

export const AuthButton = styled(Button)(({ theme }) => ({
  background: 'rgb(229, 9, 20)',
  height: 50,
  color: 'white',
}));

export const RegisterButtonLink = styled(Button)(({ theme }) => ({
  height: 50,
  color: theme.palette.text.primary,
}));
