import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Box1({ toggleFormVisibility }) {
    return (
        <div className='box-1'>
            <h1>Faça seu sushi em casa<br /> em 10 passos fáceis</h1>
            <p>Aprenda o passo a passo de como fazer o sushi perfeito. <br />Cadastre-se e descubra a forma mais fácil e rápida de fazer sushi melhor do que você come em restaurantes e deliverys!
            </p>

            <div className='flex-center-column'>
                <Link to='/signup'>
                    <button>Cadastre-se</button>
                </Link>
                <a href='#id-form-login' onClick={toggleFormVisibility}>
                    Já tem conta? Clique aqui para fazer o login
                </a>
            </div>
        </div>
    );
}


export default Box1;
