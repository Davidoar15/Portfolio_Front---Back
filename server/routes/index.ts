import express from "express";
const router = express.Router();

router.get('/projects', async (req, res) => {
  try {
    const dbClient = req.app.get('dbClient');
    const collection = dbClient.db("portfolio").collection("projects");
    const projects = await collection.find({}).toArray();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;