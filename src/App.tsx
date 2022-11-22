import React, {useState} from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import useTheme from "./hooks/useTheme";
import {IContext, Context} from "./utils/context";
import {CssBaseline, PaletteMode} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import FirebaseContainer from "./components/commons/FirebaseContainer";

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
          <FirebaseContainer>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
            </Routes>
          </FirebaseContainer>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
