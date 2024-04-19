import express from 'express';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import setupRoutes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'db', // Nome do serviço do banco de dados no Docker Compose
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // Porta padrão do PostgreSQL
});

// Configura as rotas
setupRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
