import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Box1 = () => (
    <div className='box-1'>
        <h1>Faça seu sushi em casa<br /> em 10 passos fáceis</h1>
        <p>Aprenda o passo a passo de como fazer o sushi perfeito. <br />Cadastre-se e descubra a forma mais fácil e rápida de fazer sushi melhor do que você come em restaurantes e deliverys!
        </p>

        <Link to='/signup'>
            <button>Cadastre-se</button>
        </Link>
        <a className='only-mobile' href="#id-form-login">
            Já tem conta? Faça o Login abaixo
        </a>

    </div>
);

export default Box1;
