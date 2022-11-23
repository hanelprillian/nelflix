import {useMediaQuery} from '@mui/material';
import {useMemo, useEffect, useState} from 'react';
import { createTheme } from '@mui/material';
import InterRegularFont from '../../assets/fonts/inter/Inter-Regular.ttf';
import {ITheme} from "./types";

export default function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ITheme['mode']>('dark');
  const [nodeLocalStorage, setNodeLocalStorage] = useState<ITheme['mode']>('dark');

  useEffect(() => {
    const theme = localStorage.getItem('APP_THEME_CUSTOM_SELECT');
    if(typeof theme !== 'undefined' && theme !== null) {
      setNodeLocalStorage(theme as ITheme['mode']);
    }
  }, []);

  useEffect(() => {
    if (!nodeLocalStorage || typeof nodeLocalStorage === 'undefined') {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    if (nodeLocalStorage && typeof nodeLocalStorage !== 'undefined') {
      setMode(nodeLocalStorage);
    }
  }, [nodeLocalStorage]);

  const theme : ITheme['theme'] = useMemo(
    () => {
      const BLACK_COLOR = 'rgba(0,0,0,1)';
      const WHITE_COLOR = '#F8F8F8';
      const RED_COLOR = 'rgb(229, 9, 20)';

      const colors = {
        black: BLACK_COLOR,
        white: WHITE_COLOR,
        red: RED_COLOR,
      }
      const palette = {
        background: {
          default: colors.black,
        },
        text: {
          primary: colors.white,

        },
      };
      const components = {
        MuiCssBaseline: {
          styleOverrides: `
        @font-face {
          font-family: 'Intern Regular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${InterRegularFont}) format('ttf');
        }
      `,
        },
        MuiButton: {

        }
      }

      if (mode === 'dark') {
        palette.text.primary = colors.white;
        palette.background.default = colors.black;
      } else if (mode === 'light') {
        palette.text.primary = colors.black;
        palette.background.default = colors.white;
      }

      return createTheme({
        palette: {
          mode,
          ...palette,
        },
        typography: {
          fontFamily: 'Intern Regular, Arial',
        },
        components,
        colors
      });
    },
    [mode],
  );

  function setTheme(key : ITheme['mode']) {
    localStorage.setItem('APP_THEME_CUSTOM_SELECT', key);
    setMode(key);
  }

  return [theme, setTheme, mode] as const;
}
