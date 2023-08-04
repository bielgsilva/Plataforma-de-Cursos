import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import PaginaUsuario from './components/paginaUsuario';
import DetalhesDoUsuario from './components/detalhesDoUsuario';

const Perfil = () => {
  return (
    <div className="main">

      <SideBar />

      <PaginaUsuario />
      <DetalhesDoUsuario />

    </div>
  );
};

export default Perfil;
