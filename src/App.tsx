import * as React from 'react';
import Routes from './routes'
import { UserContextProvider } from './context/isAuth';
import { NavTheme } from './themes';
import { ThemeProvider } from '@mui/material';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={NavTheme}>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </ThemeProvider>
  )
}

export default App;
