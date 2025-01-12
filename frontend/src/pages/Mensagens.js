import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Importa o serviço de API configurado
import '../styles/Mensagens.css';

/**
 * Página de Mensagens
 * Conecta-se ao backend para listar e enviar mensagens.
 */
function Mensagens() {
  const [mensagens, setMensagens] = useState([]);
  const [usuarios, setUsuarios] = useState([]); // Carrega usuários do backend
  const [novaMensagem, setNovaMensagem] = useState('');
  const [usuarioSelecionado, setUsuarioSelecionado] = useState('');
  const [loading, setLoading] = useState(true);

  // Carregar mensagens e usuários do backend ao montar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Busca mensagens do backend
        const mensagensResponse = await api.get('/mensagens');
        setMensagens(mensagensResponse.data);

        // Busca usuários do backend
        const usuariosResponse = await api.get('/usuarios');
        setUsuarios(usuariosResponse.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Função para enviar uma nova mensagem
  const enviarMensagem = async () => {
    if (!usuarioSelecionado || !novaMensagem) {
      alert('Por favor, selecione um usuário e preencha a mensagem.');
      return;
    }

    try {
      const response = await api.post('/mensagens', {
        usuario_id: usuarioSelecionado,
        conteudo: novaMensagem,
      });
      setMensagens([...mensagens, response.data]); // Atualiza a lista de mensagens
      setNovaMensagem(''); // Limpa o campo de mensagem
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="mensagens-container">
      <h1>Gerenciamento de Mensagens</h1>
      <p>Veja as mensagens recebidas ou envie uma nova mensagem.</p>

      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <>
          <div className="mensagens-lista">
            {mensagens.map((mensagem) => (
              <div key={mensagem.id} className="mensagem-card">
                <h3>{mensagem.usuario}</h3>
                <p>{mensagem.conteudo}</p>
                <span>Enviado em: {mensagem.data_envio}</span>
              </div>
            ))}
          </div>

          <div className="mensagens-controle">
            <h2>Enviar Nova Mensagem</h2>
            <select
              value={usuarioSelecionado}
              onChange={(e) => setUsuarioSelecionado(e.target.value)}
              className="input-mensagem"
            >
              <option value="">Selecione um usuário</option>
              {usuarios.map((usuario) => (
                <option key={usuario.id} value={usuario.id}>
                  {usuario.nome}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Digite sua mensagem"
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              className="input-mensagem"
            ></textarea>
            <button onClick={enviarMensagem}>Enviar Mensagem</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Mensagens;
