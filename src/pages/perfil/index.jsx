import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import PaginaUsuario from './components/editarUsuario';
import DetalhesDoUsuario from './components/detalhesDoUsuario';

const Perfil = () => {
  return (
    <div className='perfil' >

      <SideBar />
      <div className='perfil-content flex-center'>
        <DetalhesDoUsuario />
        <PaginaUsuario />
      </div>
    </div>
  );
};

export default Perfil;
