import app from "./app";
import connection from "./DBConnection";
require('dotenv').config();
const { PORT } = process.env

async function startServer() {
    try {
        const dbClient = await connection();

        app.set('dbClient', dbClient);
    
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}
  
startServer();