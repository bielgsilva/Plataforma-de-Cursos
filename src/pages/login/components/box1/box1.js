import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Box1 = () => (
    <div className='box-1'>
        <h1>Faça seu sushi em casa<br /> em 10 passos fáceis</h1>
        <p>Ter uma renda extra nunca foi tão fácil! <br />Cadastre-se e aproveite gratuitamente todo o conteúdo</p>

        <Link to='/signup'>
            <button>Cadastre-se</button>
        </Link>

    </div>
);

export default Box1;
