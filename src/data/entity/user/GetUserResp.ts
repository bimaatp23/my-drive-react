import { BaseResp } from "../BaseResp"

export interface GetUserResp extends BaseResp {
    result: DataGetUserResp
}

export interface DataGetUserResp {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}