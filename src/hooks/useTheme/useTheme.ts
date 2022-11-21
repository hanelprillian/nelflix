import {PaletteMode, useMediaQuery} from '@mui/material';
import {useMemo, useEffect, useState} from 'react';
import { createTheme } from '@mui/material';

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
      const palette = {
        text: {
          primary: '#28272F',
        },
      };

      if (mode === 'dark') {
        palette.text.primary = '#FFFFFF';
      } else if (mode === 'light') {
        palette.text.primary = '#28272F';
      }

      return createTheme({
        palette: {
          mode,
          ...palette,
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
