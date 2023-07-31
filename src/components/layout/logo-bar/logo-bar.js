import React from 'react';
import './styles.css'
import logo from '../../../assets/logo.png'

const LogoBar = () => (
    <div className='logo-bar'>
        <img className="logo-btn" src={logo} alt="arrow left" />
        <span>RoyalSites</span>
    </div>
);

export default LogoBar;
