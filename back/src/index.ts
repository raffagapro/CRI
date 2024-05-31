import { PORT } from "./config/envt";
import server from "./server"

server.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`);
});
