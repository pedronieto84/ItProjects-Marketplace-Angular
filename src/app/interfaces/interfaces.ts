export interface User {

    userId?: string
    name: string
    email: string
    password: string
    verified?: boolean
    publishedProjects?: string[] // refers to the project id's
    admin?: boolean
    typeOfInstitution?: string;

}

export interface Project {

    projectId: string
    title: string
    ownerId: string
    publishedDate: Date
    deadline: Date
    techSet: string[] // refers to the TechObject Id's
    filesArray: string[] // will be the url of the files
    shortExplanation: string
    state: ProjectState // he cambiado estate
    bid: number
}

export interface TechObject {

    id: string
    name: string
}

export interface ProjectState {
    
    id: string
    name: string
}