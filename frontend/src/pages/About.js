import React from 'react';
import '../styles/About.css';

/**
 * Componente About
 * Página destinada a fornecer informações sobre o portal.
 */
function About() {
  return (
    <div className="about-container">
      {/* Cabeçalho principal */}
      <header className="about-header">
        <h1>Sobre o Portal Estácio</h1>
        <p>
          O Portal Estácio é uma solução desenvolvida para facilitar o gerenciamento de
          disciplinas, arquivos e usuários, promovendo praticidade e eficiência para alunos e professores.
        </p>
      </header>

      {/* Seção de benefícios */}
      <section className="about-benefits">
        <h2>Benefícios do Portal</h2>
        <ul>
          <li>📚 Gerenciamento completo de disciplinas.</li>
          <li>📂 Organização centralizada de arquivos e documentos.</li>
          <li>📊 Relatórios e estatísticas personalizadas.</li>
          <li>💬 Suporte rápido e eficiente para dúvidas e problemas.</li>
        </ul>
      </section>

      {/* Seção de missão */}
      <section className="about-mission">
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é oferecer um sistema que facilite o aprendizado e
          a organização de informações acadêmicas, utilizando tecnologia para conectar alunos,
          professores e conteúdos de forma eficiente e intuitiva.
        </p>
      </section>
    </div>
  );
}

export default About;
