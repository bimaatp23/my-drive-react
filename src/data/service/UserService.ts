import axios from "axios"
import { Observable } from "rxjs"
import { API_BASE_ENDPOINT, API_USER_ENDPONT, HEADERS_MULTIPART } from '../../PublicConstant'
import { BaseResp } from "../entity/BaseResp"
import { GetUserListResp } from "../entity/user/GetUserListResp"
import { GetUserReq } from "../entity/user/GetUserReq"
import { GetUserResp } from "../entity/user/GetUserResp"
import { LoginReq } from "../entity/user/LoginReq"
import { LoginResp } from "../entity/user/LoginResp"
import { RegisterReq } from "../entity/user/RegisterReq"
import { RegisterResp } from "../entity/user/RegisterResp"
import { UpdateUserReq } from "../entity/user/UpdateUserReq"
import { UpdateUserResp } from "../entity/user/UpdateUserResp"
import { convertToCamelCase, convertToSnakeCase } from '../mapper/BaseMapper'

export function GetUserListService(): Observable<BaseResp> {
    return new Observable(observer => {
        axios.get(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/list`)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as GetUserListResp)
                }
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data))
            })
    })
}

export function GetUserService(getUserReq: GetUserReq): Observable<BaseResp> {
    const req = convertToSnakeCase(getUserReq)
    return new Observable(observer => {
        axios.get(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/${req.email}`)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as GetUserResp)
                }
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data))
            })
    })
}

export function LoginService(loginReq: LoginReq): Observable<BaseResp> {
    const req = convertToSnakeCase(loginReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/login`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as LoginResp)
                }
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data))
            })
    })
}

export function RegisterService(registerReq: RegisterReq): Observable<BaseResp> {
    const req = convertToSnakeCase(registerReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/register`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as RegisterResp)
                }
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data))
            })
    })
}

export function UpdateUserService(updateUserReq: UpdateUserReq): Observable<BaseResp> {
    const req = convertToSnakeCase(updateUserReq)
    return new Observable(observer => {
        axios.post(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/update`, req, HEADERS_MULTIPART)
            .then(response => {
                if (response.data.code === 200) {
                    observer.next(convertToCamelCase(response.data) as UpdateUserResp)
                }
                observer.complete()
            })
            .catch(error => {
                observer.error(convertToCamelCase(error.response.data))
            })
    })
}