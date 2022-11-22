import {Button, styled} from "@mui/material";
import { LoadingButton } from '@mui/lab';
export const AuthButton = styled(LoadingButton)(({ theme }) => ({
  background: 'rgb(229, 9, 20)',
  height: 50,
  color: 'white',
}));

export const RegisterButtonLink = styled(Button)(({ theme }) => ({
  height: 50,
  color: theme.palette.text.primary,
}));

export const LoginGoogleButton = styled(Button)(({ theme }) => ({
  height: 50,
  background: 'rgb(211,211,211)',
  color: '#333',
}));

export const Divider = styled('div')(({ theme }) => ({
  height: 0.1,
  width: '100%',
  marginTop: 30,
  marginBottom: 30,
  background: 'rgb(211,211,211)',
}));
