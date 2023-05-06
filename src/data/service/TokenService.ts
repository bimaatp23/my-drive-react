import axios from "axios";
import { Observable } from "rxjs";
import { API_BASE_ENDPOINT, API_TOKEN_ENDPONT, HEADERS_MULTIPART } from "../../PublicConstant";
import { CreateTokenReq } from "../entity/token/CreateTokenReq";
import { CreateTokenResp } from "../entity/token/CreateTokenResp";
import { convertToCamelCase, convertToSnakeCase } from "../mapper/BaseMapper";

export function CreateTokenService(createTokenReq: CreateTokenReq): Observable<any> {
    const req = convertToSnakeCase(createTokenReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_TOKEN_ENDPONT}/create`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as CreateTokenResp)
                } else if (response.data.code === 400) {
                    observer.next(convertToCamelCase(response.data))
                }
                observer.complete()
            })
    })
}