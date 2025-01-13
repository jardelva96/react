const express = require('express');
const Disciplina = require('../models/Disciplina');

const router = express.Router();

// Rota para listar todas as disciplinas
router.get('/', async (req, res) => {
  try {
    const disciplinas = await Disciplina.find();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para criar uma nova disciplina
router.post('/', async (req, res) => {
  const { nome, descricao } = req.body;
  const novaDisciplina = new Disciplina({
    nome,
    descricao,
    notas: [],
  });

  try {
    const disciplina = await novaDisciplina.save();
    res.status(201).json(disciplina);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para editar uma disciplina
router.put('/:id', async (req, res) => {
  const { nome, descricao } = req.body;
  try {
    const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, { nome, descricao }, { new: true });
    if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada' });
    res.json(disciplina);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para excluir uma disciplina
router.delete('/:id', async (req, res) => {
  try {
    const disciplina = await Disciplina.findByIdAndDelete(req.params.id);
    if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para adicionar uma nota a uma disciplina
router.put('/:id/nota', async (req, res) => {
  const { nota } = req.body;
  try {
    const disciplina = await Disciplina.findById(req.params.id);
    if (!disciplina) return res.status(404).json({ message: 'Disciplina não encontrada' });
    
    disciplina.notas.push(nota);
    await disciplina.save();
    res.json(disciplina);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
