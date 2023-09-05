import React, { useState } from 'react';
import './style.css'
import LogoBar from '../../components/layout/logo-bar/logo-bar';
import Box1 from './components/box1/box1';
import FormLogin from '../../components/forms/formLogin/formLogin';

function Login() {
    const [formVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="mobile-login">
            <LogoBar />
            <div className='flex-center mobile-login-content '>
                <Box1 toggleFormVisibility={toggleFormVisibility} />

                {formVisible && <FormLogin toggleFormVisibility={toggleFormVisibility} formVisible={formVisible} />}

            </div>
        </div >
    );
}

export default Login;
