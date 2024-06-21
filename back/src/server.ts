import express from "express";
import userRouter from "./routes/userRoutes";
import appointmentRouter from "./routes/appointmentRoutes";
import authRouter from "./routes/authRoutes";
import cors from 'cors';


const server = express();

//config
//middlewares
server.use(express.json());
server.use(cors());
//routes
server.use(userRouter);
server.use(appointmentRouter);
server.use(authRouter);

export default server;