const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Rota para listar todos os arquivos
router.get('/', (req, res) => {
  db.all('SELECT * FROM arquivos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Rota para adicionar um novo arquivo
router.post('/', (req, res) => {
  const { nome, caminho, disciplina_id } = req.body;
  const query = `INSERT INTO arquivos (nome, caminho, disciplina_id) VALUES (?, ?, ?)`;
  db.run(query, [nome, caminho, disciplina_id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID, nome, caminho, disciplina_id });
    }
  });
});

// Rota para excluir um arquivo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM arquivos WHERE id = ?`;
  db.run(query, id, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Arquivo removido com sucesso.' });
    }
  });
});

module.exports = router;
