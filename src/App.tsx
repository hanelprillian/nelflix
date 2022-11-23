import React, {useContext, useEffect, useState} from 'react';
import {
  Outlet,
  Route,
  Routes, useNavigate
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import useTheme from "./hooks/useTheme";
import {IContext, Context, FirebaseContext} from "./utils/context";
import {CssBaseline, PaletteMode} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import FirebaseContainer from "./components/commons/FirebaseContainer";
import ConsolePage from "./components/pages/ConsolePage/ConsolePage";

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
              <Route element={<ProtectedRoute/>}>
                <Route path="/console" element={<ConsolePage />} />
              </Route>
            </Routes>
          </FirebaseContainer>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

function ProtectedRoute ({ redirectPath = '/' }) {
  const { firebaseInitialised, user } = useContext(FirebaseContext)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoaded(false)
    if(firebaseInitialised) {
      setIsLoaded(true)
      if(!user) {
        navigate(redirectPath)
        setIsLoaded(false)
      }
    }
  }, [firebaseInitialised, user])

  return <>
    {isLoaded && (
      <Outlet/>
    )}
  </>
}

export default App;
