const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Rota para listar todas as disciplinas
router.get('/', (req, res) => {
  db.all('SELECT * FROM disciplinas', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Retorna as disciplinas com as notas convertidas de JSON
      const disciplinas = rows.map((row) => ({
        ...row,
        notas: JSON.parse(row.notas || '[]'),
      }));
      res.json(disciplinas);
    }
  });
});

// Rota para adicionar uma nova disciplina
router.post('/', (req, res) => {
  const { nome, descricao } = req.body;
  if (!nome || !descricao) {
    return res.status(400).json({ error: 'Nome e descrição são obrigatórios.' });
  }
  const query = `INSERT INTO disciplinas (nome, descricao, notas, media) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, descricao, '[]', 0], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID, nome, descricao, notas: [], media: 0 });
    }
  });
});

// Rota para adicionar uma nota a uma disciplina
router.put('/:id/nota', (req, res) => {
  const { id } = req.params;
  const { nota } = req.body;

  if (nota === undefined || nota < 0 || nota > 10) {
    return res.status(400).json({ error: 'A nota deve ser um valor entre 0 e 10.' });
  }

  // Buscar a disciplina pelo ID para obter as notas existentes
  db.get('SELECT * FROM disciplinas WHERE id = ?', [id], (err, disciplina) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!disciplina) {
      return res.status(404).json({ error: 'Disciplina não encontrada.' });
    }

    // Extrair as notas existentes, adicionar a nova nota e calcular a média
    const notas = JSON.parse(disciplina.notas || '[]');
    notas.push(nota);
    const media = notas.reduce((sum, n) => sum + n, 0) / notas.length;

    // Atualizar as notas e a média na base de dados
    const query = `UPDATE disciplinas SET notas = ?, media = ? WHERE id = ?`;
    db.run(query, [JSON.stringify(notas), media.toFixed(2), id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id, nome: disciplina.nome, descricao: disciplina.descricao, notas, media });
    });
  });
});

module.exports = router;
