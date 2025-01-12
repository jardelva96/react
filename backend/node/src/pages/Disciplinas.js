import React, { useState } from 'react';
import '../styles/Disciplinas.css';

/**
 * Página de Disciplinas
 * Exibe uma lista de disciplinas, permite adicionar notas e calcular a média.
 */
function Disciplinas() {
  // Estado inicial com disciplinas
  const [disciplinas, setDisciplinas] = useState([
    { id: 1, nome: 'Matemática', descricao: 'Cálculos básicos', notas: [8, 9, 7.5] },
    { id: 2, nome: 'Física', descricao: 'Leis da física', notas: [6, 7, 8] },
    { id: 3, nome: 'Química', descricao: 'Reações químicas', notas: [10, 9.5] },
  ]);

  // Função para calcular a média das notas
  const calcularMedia = (notas) => {
    if (notas.length === 0) return 0;
    const total = notas.reduce((soma, nota) => soma + nota, 0);
    return (total / notas.length).toFixed(2);
  };

  // Adicionar uma nova nota a uma disciplina
  const adicionarNota = (id, nota) => {
    const novaNota = parseFloat(nota);
    if (isNaN(novaNota) || novaNota < 0 || novaNota > 10) {
      alert('Digite uma nota válida entre 0 e 10.');
      return;
    }
    setDisciplinas((disciplinasAtuais) =>
      disciplinasAtuais.map((disciplina) =>
        disciplina.id === id
          ? { ...disciplina, notas: [...disciplina.notas, novaNota] }
          : disciplina
      )
    );
  };

  // Adicionar uma nova disciplina
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
