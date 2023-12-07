export interface Project {
    _id: string,
    title: string,
    type: string,
    description: string,
    images: string[],
    technologies: string[],
    link: string[]
}

export type TypeProjects = Project[]