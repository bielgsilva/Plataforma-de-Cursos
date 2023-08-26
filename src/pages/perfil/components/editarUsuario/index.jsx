import './styles.css';
import { removeSpecialCharacters } from '../../../../helpers/removeSpecialCharacters';
import React, { useState } from 'react';
import { clientEdit } from '../../../../services/clientEdit';
// import UseUser from '../../../../hooks/useUser';

const PaginaUsuario = () => {
    // const { id } = UseUser();
    const id = localStorage.getItem('userId');

    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cpf: "",
    });

    const [errorData, setErrorData] = useState({
        name: "",
        email: "",
        cpf: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        setErrorData({ ...errorData, [name]: "" });
    };

    const validateRequiredFields = () => {
        const { name, email, cpf } = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = "Campo nome é obrigatório";
        }
        if (!email.trim()) {
            errors.email = "Campo email é obrigatório";
        }

        if (!cpf.trim()) {
            errors.cpf = "Campo CPF é obrigatório";
        }
        setErrorData(errors);
        return Object.keys(errors).length === 0;
    };

    const validateCPF = () => {
        const cpfWithoutFormat = removeSpecialCharacters(formData.cpf);
        const errors = {};

        if (cpfWithoutFormat.length < 11 || cpfWithoutFormat.length > 11) {
            errors.cpf = "Digite um CPF válido";
        }

        setErrorData((prevErrorData) => ({
            ...prevErrorData,
            ...errors,
        }));

        return Object.keys(errors).length === 0;
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validateRequiredFields() || !validateCPF()) {
            return;
        }

        const { name, email, cpf } = formData;

        console.log(formData)

        const clientData = {
            name: name.trim(),
            email: email.trim(),
            cpf: removeSpecialCharacters(cpf),
        };

        const response = await clientEdit(clientData, id, token);

        if (response === "Email already registered") {
            setErrorData((prevErrorData) => ({
                ...prevErrorData,
                email: "Email já registrado",
            }));
        }
        if (response === "Cpf already registered") {
            setErrorData((prevErrorData) => ({
                ...prevErrorData,
                cpf: "CPF já registrado",
            }));
        }
    }

    return (
        <div className='form-box form-edit-user'>
            <h2>Editar Dados</h2>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <label>Nome:</label>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="Digite o nome"

                    onChange={handleChange}
                    error={errorData.name}

                />
                {errorData.name && <span className="error">{errorData.name}</span>}



                <label>Email:</label>
                <input
                    name="email"

                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite o e-mail"

                    error={errorData.email}

                />
                {errorData.email && <span className="error">{errorData.email}</span>}



                <label>CPF:</label>

                <input
                    name="cpf"
                    type="text"
                    value={formData.cpf}
                    placeholder="Digite o CPF"

                    onChange={handleChange}
                />
                {errorData.cpf && <span className="error">{errorData.cpf}</span>}

                <button type="submit">Salvar Alterações</button>
            </form>
        </div>

    );
};

export default PaginaUsuario;
