import { BaseResp, UserResp } from "../BaseResp"

export interface LoginResp extends BaseResp {
    result: UserResp
}