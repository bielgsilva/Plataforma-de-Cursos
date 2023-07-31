import React, { useEffect, useContext } from 'react';
import './styles.css';
import axios from '../../../../lib/axios';
import { useNavigate } from 'react-router-dom';
import Context from '../../../../context/Context';


function FormLogin() {
    const { email, setEmail, password, setPassword, error, setMensagemErro } = useContext(Context);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    async function handleLogin() {
        if (!email || !password) {
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await axios.post('/login', { email, password });

            if (response.status === 200) {
                navigate('/dashboard');
            }
            console.log(response)
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('userName', response.data.user.name);
            localStorage.setItem('token', response.data.token);

        } catch (error) {
            setMensagemErro('Erro ao fazer login. Confira se os dados estao corretos.');
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/main');
        }
    })

    return (
        <div className='form-login'>
            <div className='form-box'>
                <h3 className='title-form'>Login</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Digite seu E-mail'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor='password'>Senha:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Digite sua password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />


                    <button type='submit' onClick={handleLogin}>
                        Entrar
                    </button>

                    {error && <p className="error-message">{error}</p>}
                </form>
            </div >
        </div>

    );
}

export default FormLogin;
