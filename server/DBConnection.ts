import { MongoClient, ServerApiVersion } from "mongodb";
require('dotenv').config();
const { PWMDBA, USER } = process.env;

const uri = `mongodb+srv://${USER}:${PWMDBA}@clusterportfolio.x9mzsy5.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default async function connection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}