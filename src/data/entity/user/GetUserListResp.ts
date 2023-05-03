import { BaseResp } from "../BaseResp"

export interface GetUserListResp extends BaseResp {
    result: UserList[]
}

export interface UserList {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}