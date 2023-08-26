import React from 'react';
import './styles.css';

const DetalhesDoUsuario = () => {
  // Obtendo os dados do usuário armazenados no localStorage
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className='container-detalhes'>
      <div className="DetalhesDoUsuario">
        <h2 className="DetalhesDoUsuario__titulo">Seus dados:</h2>
        <hr />
        <p className="DetalhesDoUsuario__info">
          <strong>ID do Usuário:</strong> {userId}
        </p>
        <p className="DetalhesDoUsuario__info">
          <strong>Nome do Usuário:</strong> {userName}
        </p>
        <p className="DetalhesDoUsuario__info">
          <strong>Email do Usuário:</strong> {userEmail}
        </p>
      </div>
    </div>

  );
};

export default DetalhesDoUsuario;
