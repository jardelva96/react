import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    setError('');
    alert(`Bem-vindo, ${email}!`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Acessar Portal</h1>
        <p>Bem-vindo ao Portal Estácio. Por favor, insira suas credenciais para continuar.</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit">Entrar</button>
        </form>
        <p className="login-help">
          Esqueceu sua senha? <a href="/reset-password">Clique aqui</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
