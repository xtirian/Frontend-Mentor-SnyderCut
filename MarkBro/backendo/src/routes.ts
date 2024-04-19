import express, { Express, Request, Response } from 'express';
import pool from './database/db';

function setupRoutes(app: Express) {
  // Rota raiz
  app.get('/', async (req: Request, res: Response) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT NOW()');
      res.json({message: `PostgreSQL says 'Hello, World!' from a Docker container.`,
      "Current time in database": ` ${result.rows[0].now}`
      });
    } finally {
      client.release();
    }
  });

  // Outras rotas...
}

export default setupRoutes;
