import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envt";
import server from "./server"
import "reflect-metadata";

AppDataSource.initialize().then(res=>{
    console.log(`Database connection established...`);
    server.listen(PORT, ()=>{
        console.log(`Server listening to port ${PORT}`);
    });
});

