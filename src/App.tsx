import * as React from 'react';
import Header from './components/Header';
import About from './components/About';
import Aulas from './components/Aulas'
import Drawer from './components/Drawer'
import Login from './components/Login';
import Depo from './components/Depo';
import SignIn from './components/SignIn'
import Contato from './components/Email'
import './App.css';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { NavTheme } from './themes';
import { ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

function App() {



  return (

    <ThemeProvider theme={NavTheme}>
      <Router>

        <Header />
        <Drawer />
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/Aulas' element={<Aulas/>}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Registrar' element={<SignIn/>} />
          <Route path='/Depoimentos' element={<Depo/>} />
          <Route path='/Contato' element={<Contato/>} />
          <Route path='/Inicio' element={<Navigate to='/'/>}/>
        </Routes>

      </Router>
    </ThemeProvider>


  );
}

export default App;
