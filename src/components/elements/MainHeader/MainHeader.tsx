import {
  Header,
  Logo,
  Container,
  NavigationMenu,
  NavigationMenuItem,
  RightButton,
  SearchOutlinedIcon,
  LogoMobile,
  ButtonSearch
} from "./styles"
import MainLogo from "../../../logo.svg";
import MainMobileLogo from "../../../logo-mobile.svg";
import {NavLink, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Avatar, IconButton, Menu, MenuItem, OutlinedInput, Fade, useMediaQuery, Theme} from "@mui/material";
import {useContext, useMemo, useState, MouseEvent, useEffect, memo} from "react";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams,] = useSearchParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery((theme : Theme) => theme.breakpoints.down("md"));
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
  const isHomePage = useMemo(() => {
    return Boolean(location.pathname === '/console')
  }, [location])
  const keyword = useMemo(() => {
    if(typeof searchParams.get('keyword') !== 'undefined' && searchParams.get('keyword') !== null) {
      return searchParams.get('keyword')?.toString().trim()
    }
    return ''
  }, [searchParams])

  function handleOpenMenu (event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleCloseMenu () {
    setAnchorEl(null);
  }
  async function handleSearch (keyword: string) {
    navigate(`/console/search?keyword=${keyword}`)
  }
  function handleScroll () {
    const position = window.pageYOffset;
    setIsTransparent(true)
    if(position > 800) {
      setIsTransparent(false)
    }
  }
  async function handleLogout () {
    logout().then(() => {
      navigate(0)
    })
  }

  useEffect(() => {
    if(isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHomePage]);
  useEffect(() => {
    if(keyword) {
      setIsSearch(true)
    }
  }, [keyword])

  return (
    <Header transparent={isTransparent}>
      <Container>
        <NavLink to="/">
          <Logo src={MainLogo}/>
          <LogoMobile src={MainMobileLogo}/>
        </NavLink>

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
          {isSearch && (
            <Fade in
                  easing={{ enter: 'ease-in', exit: 'ease-out' }}
                  mountOnEnter unmountOnExit>
              <OutlinedInput
                autoFocus
                value={keyword}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Keyword..."
                size="small"
              />
            </Fade>
          )}
          <ButtonSearch onClick={() => setIsSearch(!isSearch)} sx={{marginRight: 2}}>
            <SearchOutlinedIcon sx={{ fontSize: 40 }} />
          </ButtonSearch>
          <IconButton
            id="user-account-button"
            aria-controls={isUserMenuOpen ? 'user-account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isUserMenuOpen ? true : undefined}
            onClick={handleOpenMenu}
          >
            <Avatar sx={{ bgcolor: 'rgb(229, 9, 20)', width: isSmallScreen ? 30 : 50, height: isSmallScreen ? 30 : 50 }} style={{color: '#FFF'}}>
              {avatarData}
            </Avatar>
          </IconButton>
          <Menu
            id="user-account-menu"
            anchorEl={anchorEl}
            open={isUserMenuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'user-account-button',
            }}
          >
            {isSmallScreen && (
              <MenuItem onClick={() => navigate('/console/my-list')}>My Favorite</MenuItem>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </RightButton>
      </Container>
    </Header>
  )
}

export default memo(MainHeader)
