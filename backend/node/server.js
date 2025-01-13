const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3001;

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());

// Criando o banco de dados SQLite
const db = new sqlite3.Database('./disciplinas.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

// Criando a tabela "disciplinas" se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS disciplinas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL,
    notas TEXT
  );
`);

// Definindo a especificação do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Disciplinas',
      version: '1.0.0',
      description: 'API para gerenciar disciplinas e notas.',
    },
  },
  apis: ['./server.js'], // O caminho para o arquivo de anotações Swagger
};

// Gerando a documentação Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Usando o Swagger UI para exibir a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas

/**
 * @swagger
 * /api/disciplinas:
 *   get:
 *     description: Retorna todas as disciplinas
 *     responses:
 *       200:
 *         description: Lista de disciplinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   notas:
 *                     type: array
 *                     items:
 *                       type: integer
 */
app.get('/api/disciplinas', (req, res) => {
  db.all('SELECT * FROM disciplinas', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

/**
 * @swagger
 * /api/disciplinas:
 *   post:
 *     description: Adiciona uma nova disciplina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso
 */
app.post('/api/disciplinas', (req, res) => {
  const { nome, descricao } = req.body;
  if (!nome || !descricao) {
    return res.status(400).json({ error: 'Nome e descrição são obrigatórios' });
  }

  const query = 'INSERT INTO disciplinas (nome, descricao, notas) VALUES (?, ?, ?)';
  db.run(query, [nome, descricao, '[]'], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID,
      nome,
      descricao,
      notas: [],
    });
  });
});

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   put:
 *     description: Edita uma disciplina
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da disciplina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Disciplina atualizada com sucesso
 */
app.put('/api/disciplinas/:id', (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;
  const query = 'UPDATE disciplinas SET nome = ?, descricao = ? WHERE id = ?';
  
  db.run(query, [nome, descricao, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    res.json({ id, nome, descricao });
  });
});

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   delete:
 *     description: Exclui uma disciplina
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da disciplina
 *     responses:
 *       204:
 *         description: Disciplina excluída com sucesso
 */
app.delete('/api/disciplinas/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM disciplinas WHERE id = ?';
  
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    res.status(204).send();
  });
});

/**
 * @swagger
 * /api/disciplinas/{id}/nota:
 *   put:
 *     description: Adiciona uma nota a uma disciplina
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da disciplina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nota:
 *                 type: number
 *                 description: Nota a ser adicionada
 *     responses:
 *       200:
 *         description: Nota adicionada com sucesso
 */
app.put('/api/disciplinas/:id/nota', (req, res) => {
  const { id } = req.params;
  const { nota } = req.body;

  if (isNaN(nota) || nota < 0 || nota > 10) {
    return res.status(400).json({ error: 'Nota deve ser entre 0 e 10' });
  }

  const query = 'SELECT * FROM disciplinas WHERE id = ?';
  db.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }

    const notas = JSON.parse(row.notas);
    notas.push(nota);
    
    const updateQuery = 'UPDATE disciplinas SET notas = ? WHERE id = ?';
    db.run(updateQuery, [JSON.stringify(notas), id], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id, nome: row.nome, descricao: row.descricao, notas });
    });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Documentação Swagger disponível em http://localhost:${port}/api-docs`);
});
