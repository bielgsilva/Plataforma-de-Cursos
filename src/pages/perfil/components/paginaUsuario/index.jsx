import './styles.css'
import { removeSpecialCharacters } from '../../../../helpers/removeSpecialCharacters';
import React, { useState } from 'react';
import clientEdit from '../../../../services/clientEdit'
import UseUser from '../../../../hooks/useUser'
const PaginaUsuario = () => {
    const { id } = UseUser();
    const token = localStorage.getItem("token");

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        cpf: "",
    });

    let [errorData, setErrorData] = useState({
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
            errors.cpf = "Campo telefone é obrigatório";
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
                cpf: "Cpf já registrado",
            }));
        }

    }

    return (
        <div className='form-user flex-center'>
            <div className='form-box-user'>
                <h2>Página do Usuário</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>CPF:</label>
                        <input
                            type="number"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Salvar Alterações</button>
                </form>
            </div>
        </div>

    );
};

export default PaginaUsuario;
