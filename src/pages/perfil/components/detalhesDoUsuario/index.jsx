import React, { useState, useEffect } from 'react';
import './styles.css';
import { clientEdit } from '../../../../services/clientEdit';
import { toastError } from '../../../../helpers/ToastError';
import { getUser } from '../../../../services/getUser';

const DetalhesDoUsuario = () => {

  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem("token");

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

  const updateUserAfterEdit = (fieldName, newValue) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: newValue,
    }));
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

    if (response === null) {
      setErrorData((prevErrorData) => ({
        ...prevErrorData,
        email: "Email já registrado",
      }));

    } else {
      updateUserAfterEdit(editingField, formData[editingField]);
      setEditingField(null);

    }


    setEditingField(null);
  };

  const validateRequiredField = (fieldName) => {
    const value = formData[fieldName];
    const errors = {};

    if (!value.trim()) {
      toastError(`Campo ${fieldName} é obrigatório.`);
      errors[fieldName] = `Campo ${fieldName} é obrigatório`;
      setEditingField(null);

    } else if (value === user.name || value === userEmail) {
      toastError(`Nenhum dado alterado.`);
      errors[fieldName] = `Nenhum dado alterado em ${fieldName}.`;
      setEditingField(null);

    }

    setErrorData((prevErrorData) => ({
      ...prevErrorData,
      ...errors,
    }));

    return Object.keys(errors).length === 0;
  };

  return (
    <div className='container-detalhes overlay1'>
      <div className="DetalhesDoUsuario overlay3">
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

          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div >
  );
};

export default DetalhesDoUsuario;
