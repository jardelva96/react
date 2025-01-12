import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import '../styles/Dashboard.css';

function Dashboard() {
  const stats = [
    { label: 'Disciplinas', value: 12, icon: '📚', link: '/disciplinas' },
    { label: 'Arquivos', value: 34, icon: '📂', link: '/arquivos' },
    { label: 'Usuários', value: 8, icon: '👥', link: '/usuarios' },
    { label: 'Mensagens', value: 5, icon: '✉️', link: '/mensagens' },
  ];

  const recentUpdates = [
    { id: 1, description: 'Adicionou um novo arquivo: "Apostila de Matemática.pdf"', time: '2 horas atrás' },
    { id: 2, description: 'Novo usuário cadastrado: "João Silva"', time: '3 horas atrás' },
    { id: 3, description: 'Atualizou a disciplina: "Física Avançada"', time: '1 dia atrás' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Bem-vindo ao Portal Estácio</h1>
          <p>Gerencie suas disciplinas, arquivos e muito mais.</p>
        </header>

        <section className="dashboard-stats">
          {stats.map((stat) => (
            <Link to={stat.link} key={stat.label} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-details">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </Link>
          ))}
        </section>

        <section className="recent-updates">
          <h2>Atualizações Recentes</h2>
          <ul>
            {recentUpdates.map((update) => (
              <li key={update.id}>
                <span>{update.description}</span>
                <time>{update.time}</time>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
