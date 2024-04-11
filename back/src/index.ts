import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";

AppDataSource.initialize().then(res=>{
    console.log(`Database connection established...`);
    server.listen(PORT, ()=>{
        //logica para levantamiento de BD, modelos, etc
        console.log(`Server listening to port ${PORT}`);
    });
});



