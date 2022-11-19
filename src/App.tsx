import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {
  Route,
  Link, Routes
} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={'aaa'} />
      </Routes>
    </div>
  );
}

export default App;
