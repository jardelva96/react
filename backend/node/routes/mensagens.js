const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Rota para listar todas as mensagens
router.get('/', (req, res) => {
  const query = `
    SELECT mensagens.id, usuarios.nome AS usuario, mensagens.conteudo, mensagens.data_envio
    FROM mensagens
    JOIN usuarios ON mensagens.usuario_id = usuarios.id
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Rota para enviar uma nova mensagem
router.post('/', (req, res) => {
  const { usuario_id, conteudo } = req.body;
  const query = `INSERT INTO mensagens (usuario_id, conteudo) VALUES (?, ?)`;
  db.run(query, [usuario_id, conteudo], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID, usuario_id, conteudo });
    }
  });
});

module.exports = router;
