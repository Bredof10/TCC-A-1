import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Adidas from './pages/adidas';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adidas' element={<Adidas />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);