import React from 'react';
import SideBar from '../../components/layout/SideNavBar';
import './style.css'
import Conteudo from './components/conteudo';

const Main = () => {
  return (
    <div className="main">

      <SideBar />

      <Conteudo />

    </div>
  );
};

export default Main;
