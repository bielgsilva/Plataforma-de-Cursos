import './styles.css';
import useUser from '../../../hooks/useUser'
import logout from '../../../assets/logout.svg'
import { useNavigate } from 'react-router-dom';
import perfilIcon from '../../../assets/perfil.svg';
import home from '../../../assets/home.svg';
import book from '../../../assets/book.svg';
import ead from '../../../assets/ead.svg'



const SideBar = () => {
  const navigate = useNavigate();

  const {
    activeTab, setActiveTab,
    linePosition, setLinePosition, } = useUser()

  const handleTabClick = (tab, position) => {
    setActiveTab(tab);
    setLinePosition(position);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');

  };

  return (
    <div className="sidebar flex-center-column ">

      <div className="icons flex-center-column">
        <div className={`
            sidebar-item 
            ${activeTab === 'home' ? 'active' : ''} 
            ${linePosition === 0 ? 'active-line' : ''} 
            flex-center-column
          `}
          onClick={() => {
            handleTabClick('home', 0);
            navigate('/');
          }}
        >
          <img src={home} alt="perfil" />
        </div>

        <div className={`
          sidebar-item 
          ${activeTab === 'perfil' ? 'active' : ''} 
          ${linePosition === 1 ? 'active-line' : ''} 
          flex-center-column
        `}
          onClick={() => {
            handleTabClick('perfil', 1);
            navigate('/paginaUsuario');

          }}

        >
          <img src={perfilIcon} alt="perfil" />
        </div>

        <div className={`
          sidebar-item 
          ${activeTab === 'book' ? 'active' : ''} 
          ${linePosition === 2 ? 'active-line' : ''} 
          flex-center-column
        `}
          onClick={() => {
            handleTabClick('book', 2);
            navigate('/ebooks');

          }}

        >
          <img src={book} alt="book" />
        </div>

        <div className={`
          sidebar-item 
          ${activeTab === 'ead' ? 'active' : ''} 
          ${linePosition === 3 ? 'active-line' : ''} 
          flex-center-column
        `}
          onClick={() => {
            handleTabClick('ead', 3);
            navigate('/ead');

          }}

        >
          <img src={ead} alt="ead" />
        </div>


        <div className={`
            sidebar-item 
            flex-center-column
          `}
          onClick={() => {
            handleLogout();
          }}
        >
          <img src={logout} alt="logout" />
        </div>

      </div>
    </div>
  );
};

export default SideBar;
