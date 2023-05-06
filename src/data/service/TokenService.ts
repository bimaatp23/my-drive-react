import axios from "axios";
import { Observable } from "rxjs";
import { API_BASE_ENDPOINT, API_TOKEN_ENDPONT, HEADERS_MULTIPART } from "../../PublicConstant";
import { BaseResp } from "../entity/BaseResp";
import { CreateTokenReq } from "../entity/token/CreateTokenReq";
import { CreateTokenResp } from "../entity/token/CreateTokenResp";
import { convertToCamelCase, convertToSnakeCase } from "../mapper/BaseMapper";

export function CreateTokenService(createTokenReq: CreateTokenReq): Observable<BaseResp> {
    const req = convertToSnakeCase(createTokenReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_TOKEN_ENDPONT}/create`, req, HEADERS_MULTIPART)
            .then(response => {
                observer.next(convertToCamelCase(response.data) as CreateTokenResp)
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data) as BaseResp)
            })
    })
}