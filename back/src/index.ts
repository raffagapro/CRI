import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";


AppDataSource.initialize().then(res=>{
    console.log(`Database connection established...`);
    //logica extra del setup o arranque
    server.listen(PORT, ()=>{
        console.log(`Server listening to port ${PORT}`);
    });
});


