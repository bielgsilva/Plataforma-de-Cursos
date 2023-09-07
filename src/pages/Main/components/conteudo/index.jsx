import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


const Conteudo = () => {
    const [showDetails, setShowDetails] = useState({});

    const contentData = [
        {
            id: 0,
            topic: 'Insumos e utensílios necessários para fazer sushi',
            details: 'Esta seção abordará os ingredientes e equipamentos essenciais para preparar sushi autêntico.'
        },
        {
            id: 1,
            topic: 'Como preparar o arroz',
            details: 'Aprenda a cozinhar o arroz de sushi perfeito, fundamental para a qualidade do seu sushi.'
        },
        {
            id: 2,
            topic: 'Mise en place (Preparação dos Insumos)',
            details: 'Saiba como preparar e organizar todos os ingredientes antes de começar a montagem do sushi.'
        },
        {
            id: 3,
            topic: 'Como fazer camarão',
            details: 'Descubra a melhor maneira de cozinhar e temperar camarões para os seus pratos de sushi.'
        },
        {
            id: 4,
            topic: 'Filetagem do Salmão',
            details: 'Aprenda como fazer a filetagem correta do salmão para utilizá-lo nos sushis.'
        },
        {
            id: 5,
            topic: 'Preparando o Salmão',
            details: 'Saiba como preparar o salmão, seja em fatias ou em outros cortes, para o uso nos seus pratos.'
        },
        {
            id: 6,
            topic: 'Entradas (Receitas e passo a passo)',
            details: 'Explore várias receitas de entradas que complementam maravilhosamente a experiência do sushi.'
        },
        {
            id: 7,
            topic: 'Como fazer todos os tipos de sushi',
            details: 'Nesta seção, você aprenderá a criar diversos tipos de sushi, desde nigiri até rolos maki.'
        },
        {
            id: 8,
            topic: 'Como fazer Temaki',
            details: 'Aprenda a montar os deliciosos temakis, uma opção prática e saborosa de sushi enrolado à mão.'
        }
        ,
        {
            id: 9,
            topic: 'Como vender seus sushis',
            details: 'Aprenda o passo a passo de como e onde vender os sushis.'
        }
        // Adicione outros tópicos aqui
    ];
    const toggleDetails = (id) => {
        setShowDetails((prevDetails) => ({
            [id]: !prevDetails[id]
        }));
        // Ocultar detalhes de todos os outros tópicos
        contentData.forEach((item) => {
            if (item.id !== id) {
                setShowDetails((prevDetails) => ({
                    ...prevDetails,
                    [item.id]: false
                }));
            }
        });
    };
    const halfLength = Math.ceil(contentData.length / 2);
    const firstHalf = contentData.slice(0, halfLength);
    const secondHalf = contentData.slice(halfLength);

    return (
        <div className="overlay1 flex-center-column main-content">
            <div className="overlay2"></div>
            <div className='content-counteudo flex-center-column overlay3'>
                <h1>O QUE VOCÊ IRÁ APRENDER</h1>
                <div className='topic-list flex-center'>
                    <ul>
                        {firstHalf.map(({ id, topic, details }) => (
                            <li key={id} onClick={() => toggleDetails(id)}>
                                <span>{topic}</span>
                                <button className='toggle-button' onClick={() => toggleDetails(id)}>
                                    {showDetails[id] ? '-' : '+'}
                                </button>
                                <p className={showDetails[id] ? 'topic-details show-details' : 'topic-details hide-details'}>{details}</p>
                            </li>
                        ))}
                    </ul>

                    <ul>
                        {secondHalf.map(({ id, topic, details }) => (
                            <li key={id} onClick={() => toggleDetails(id)}>
                                <span>{topic}</span>
                                <button className='toggle-button' onClick={() => toggleDetails(id)}>
                                    {showDetails[id] ? '-' : '+'}
                                </button>
                                <p className={showDetails[id] ? 'topic-details show-details' : 'topic-details hide-details'}>{details}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='btn-to-ead'>
                    <Link to='/ead'>
                        <button>ASSISTIR AULAS</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Conteudo;