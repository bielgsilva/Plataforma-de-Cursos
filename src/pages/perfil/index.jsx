import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import PaginaUsuario from './components/paginaUsuario';

const Perfil = () => {
  return (
    <div className="main">

      <SideBar />

      <PaginaUsuario />

    </div>
  );
};

export default Perfil;
