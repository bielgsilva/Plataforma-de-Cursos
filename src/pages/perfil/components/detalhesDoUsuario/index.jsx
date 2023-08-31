import React, { useState, useEffect } from 'react';
import './styles.css';
import { clientEdit } from '../../../../services/clientEdit';
import { toastError } from '../../../../helpers/ToastError';
import { getUser } from '../../../../services/getUser';

const DetalhesDoUsuario = () => {

  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  const [user, setUser] = useState(null);


  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getUser(userEmail);
        setUser(userData);
       
      } catch (error) {
      
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [userEmail]);

  console.log(user)

  const token = localStorage.getItem("token");

  const [editingField, setEditingField] = useState(null);

  const [formData, setFormData] = useState({
    name: userName,
    email: userEmail
  });

  const [errorData, setErrorData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrorData({ ...errorData, [name]: "" });
  };

  const handleEdit = (fieldName) => {
    setEditingField(fieldName);
  };

  const handleSubmit = async () => {
    if (!validateRequiredField(editingField)) {
      return;
    }

    const { name, email } = formData;

    const clientData = {
      name: name.trim(),
      email: email.trim(),
    };

    const response = await clientEdit(clientData, userId, token);

    if (response === "Email already registered") {
      setErrorData((prevErrorData) => ({
        ...prevErrorData,
        email: "Email já registrado",
      }));
      toastError("Email já utilizado")
    }
    setEditingField(null); // Reset editing mode after successful submission
  };


  const validateRequiredField = (fieldName) => {
    const value = formData[fieldName];
    const errors = {};

    if (!value.trim()) {
      toastError(`Campo ${fieldName} é obrigatório.`);
      errors[fieldName] = `Campo ${fieldName} é obrigatório`;
    } else if (value === user.name || value === userEmail) {
      toastError(`Nenhum dado alterado em ${fieldName}.`);
      errors[fieldName] = `Nenhum dado alterado em ${fieldName}.`;
    }

    setErrorData((prevErrorData) => ({
      ...prevErrorData,
      ...errors,
    }));

    return Object.keys(errors).length === 0;
  };


  return (
    <div className='container-detalhes'>
      <div className="DetalhesDoUsuario">
        <h2 className="DetalhesDoUsuario__titulo">Seus dados:</h2>

        {user ? (
          <>
            <p className="DetalhesDoUsuario__info">
              <strong>ID do Usuário:</strong> {user.id}
            </p>

            <p className="DetalhesDoUsuario__info">
              <strong>Nome do Usuário:</strong>
              {editingField === 'name' ? (
                <>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <button className='btn-editUser-confirmar' onClick={handleSubmit} >Confirmar</button>
                </>
              ) : (
                <>
                  {user.name} <button onClick={() => handleEdit('name')}>Editar</button>
                </>
              )}
            </p>

            <p className="DetalhesDoUsuario__info">
              <strong>Email do Usuário:</strong>
              {editingField === 'email' ? (
                <>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button className='btn-editUser-confirmar' onClick={handleSubmit} > Confirmar</button>
                </>
              ) : (
                <>
                  {user.email} <button onClick={() => handleEdit('email')}>Editar</button>
                </>
              )}
            </p>

            {/* Resto do código... */}
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>

    </div >
  );
};

export default DetalhesDoUsuario;
