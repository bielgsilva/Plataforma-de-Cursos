import React from 'react';
import './styles.css';
import useUser from '../../../../hooks/useUser';

function Box1() {
    const { setShowLogin, setShowSignUp } = useUser();

    const toggleSignUpAndLogin = (showSignUp) => {
        setShowSignUp(showSignUp);
        setShowLogin(!showSignUp);
    };

    return (
        <div className='box-1 flex-center-column'>
            <h1>Faça seu sushi em casa<br /> em 10 passos fáceis</h1>
            <p>Aprenda o passo a passo de como fazer o sushi perfeito. <br />Cadastre-se e descubra a forma mais fácil e rápida de fazer sushi melhor do que você come em restaurantes e deliverys!
            </p>

            <button onClick={() => toggleSignUpAndLogin(true)}>Cadastre-se</button>

            <a  href='# ' onClick={() => toggleSignUpAndLogin(false)}>
                Já tem conta? Clique aqui para fazer o login
            </a>

        </div>
    );
}

export default Box1;
