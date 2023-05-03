import { BaseResp } from "../BaseResp"

export interface GetUserListResp extends BaseResp {
    result: ResultGetUserList[]
}

export interface ResultGetUserList {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}