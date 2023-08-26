import React from 'react';
import './styles.css'
import logo from '../../../assets/sushi-icon.png'

const LogoBar = () => (
    <div className='logo-bar'>
        <img className="logo-btn" src={logo} alt="arrow left" />
        <span>Vivendo<span style={{ color: 'red' }}>Sushi</span></span>
    </div>
);

export default LogoBar;
