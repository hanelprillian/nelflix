import {styled} from "@mui/material";

export const Header = styled("div",{
  shouldForwardProp: (prop) => prop !== "transparent"
})<{transparent?: boolean}>(({ transparent, theme }) => ({
  background: theme.palette.background.default,
}));
export const Logo = styled("img")(({ theme }) => ({
  width: 130,
}));
export const Container = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 30px',
}));
export const NavigationMenu = styled("ul")(({ theme }) => ({
  display: 'flex',
  gap: 30,
  listStyle: 'none'
}));
export const NavigationMenuItem = styled("li")(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',

  '& a' : {
    lineHeight: 0,
    fontSize: '14pt',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&.active' : {
      fontWeight: 'bold'
    }
  }
}));
export const RightButton = styled("div")(({ theme }) => ({
  marginLeft: 'auto'
}));
