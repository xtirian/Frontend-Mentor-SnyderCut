import express from 'express';
import * as dotenv from 'dotenv';
import setupRoutes from './routes';
import cors from 'cors';
import {loggingMiddleware} from './middlewares/loggin.middleware';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
	origin: process.env.CORS_ORIGIN,
	optionsSuccessStatus: 200
}));
app.use(loggingMiddleware);

setupRoutes(app);
app.listen(port,()=>{
	console.log(`Server running at http://localhost:${port}`);})
