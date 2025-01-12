import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return <footer className="footer">&copy; {new Date().getFullYear()} Estácio. Todos os direitos reservados.</footer>;
}

export default Footer;
