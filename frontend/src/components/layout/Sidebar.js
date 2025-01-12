import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/files">Arquivos</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/login">Sair</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
