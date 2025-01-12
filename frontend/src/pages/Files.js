import React from 'react';
import '../styles/Files.css';

function Files() {
  const files = [
    { id: 1, name: 'Apostila de Matemática.pdf' },
    { id: 2, name: 'Exercícios de Física.pdf' },
  ];

  const handleDownload = (fileName) => {
    alert(`Baixando: ${fileName}`);
  };

  return (
    <div className="files-container">
      <h1>Arquivos</h1>
      <ul className="files-list">
        {files.map((file) => (
          <li key={file.id} className="file-item">
            <span>{file.name}</span>
            <button onClick={() => handleDownload(file.name)}>Baixar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Files;
