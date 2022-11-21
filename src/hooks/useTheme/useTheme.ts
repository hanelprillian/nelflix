import {PaletteMode, useMediaQuery} from '@mui/material';
import {useMemo, useEffect, useState} from 'react';
import { createTheme } from '@mui/material';
import InterRegularFont from '../../assets/fonts/inter/Inter-Regular.ttf';

export default function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [nodeLocalStorage, setNodeLocalStorage] = useState<PaletteMode>('dark');

  useEffect(() => {
    const theme = localStorage.getItem('APP_THEME_CUSTOM_SELECT');
    if(typeof theme !== 'undefined' && theme !== null) {
      setNodeLocalStorage(theme as PaletteMode);
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

  const theme = useMemo(
    () => {
      const BLACK_COLOR = '#28272F';
      const WHITE_COLOR = '#F8F8F8';

      const palette = {
        background: {
          default: BLACK_COLOR
        },
        text: {
          primary: WHITE_COLOR,
        },
      };

      if (mode === 'dark') {
        palette.text.primary = WHITE_COLOR;
        palette.background.default = BLACK_COLOR;
      } else if (mode === 'light') {
        palette.text.primary = BLACK_COLOR;
        palette.background.default = WHITE_COLOR;
      }

      return createTheme({
        palette: {
          mode,
          ...palette,
        },
        typography: {
          fontFamily: 'Intern Regular, Arial',
        },
        components: {
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
        },
      });
    },
    [mode],
  );

  function setTheme(key : PaletteMode) {
    localStorage.setItem('APP_THEME_CUSTOM_SELECT', key);
    setMode(key);
  }

  return [theme, setTheme, mode] as const;
}
