type Techs = {
    name: string,
    image: string,
}

export interface Project {
    _id: string,
    title: string,
    type_EN: string,
    type_ES: string,
    description_EN: string,
    description_ES: string,
    images: string[],
    technologies: Techs[],
    link: string[]
}

export type TypeProjects = Project[]

export type TypeHandleLanguageChange = (language: string) => void
export type TypeCurrentLanguage = string