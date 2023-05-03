import { BaseResp, UserResp } from "../BaseResp"

export interface GetUserResp extends BaseResp {
    result: UserResp
}