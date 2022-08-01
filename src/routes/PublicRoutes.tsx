import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Public/Header';
import About from '../components/Public/About';
import Aulas from '../components/Public/Aulas'
import Drawer from '../components/Public/Drawer'
import Login from '../components/Public/Login';
import Depo from '../components/Public/Depo';
import SignIn from '../components/Public/SignIn'
import Contato from '../components/Public/Email'
import Confirmacao from '../components/Public/Confirmacao';
import Recover from '../components/Public/Recover';


const PublicRoutes: React.FC = () => {
    return (

        <BrowserRouter>
            <Header />
            <Drawer />
            <Routes>
                <Route path='/'/>
                <Route path='/about' element={<About />} />
                <Route path='/aulas' element={<Aulas />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registrar' element={<SignIn />} />
                <Route path='/depoimentos' element={<Depo />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/inicio' element={<Navigate to='/' />} />
                <Route path='/confirmacao/:token' element={<Confirmacao />} />
                <Route path='/recuperaremail' element={<Recover/>} />
            </Routes>
        </BrowserRouter>


    );
};

export default PublicRoutes;