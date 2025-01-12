import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

/**
 * Componente Home
 * Página inicial do portal Estácio com cards clicáveis que redirecionam para as funcionalidades.
 */
function Home() {
  const features = [
    {
      title: 'Gerenciar Disciplinas',
      description: 'Adicione, edite ou exclua disciplinas do catálogo.',
      icon: '📚', // Aqui você pode substituir por ícones gráficos ou SVGs
      link: '/dashboard', // Redireciona para o Dashboard
    },
    {
      title: 'Gerenciar Arquivos',
      description: 'Envie e organize arquivos relacionados às disciplinas.',
      icon: '📂',
      link: '/files', // Redireciona para Gerenciar Arquivos
    },
    {
      title: 'Relatórios e Estatísticas',
      description: 'Visualize relatórios detalhados sobre o uso do sistema.',
      icon: '📊',
      link: '/about', // Redireciona para Sobre
    },
    {
      title: 'Suporte Personalizado',
      description: 'Entre em contato com nossa equipe para suporte.',
      icon: '💬',
      link: '/contact', // Redireciona para Contato
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bem-vindo ao Portal Estácio</h1>
        <p>Gerencie suas disciplinas, arquivos e muito mais de forma simples e rápida.</p>
      </header>

      <section className="home-features">
        {features.map((feature, index) => (
          <Link key={index} to={feature.link} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
