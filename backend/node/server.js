const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rotas
const disciplinasRouter = require('./routes/disciplinas');
const arquivosRouter = require('./routes/arquivos');
const mensagensRouter = require('./routes/mensagens');

// Usar rotas
app.use('/api/disciplinas', disciplinasRouter);
app.use('/api/arquivos', arquivosRouter);
app.use('/api/mensagens', mensagensRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
