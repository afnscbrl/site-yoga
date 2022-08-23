import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminDashboard } from '../components/Private/AdminDashboard';
import AlunaEdit from '../components/Private/AlunaEdit';
import Alunas from '../components/Private/Alunas';
import { NavigationBar } from '../components/Private/NavigationBar';
import {Aulas} from '../components/Private/Aulas';
import { AulasEdit } from '../components/Private/Aulas/AulasEdit';

const AdmRoutes: React.FC = () => {

    return (

        <BrowserRouter>
            <NavigationBar />

                <Routes>
                    <Route path="/admindashboard" element={<AdminDashboard />} />
                    <Route path='/alunas' element={<Alunas />} />
                    <Route path='/alunaedit' element={<AlunaEdit />} />
                    <Route path='/aulasadm' element={<Aulas />} />
                    <Route path='/aulasedit' element={<AulasEdit/>} />
                </Routes>

        </BrowserRouter>

    );
};

export default AdmRoutes;