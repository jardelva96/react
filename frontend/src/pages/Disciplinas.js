import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Disciplinas.css';

/**
 * Página de Disciplinas
 * Exibe uma lista de disciplinas, permite adicionar notas e calcular a média.
 */
function Disciplinas() {
  // Estado inicial com disciplinas
  const [disciplinas, setDisciplinas] = useState([]);

  // Função para calcular a média das notas
  const calcularMedia = (notas) => {
    if (notas.length === 0) return 0;
    const total = notas.reduce((soma, nota) => soma + nota, 0);
    return (total / notas.length).toFixed(2);
  };

  // Função para pegar todas as disciplinas do backend
  const carregarDisciplinas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/disciplinas');
      setDisciplinas(response.data);
    } catch (error) {
      console.error('Erro ao carregar disciplinas', error);
    }
  };

  // Função para adicionar uma nova nota a uma disciplina
  const adicionarNota = async (id, nota) => {
    const novaNota = parseFloat(nota);
    if (isNaN(novaNota) || novaNota < 0 || novaNota > 10) {
      alert('Digite uma nota válida entre 0 e 10.');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/api/disciplinas/${id}/nota`, { nota: novaNota });
      carregarDisciplinas();  // Recarregar disciplinas após a atualização
    } catch (error) {
      console.error('Erro ao adicionar nota', error);
    }
  };

  // Função para adicionar uma nova disciplina
  const adicionarDisciplina = async (nome, descricao) => {
    if (!nome.trim() || !descricao.trim()) {
      alert('O nome e a descrição da disciplina não podem estar vazios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/disciplinas', { nome, descricao });
      setDisciplinas([...disciplinas, response.data]);  // Adiciona a nova disciplina ao estado
    } catch (error) {
      console.error('Erro ao adicionar disciplina', error);
    }
  };

  // Chamar a função para carregar as disciplinas assim que a página for carregada
  useEffect(() => {
    carregarDisciplinas();
  }, []);

  return (
    <div className="disciplinas-container">
      <h1>Gerenciamento de Disciplinas</h1>
      <p>Adicione notas às disciplinas e veja as médias calculadas.</p>

      <div className="disciplinas-lista">
        {disciplinas.map((disciplina) => (
          <div key={disciplina.id} className="disciplina-card">
            <h3>{disciplina.nome}</h3>
            <p>{disciplina.descricao}</p>
            <p>Média: {calcularMedia(disciplina.notas)}</p>
            <ul className="lista-notas">
              {disciplina.notas.map((nota, index) => (
                <li key={index}>Nota {index + 1}: {nota}</li>
              ))}
            </ul>
            <input
              type="number"
              placeholder="Adicionar nota"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  adicionarNota(disciplina.id, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        ))}
      </div>

      <div className="disciplinas-controles">
        <button onClick={() => adicionarDisciplina(prompt('Nome da nova disciplina:'), prompt('Descrição da nova disciplina:'))}>
          Adicionar Disciplina
        </button>
      </div>
    </div>
  );
}

export default Disciplinas;
