import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Files from './pages/Files';
import Disciplinas from './pages/Disciplinas';
import Arquivos from './pages/Arquivos';
import Usuarios from './pages/Usuarios';
import Mensagens from './pages/Mensagens';




function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/files" element={<Files />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/arquivos" element={<Arquivos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/mensagens" element={<Mensagens />} />

          


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
