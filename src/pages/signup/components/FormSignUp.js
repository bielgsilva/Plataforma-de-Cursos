import React, { useState } from 'react';
import { toastError } from "../../../helpers/ToastError";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../lib/axios';
import './FormSignUp.css';

function FormSignUp() {
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setMensagemErro] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email || !password || !confirmarSenha) {
            toastError("Preencha todos os campos");
            setMensagemErro('Por favor, preencha todos os campos.');
            return;
        }
        if (password.length < 5) {
            setMensagemErro('A password precisa ter 6+ caracteres.');
            return;
        }
        if (password !== confirmarSenha) {
            setMensagemErro('As senhas digitadas não coincidem.');
            return;
        }
        try {
            const userData = {
                name,
                email,
                password,
            };

            const response = await api.post('/new-user', userData);
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', userData.nome);

            if (response.status === 201 || response.status === 200) {
                navigate('/main');
            } else {

            }

        } catch (error) {
            setMensagemErro('Não foi possível cadastrar o usuário. Por favor, tente novamente mais tarde.');

            console.log(error);
        }
    };
    return (
        <div className="form-box">
            <h3 className="title-form">Cadastre-se</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(event) => setNome(event.target.value)}
                />

                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label htmlFor="confirmarSenha">Confirme a senha:</label>
                <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Digite novamente sua senha"
                    value={confirmarSenha}
                    onChange={(event) => setConfirmarSenha(event.target.value)}
                />

                <button type='submit'> Cadastrar</button>


                {error && <p className="error-message">{error}</p>}
            </form>

            <Link to="/">
                Já tem cadastro? Clique aqui
            </Link>



        </div >
    );
}

export default FormSignUp;
