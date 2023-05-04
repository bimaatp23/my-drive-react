import axios from "axios"
import { Observable } from "rxjs"
import { API_BASE_ENDPOINT, API_USER_ENDPONT, HEADERS_MULTIPART } from '../../PublicConstant'
import { GetUserListResp } from "../entity/user/GetUserListResp"
import { GetUserReq } from "../entity/user/GetUserReq"
import { GetUserResp } from "../entity/user/GetUserResp"
import { LoginReq } from "../entity/user/LoginReq"
import { LoginResp, ValidateLoginResp } from "../entity/user/LoginResp"
import { convertToCamelCase, convertToSnakeCase } from '../mapper/BaseMapper'
import { RegisterReq } from "../entity/user/RegisterReq"
import { RegisterResp, ValidateRegisterResp } from "../entity/user/RegisterResp"

export function GetUserListService(): Observable<GetUserListResp> {
    return new Observable(observer => {
        axios.get(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/list`)
            .then(response => {
                observer.next(convertToCamelCase(response.data) as GetUserListResp)
                observer.complete()
            })
    })
}

export function GetUserService(getUserReq: GetUserReq): Observable<GetUserResp> {
    const req = convertToSnakeCase(getUserReq)
    return new Observable(observer => {
        axios.get(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/${req.email}`)
            .then(response => {
                observer.next(convertToCamelCase(response.data) as GetUserResp)
                observer.complete()
            })
    })
}

export function LoginService(loginReq: LoginReq): Observable<LoginResp | ValidateLoginResp> {
    const req = convertToSnakeCase(loginReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/login`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as LoginResp)
                } else if (response.data.code === 400) {
                    observer.next(convertToCamelCase(response.data) as ValidateLoginResp)
                }
                observer.complete()
            })
    })
}

export function RegisterService(registerReq: RegisterReq): Observable<RegisterResp | ValidateRegisterResp> {
    const req = convertToSnakeCase(registerReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/register`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as RegisterResp)
                } else if (response.data.code === 400) {
                    observer.next(convertToCamelCase(response.data.result))
                }
            })
    })
}