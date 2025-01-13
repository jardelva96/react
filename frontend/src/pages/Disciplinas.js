import React, { useState } from 'react';
import '../styles/Disciplinas.css';

/**
 * Página de Disciplinas
 * Exibe uma lista de disciplinas, permite adicionar, editar, remover notas e calcular a média.
 */
function Disciplinas() {
  // Estado inicial com disciplinas fictícias
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nome: 'Matemática', descricao: 'Disciplina de Matemática', notas: [7, 8, 9] },
    { id: 2, nome: 'Física', descricao: 'Disciplina de Física', notas: [6, 6, 7] },
  ]);

  // Função para calcular a média das notas
  const calcularMedia = (notas) => {
    if (notas.length === 0) return 0;
    const total = notas.reduce((soma, nota) => soma + nota, 0);
    return (total / notas.length).toFixed(2);
  };

  // Função para adicionar uma nova nota a uma disciplina
  const adicionarNota = (id, nota) => {
    const novaNota = parseFloat(nota);
    if (isNaN(novaNota) || novaNota < 0 || novaNota > 10) {
      alert('Digite uma nota válida entre 0 e 10.');
      return;
    }

    setDisciplinas((prevDisciplinas) =>
      prevDisciplinas.map((disciplina) =>
        disciplina.id === id
          ? { ...disciplina, notas: [...disciplina.notas, novaNota] }
          : disciplina
      )
    );
  };

  // Função para adicionar uma nova disciplina
  const adicionarDisciplina = (nome, descricao) => {
    if (!nome.trim() || !descricao.trim()) {
      alert('O nome e a descrição da disciplina não podem estar vazios.');
      return;
    }

    const novaDisciplina = {
      id: disciplinas.length + 1,
      nome,
      descricao,
      notas: [],
    };

    setDisciplinas([...disciplinas, novaDisciplina]);
  };

  // Função para editar o nome e descrição de uma disciplina
  const editarDisciplina = (id, novoNome, novaDescricao) => {
    if (!novoNome.trim() || !novaDescricao.trim()) {
      alert('O nome e a descrição da disciplina não podem estar vazios.');
      return;
    }

    setDisciplinas((prevDisciplinas) =>
      prevDisciplinas.map((disciplina) =>
        disciplina.id === id
          ? { ...disciplina, nome: novoNome, descricao: novaDescricao }
          : disciplina
      )
    );
  };

  // Função para excluir uma disciplina
  const excluirDisciplina = (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta disciplina?');
    if (confirmDelete) {
      setDisciplinas((prevDisciplinas) =>
        prevDisciplinas.filter((disciplina) => disciplina.id !== id)
      );
    }
  };

  return (
    <div className="disciplinas-container">
      <h1>Gerenciamento de Disciplinas</h1>
      <p>Adicione, edite ou remova disciplinas e veja as médias calculadas.</p>

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

            {/* Botões para editar e excluir disciplina */}
            <button onClick={() => {
              const novoNome = prompt('Novo nome para a disciplina', disciplina.nome);
              const novaDescricao = prompt('Nova descrição para a disciplina', disciplina.descricao);
              if (novoNome && novaDescricao) {
                editarDisciplina(disciplina.id, novoNome, novaDescricao);
              }
            }}>
              Editar
            </button>
            <button onClick={() => excluirDisciplina(disciplina.id)}>
              Excluir
            </button>
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
