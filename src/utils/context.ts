import {createContext} from 'react';
import {PaletteMode} from "@mui/material";
import {Theme} from "@emotion/react/dist/emotion-react.cjs";

export interface IContext {
  global: {
    theme: Theme,
    toggleTheme: (theme : PaletteMode) => void,
  }
}

export const Context = createContext<IContext>({
  global: {
    theme: 'dark',
    toggleTheme: () => {},
  },
});
