import express from "express";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get('/projects', async (req, res) => {
    try {
        const dbClient = req.app.get('dbClient');
        const collection = dbClient.db("portfolio").collection("projects");
        const projects = await collection.find({}).toArray();

        return projects
            ? res.status(200).json(projects)
            : res.status(404).send("Not Found");
    } catch (error) {
        console.log("GET PROJECTS", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/projects/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const dbClient = req.app.get('dbClient');
        const collection = dbClient.db("portfolio").collection("projects");
        const project = await collection.findOne({ _id: new ObjectId(id) });

        return project 
            ? res.status(200).json(project)
            : res.status(404).send("Project Not Found");
    } catch(error) {
        console.log("GET PROJECT", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;