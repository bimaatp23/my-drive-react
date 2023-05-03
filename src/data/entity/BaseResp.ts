export interface BaseResp {
    code: number
    description: string
    message: string
    result?: any
}

export interface UserResp {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}