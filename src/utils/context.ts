import {createContext} from 'react';
import {PaletteMode} from "@mui/material";
import {Theme} from "@emotion/react/dist/emotion-react.cjs";
import FirebaseCompact from "firebase/compat/index";
import {IFavoriteMovieInfo} from "../types/movies";

export interface IContext {
  global: {
    theme: Theme,
    toggleTheme: (theme : PaletteMode) => void,
  }
}

export interface IFirebaseContext {
  user: FirebaseCompact.User | null,
  favorites: IFavoriteMovieInfo[],
  refreshFavorites: () => void,
  firebaseInitialised: boolean,
}

export const Context = createContext<IContext>({
  global: {
    theme: 'dark',
    toggleTheme: () => {},
  },
});

export const FirebaseContext = createContext<IFirebaseContext>({
  user: null,
  favorites: [],
  refreshFavorites: () => {},
  firebaseInitialised: false,
})
