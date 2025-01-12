import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Estácio</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/files">Arquivos</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
