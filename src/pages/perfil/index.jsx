import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import DetalhesDoUsuario from './components/detalhesDoUsuario';

const Perfil = () => {
  return (
    <div className='perfil' >
      <SideBar />

      <DetalhesDoUsuario />

    </div >
  );
};

export default Perfil;
