import React, { useContext } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/Main/index';
import Context from './context/Context';
import Login from '../src/pages/login/index'
import { getItem } from './routes/storage';
import SignUp from './pages/signup';
import Perfil from './pages/perfil';

function MainRoutes() {
  const { setIsAuthenticated } = useContext(Context);

  function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = getItem('token');
    setIsAuthenticated(true)

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
  }

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes redirectTo="/login" />}>
        <Route path="/" element={<Main />} />
        <Route path="/paginaUsuario" element={<Perfil />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
