import axios from "axios";
import { Project, TypeProjects } from "../interfaces";

export const getProjects = async () => {
    try {
        const res = await axios.get("http://localhost:3000/projects");
        const projects: TypeProjects = res.data;
        return projects; 
    } catch(error) {
        console.log("GET PROJECTS", error);
    }
};

export const getProject = async (id: string) => {
    try {
        const res = await axios.get("http://localhost:3000/projects/"+id);
        const project: Project = res.data;
        return project; 
    } catch(error) {
        console.log("GET PROJECT", error);
    }
};