import axios from "axios"
import { Observable } from "rxjs"
import { API_BASE_ENDPOINT, API_USER_ENDPONT } from '../../PublicConstant'
import { GetUserListResp } from "../entity/user/GetUserListResp"
import { GetUserReq } from "../entity/user/GetUserReq"
import { GetUserResp } from "../entity/user/GetUserResp"
import { convertToCamelCase, convertToSnakeCase } from '../mapper/BaseMapper'

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