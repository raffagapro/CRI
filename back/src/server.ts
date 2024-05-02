import { create } from 'domain';
import express from 'express';
import userRouter from './routes/userRoutes';
import appointmentRouter from './routes/appointmentRoutes';
import cors from 'cors';

const server = express();
//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use(userRouter);
server.use(appointmentRouter);

export default server;