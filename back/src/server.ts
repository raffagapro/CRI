import { create } from 'domain';
import express from 'express';
import userRouter from './routes/userRoutes';
import appointmentRouter from './routes/appointmentRoutes';

const server = express();
//middlewares
server.use(express.json());
//routes
server.use(userRouter);
server.use(appointmentRouter);

export default server;