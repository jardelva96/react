import React, { useState } from 'react';
import '../styles/Usuarios.css';

/**
 * Página de Usuários
 * Exibe uma lista de usuários e permite adicionar novos.
 */
function Usuarios() {
  // Simulação dos usuários existentes
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'João Silva', email: 'joao.silva@email.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@email.com' },
    { id: 3, nome: 'Carlos Almeida', email: 'carlos.almeida@email.com' },
  ]);

  // Função para adicionar um novo usuário
  const adicionarUsuario = (nome, email) => {
    if (!nome || !email) {
      alert('Por favor, preencha o nome e o email.');
      return;
    }
    const novoUsuario = {
      id: usuarios.length + 1,
      nome,
      email,
    };
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <div className="usuarios-container">
      <h1>Gerenciamento de Usuários</h1>
      <p>Veja os usuários cadastrados ou adicione novos usuários.</p>

      <div className="usuarios-lista">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario-card">
            <h3>{usuario.nome}</h3>
            <p>Email: {usuario.email}</p>
          </div>
        ))}
      </div>

      <div className="usuarios-controle">
        <h2>Adicionar Novo Usuário</h2>
        <input
          type="text"
          placeholder="Nome do Usuário"
          id="nomeUsuario"
          className="input-usuario"
        />
        <input
          type="email"
          placeholder="Email do Usuário"
          id="emailUsuario"
          className="input-usuario"
        />
        <button
          onClick={() =>
            adicionarUsuario(
              document.getElementById('nomeUsuario').value,
              document.getElementById('emailUsuario').value
            )
          }
        >
          Adicionar Usuário
        </button>
      </div>
    </div>
  );
}

export default Usuarios;
