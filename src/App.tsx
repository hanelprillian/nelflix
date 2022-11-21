import React, {useState} from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import IndexPage from './pages/index';
import useTheme from "./hooks/useTheme";
import {IContext, Context} from "./utils/context";
import {CssBaseline, PaletteMode} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

function App() {
  const [theme, setTheme] = useTheme();

  const [context] = useState<IContext>({
    global: {
      theme: theme.palette.mode,
      toggleTheme: (value : PaletteMode) => {
        setTheme(value);
      },
    },
  });

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Routes>
            <Route path="/" element={<IndexPage/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
