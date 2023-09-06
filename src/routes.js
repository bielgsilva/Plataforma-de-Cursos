import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/Main/index';
import Login from '../src/pages/login/index'
import { getItem } from './routes/storage';
import Perfil from './pages/perfil';
import Ebooks from './pages/ebooks';
import EAD from './pages/EAD';
import UseUser from './hooks/useUser';

function MainRoutes() {
  const { setIsAuthenticated } = UseUser();
  const isAuthenticated = getItem('token');

  function ProtectedRoutes({ redirectTo }) {
    setIsAuthenticated(true)
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
  }

  return (
    <Routes>


      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />

      <Route element={<ProtectedRoutes redirectTo="" />}>
        <Route path="/home" element={<Main />} />
        <Route path="/paginaUsuario" element={<Perfil />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/ead" element={<EAD />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
