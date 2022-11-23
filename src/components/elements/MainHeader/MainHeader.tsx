import {Header, Logo, Container, NavigationMenu, NavigationMenuItem, RightButton} from "./styles"
import MainLogo from "../../../logo.svg";
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {useContext, useMemo, useState, MouseEvent} from "react";
import {FirebaseContext} from "../../../utils/context";
import {logout} from "../../../services/firebase/auth";

const LINKS = [
  {
    title: 'Home',
    url: '/console',
  },
  {
    title: 'My List',
    url: '/console/my-list',
  }
]

function MainHeader () {
  const { user } = useContext(FirebaseContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const avatarData = useMemo(() => {
    if(!user) {
      return null
    }
    const alias = user.displayName ? user.displayName : user.email
    return alias ? alias[0] : 'U'
  }, [user])
  const isUserMenuOpen = useMemo(() => {
    return Boolean(anchorEl)
  }, [anchorEl])
  const navigate = useNavigate()

  function handleOpenMenu (event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleCloseMenu () {
    setAnchorEl(null);
  }
  async function handleLogout () {
    logout().then(() => {
      navigate(0)
    })
  }
  return (
    <Header>
      <Container>
        <Logo src={MainLogo}/>
        <NavigationMenu>
          {LINKS.map(link => (
            <NavigationMenuItem key={link.url}>
              <NavLink to={link.url}>
                {link.title}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        <RightButton>
          <Button
            id="user-account-button"
            aria-controls={isUserMenuOpen ? 'user-account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isUserMenuOpen ? true : undefined}
            onClick={handleOpenMenu}
          >
            <Avatar sx={{ bgcolor: 'rgb(229, 9, 20)' }} style={{color: '#FFF'}}>
              {avatarData}
            </Avatar>
          </Button>
          <Menu
            id="user-account-menu"
            anchorEl={anchorEl}
            open={isUserMenuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'user-account-button',
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </RightButton>
      </Container>
    </Header>
  )
}

export default MainHeader
