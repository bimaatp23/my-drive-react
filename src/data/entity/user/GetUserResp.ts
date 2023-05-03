import { BaseResp } from "../BaseResp"

export interface GetUserResp extends BaseResp {
    result: User
}

export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}