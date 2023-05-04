import { BaseResp, UserResp } from "../BaseResp"
import { LoginReq } from "./LoginReq"

export interface LoginResp extends BaseResp {
    result: UserResp
}

export interface ValidateLoginResp extends BaseResp {
    result: LoginReq
}