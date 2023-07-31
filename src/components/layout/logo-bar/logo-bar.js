import React from 'react';
import './styles.css'
import logo from '../../../assets/logo.png'

const LogoBar = () => (
    <div className='logo-bar'>
        <img className="logo-btn" src={logo} alt="arrow left" />
        <span>RoyalCursos</span>
    </div>
);

export default LogoBar;
