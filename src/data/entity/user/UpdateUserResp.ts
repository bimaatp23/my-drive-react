import { BaseResp, UserResp } from "../BaseResp";
import { UpdateUserReq } from "./UpdateUserReq";

export interface UpdateUserResp extends BaseResp {
    result: UserResp
}

export interface ValidateUpdateUserResp extends BaseResp {
    result: UpdateUserReq
}