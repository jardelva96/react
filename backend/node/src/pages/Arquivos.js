import React, { useState } from 'react';
import '../styles/Arquivos.css';

/**
 * Página de Arquivos
 * Exibe a lista de arquivos e permite o upload de novos arquivos.
 */
function Arquivos() {
  // Simulação dos arquivos existentes
  const [arquivos, setArquivos] = useState([
    { id: 1, nome: 'Apostila de Matemática.pdf', categoria: 'Educação' },
    { id: 2, nome: 'Resumo de Física.docx', categoria: 'Educação' },
    { id: 3, nome: 'Plano de Estudos.xlsx', categoria: 'Planejamento' },
  ]);

  // Função para adicionar um novo arquivo
  const adicionarArquivo = (nome, categoria) => {
    if (!nome || !categoria) {
      alert('Por favor, preencha o nome e a categoria do arquivo.');
      return;
    }
    const novoArquivo = {
      id: arquivos.length + 1,
      nome,
      categoria,
    };
    setArquivos([...arquivos, novoArquivo]);
  };

  return (
    <div className="arquivos-container">
      <h1>Gerenciamento de Arquivos</h1>
      <p>Veja os arquivos disponíveis ou faça o upload de novos arquivos.</p>

      <div className="arquivos-lista">
        {arquivos.map((arquivo) => (
          <div key={arquivo.id} className="arquivo-card">
            <h3>{arquivo.nome}</h3>
            <p>Categoria: {arquivo.categoria}</p>
          </div>
        ))}
      </div>

      <div className="arquivos-controle">
        <h2>Adicionar Novo Arquivo</h2>
        <input
          type="text"
          placeholder="Nome do Arquivo"
          id="nomeArquivo"
          className="input-arquivo"
        />
        <input
          type="text"
          placeholder="Categoria"
          id="categoriaArquivo"
          className="input-arquivo"
        />
        <button
          onClick={() =>
            adicionarArquivo(
              document.getElementById('nomeArquivo').value,
              document.getElementById('categoriaArquivo').value
            )
          }
        >
          Adicionar Arquivo
        </button>
      </div>
    </div>
  );
}

export default Arquivos;
