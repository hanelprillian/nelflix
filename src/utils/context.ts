import {createContext} from 'react';
import {PaletteMode} from "@mui/material";

export interface IContext {
  global: {
    theme: PaletteMode,
    toggleTheme: (theme : PaletteMode) => void,
  }
}

export const Context = createContext<IContext>({
  global: {
    theme: 'dark',
    toggleTheme: () => {},
  },
});
