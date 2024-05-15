import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Alunos from './pages/Alunos';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/alunos" element={<Alunos/>} />
            </Routes>
        </BrowserRouter>
    );
}