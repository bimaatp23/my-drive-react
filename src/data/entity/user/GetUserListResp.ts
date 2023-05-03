import { BaseResp, UserResp } from "../BaseResp"

export interface GetUserListResp extends BaseResp {
    result: UserResp[]
}