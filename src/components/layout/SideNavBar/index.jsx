import './styles.css';
import useUser from '../../../hooks/useUser'
import logout from '../../../assets/logout.svg'
import { useNavigate } from 'react-router-dom';
import perfilIcon from '../../../assets/perfil.svg';
import home from '../../../assets/home.svg';



const SideBar = () => {
  const navigate = useNavigate();

  const {
    activeTab, setActiveTab,
    linePosition, setLinePosition,
    isSidebarCollapsed, setIsSidebarCollapsed,
    homeSize, setHomeSize, } = useUser()

  const handleTabClick = (tab, position) => {
    setActiveTab(tab);
    setLinePosition(position);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);

    if (!isSidebarCollapsed) {

      setHomeSize(35);
    } else {
      setHomeSize(40);
    }

  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');

  };

  return (
    <div className={`sidebar flex-center-column ${isSidebarCollapsed ? 'collapsed' : ''}`}>

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
          <img src={home} alt="perfil" style={{ width: homeSize - 15, height: homeSize - 15 }} />

          <span style={{ display: homeSize === 40 ? 'block' : 'none' }}>Home</span>
        </div>

        <div className={`
          sidebar-item 
          ${activeTab === 'perfil' ? 'active' : ''} 
          ${linePosition === 2 ? 'active-line' : ''} 
          flex-center-column
        `}
          onClick={() => {
            handleTabClick('perfil', 2);
            navigate('/paginaUsuario');

          }}

        >
          <img src={perfilIcon} alt="perfil" style={{ width: homeSize - 15, height: homeSize - 15 }} />
          <span style={{ display: homeSize === 40 ? 'block' : 'none' }}>Perfil</span>
        </div>
        <div className={`
            sidebar-item 
            ${activeTab === 'logout' ? 'active' : ''} 
            ${linePosition === 1 ? 'active-line' : ''} 
            flex-center-column
          `}
          onClick={() => {
            handleTabClick('logout', 1);
            handleLogout();
          }}
        >
          <img src={logout} alt="logout" style={{ width: homeSize - 15, height: homeSize - 15 }} />

          <span style={{ display: homeSize === 40 ? 'block' : 'none' }}>Logout</span>

        </div>

      </div>

      <div className="toggle-sidebar-button" onClick={handleSidebarToggle}>
        {isSidebarCollapsed ? (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10L12 15L7 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>


    </div>
  );
};

export default SideBar;
