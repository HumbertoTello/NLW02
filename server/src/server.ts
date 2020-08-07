import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET (buscar, listar info), POST (criar info), PUT (atualizar info), DELETE (deletar info)
// Corpo da requisição (request body): Criação ou atualização
// Route params: identificar recurso (está na rota)
// Query params: listagem, filtro, ordenação

app.listen(3333);