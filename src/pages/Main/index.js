import React from 'react';
import SideBar from '../../components/layout/SideNavBar/index';
import './style.css'
import VideoAulas from './components/videoAulas';

const Main = () => {
  return (
    <div className="main">

      <SideBar />

      <VideoAulas />

    </div>
  );
};

export default Main;
