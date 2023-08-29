import SideBar from '../../components/layout/SideNavBar';
import './styles.css'
import DetalhesDoUsuario from './components/detalhesDoUsuario';

const Perfil = () => {
  return (
    <div className='perfil' >
      <SideBar />
      <div className='overlay1 flex-center'>
        <div className='flex-center overlay3'>
          <DetalhesDoUsuario />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
