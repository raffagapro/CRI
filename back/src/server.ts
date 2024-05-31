import express from "express";
import userRouter from "./routes/userRoutes";
import appointmentRouter from "./routes/appointmentRoutes";
import authRouter from "./routes/authRoutes";


const server = express();

//config
//middlewares
server.use(express.json());
//routes
server.use(userRouter);
server.use(appointmentRouter);
server.use(authRouter);

export default server;