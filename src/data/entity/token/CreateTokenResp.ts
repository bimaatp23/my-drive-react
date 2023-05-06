import { BaseResp, TokenResp } from "../BaseResp";

export interface CreateTokenResp extends BaseResp {
    result: TokenResp
}