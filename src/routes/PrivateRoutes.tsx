import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Anamnese from '../components/Private/Anamnese';
import { Dashboard } from '../components/Private/Dashboard';
import { NavigationBar } from '../components/Private/NavigationBar';

const PrivateRoutes: React.FC = () => {

    return (

        <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path='/anamnese' element={<Anamnese />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>

    );
};

export default PrivateRoutes;