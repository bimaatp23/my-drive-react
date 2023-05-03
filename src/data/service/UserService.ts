import axios from "axios"
import { Observable } from "rxjs"
import { API_BASE_ENDPOINT, API_USER_ENDPONT } from '../../PublicConstant'
import { GetUserListResp } from "../entity/user/GetUserListResp"
import { convertToCamelCase } from '../mapper/BaseMapper'

export function GetUserListService(): Observable<GetUserListResp> {
    return new Observable(observer => {
        axios.get(`${API_BASE_ENDPOINT}/${API_USER_ENDPONT}/list`)
        .then(response => {
            observer.next(convertToCamelCase(response.data) as GetUserListResp)
            observer.complete()
        })
        .catch(error => {
            observer.error(error)
        })
    })
}