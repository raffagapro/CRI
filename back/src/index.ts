import { PORT } from "./config/envs";
import server from "./server";

server.listen(PORT, ()=>{
    //logica para levantamiento de BD, modelos, etc
    console.log(`Server listening to port ${PORT}`);
});


