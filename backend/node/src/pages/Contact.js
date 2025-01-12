import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.name}`);
    // Aqui você pode enviar os dados do formulário para o backend
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contato</h1>
        <p>Entre em contato conosco. Estamos aqui para ajudar!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Informações de Contato</h2>
        <p>Email: contato@estacio.com.br</p>
        <p>Telefone: (11) 4002-8922</p>
        <p>Endereço: Rua Exemplo, 123, São Paulo - SP</p>
      </div>
    </div>
  );
}

export default Contact;
