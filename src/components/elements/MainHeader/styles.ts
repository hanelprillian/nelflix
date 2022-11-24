import {IconButton, styled} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";

export const Header = styled("div",{
  shouldForwardProp: (prop) => prop !== "transparent"
})<{transparent?: boolean}>(({ transparent, theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 20,
  background: !transparent ? theme.palette.background.default : 'transparent',
}));
export const Logo = styled("img")(({ theme }) => ({
  width: 130,

  [theme.breakpoints.down("md")]: {
    display: 'none',
  }
}));
export const LogoMobile = styled("img")(({ theme }) => ({
  width: 20,
  display: 'none',

  [theme.breakpoints.down("md")]: {
    display: 'block',
  }
}));
export const Container = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 30px',

  [theme.breakpoints.down("md")]: {
    padding: '5px 10px',
  }
}));
export const NavigationMenu = styled("ul")(({ theme }) => ({
  display: 'flex',
  gap: 30,
  listStyle: 'none',

  [theme.breakpoints.down("md")]: {
    display: 'none'
  }
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
export const ButtonSearch = styled(IconButton)(({ theme }) => ({
  marginRight: 20,
  [theme.breakpoints.down("md")]: {
    marginRight: 0,
  }
}));
export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  fontSize: 40,
  [theme.breakpoints.down("md")]: {
    fontSize: 25,
  }
}));
