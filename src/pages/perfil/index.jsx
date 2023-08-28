import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import PaginaUsuario from './components/editarUsuario';
import DetalhesDoUsuario from './components/detalhesDoUsuario';

const Perfil = () => {
  return (
    <div className='perfil' >
      <SideBar />
      <div className='overlay1 flex-center'>
        <div className="overlay2"></div>
        <div className='flex-center overlay3'>
          <DetalhesDoUsuario />
          <PaginaUsuario />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
