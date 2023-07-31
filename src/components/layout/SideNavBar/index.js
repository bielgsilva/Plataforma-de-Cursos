import React, { useState } from 'react';
import './styles.css';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [linePosition, setLinePosition] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [homeSize, setHomeSize] = useState(50); // Adicione o estado homeSize

  const handleTabClick = (tab, position) => {
    setActiveTab(tab);
    setLinePosition(position);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);

    // Ajuste o tamanho do ícone e da palavra "Home" ao ser acionado
    if (!isSidebarCollapsed) {
      setHomeSize(25); // Define o tamanho menor
    } else {
      setHomeSize(50); // Define o tamanho normal
    }
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
          onClick={() => handleTabClick('home', 0)}
        >
          <svg width={homeSize} height={homeSize} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 38.5004H34.9999C37.2091 38.5004 38.9999 36.7096 38.9999 34.5004V19.5005L24.4999 9.50049L10 19.5005V34.5004C10 36.7096 11.7909 38.5004 14 38.5004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 31.4985C20 29.2893 21.7909 27.4985 23.9999 27.4985H24.9999C27.2091 27.4985 28.9999 29.2893 28.9999 31.4985V38.4985H20V31.4985Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ display: homeSize === 50 ? 'block' : 'none' }}>Home</span>
        </div>


        <div className={`
            sidebar-item 
            ${activeTab === 'home' ? 'active' : ''} 
            ${linePosition === 1 ? 'active-line' : ''} 
            flex-center-column
          `}
          onClick={() => handleTabClick('home', 1)}
        >
          <svg width={homeSize} height={homeSize} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 38.5004H34.9999C37.2091 38.5004 38.9999 36.7096 38.9999 34.5004V19.5005L24.4999 9.50049L10 19.5005V34.5004C10 36.7096 11.7909 38.5004 14 38.5004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 31.4985C20 29.2893 21.7909 27.4985 23.9999 27.4985H24.9999C27.2091 27.4985 28.9999 29.2893 28.9999 31.4985V38.4985H20V31.4985Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ display: homeSize === 50 ? 'block' : 'none' }}>Home</span>
        </div>


        <div className={`
            sidebar-item 
            ${activeTab === 'home' ? 'active' : ''} 
            ${linePosition === 2 ? 'active-line' : ''} 
            flex-center-column
          `}
          onClick={() => handleTabClick('home', 2)}
        >
          <svg width={homeSize} height={homeSize} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 38.5004H34.9999C37.2091 38.5004 38.9999 36.7096 38.9999 34.5004V19.5005L24.4999 9.50049L10 19.5005V34.5004C10 36.7096 11.7909 38.5004 14 38.5004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 31.4985C20 29.2893 21.7909 27.4985 23.9999 27.4985H24.9999C27.2091 27.4985 28.9999 29.2893 28.9999 31.4985V38.4985H20V31.4985Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ display: homeSize === 50 ? 'block' : 'none' }}>Home</span>
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
