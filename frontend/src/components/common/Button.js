import React from 'react';
import '../styles/Button.css';

function Button({ text, onClick, type = 'button' }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
