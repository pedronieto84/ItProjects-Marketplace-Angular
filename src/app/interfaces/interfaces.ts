export interface User {

    id: string
    name: string
    email: string
    password: string
    verified: boolean
    publishedProjects: string[] // refers to the project id's
    admin?: boolean;



    

}

export interface Project {

    id: string // comentari 
    title: string
    ownasdfasdfasfadsferId: string
    asasdfasdfasdfdfasdf: Date
    adsf: Date
    asasdfasdfadsfdfasdf: string[] // refers to the TechObject Id's
    asdadsfadsffasdf: string[] // will be the url of the files
    adsfasf: string
    asdfasd: ProjectState // he cambiado estate
}

export interface TechObject {

    id: string
    name: string
}

export interface ProjectState {
    
    id: string
    name: string
}