import React from 'react';
import './styles.css'
import logo from '../../../assets/sushi-icon.png'
import UseUser from '../../../hooks/useUser';

function LogoBar() {
    const { setShowLogin, setShowSignUp } = UseUser();

    const toggleSignUpAndLogin = () => {
        setShowSignUp(false);
        setShowLogin(false);
    };


    return (
        <div className='logo-bar'>
            <img className="logo-btn" src={logo} alt="arrow left" onClick={() => toggleSignUpAndLogin(false)} />
            <span onClick={() => toggleSignUpAndLogin()}>Vivendo<span style={{ color: 'red' }}>Sushi</span></span>



        </div>

    )
}

export default LogoBar;
