import { BaseResp, UserResp } from "../BaseResp"
import { RegisterReq } from "./RegisterReq"

export interface RegisterResp extends BaseResp {
    result: UserResp
}

export interface ValidateRegisterResp extends BaseResp {
    result: RegisterReq
}