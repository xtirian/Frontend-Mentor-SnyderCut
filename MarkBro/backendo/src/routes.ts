import express, { Express, Request, Response } from "express";
import pool from "./database/db";
import { authMiddleware } from "./middlewares/auth.middleware";
import signupRoute from "./routes/public/signup.routes";
import signinRoute from "./routes/public/signin.routes";
import getAllUsersRoute from './routes/public/getAllUsers.routes'
import createFiles from './routes/auth/files/create.routes'
import deleteFiles from './routes/auth/files/delete.routes'
import getFileById from './routes/auth/files/getById.routes'
import getFilesByUserId from './routes/auth/files/getByUserId.routes'
import updateFileContent from './routes/auth/files/updateContent.routes'
import updateFileName from './routes/auth/files/updateName.routes'
import updateUser from './routes/auth/user/update.routes'
import deleteUser from './routes/auth/user/delete.routes'
import getUserById from './routes/auth/user/getById.routes'

function setupRoutes(app: Express) {
  // Rota raiz
  app.get("/", async (req: Request, res: Response) => {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT NOW()");
      res.json({
        message: `PostgreSQL says 'Hello, World!' from a Docker container.`,
        "Current time in database": ` ${result.rows[0].now}`,
      });
    } finally {
      client.release();
    }
  });

  // PUBLIC ROUTES
  app.use("/", signupRoute);
  app.use('/', getAllUsersRoute)
  app.use('/', signinRoute)

  // AUTH ROUTES

  // FILES
  app.use('/auth', authMiddleware, createFiles )
  app.use('/auth', authMiddleware, deleteFiles )
  app.use('/auth', authMiddleware, getFileById )
  app.use('/auth', authMiddleware, getFilesByUserId )
  app.use('/auth', authMiddleware, updateFileContent )
  app.use('/auth', authMiddleware, updateFileName )

  // USER
  app.use('/auth', authMiddleware, updateUser )
  app.use('/auth', authMiddleware, deleteUser )
  app.use('/auth', authMiddleware, getUserById )
}

export default setupRoutes;
