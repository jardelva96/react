const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  notas: {
    type: [Number],
    default: []
  }
});

module.exports = mongoose.model('Disciplina', disciplinaSchema);
