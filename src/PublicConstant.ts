export const API_BASE_ENDPOINT = 'http://localhost:8000/api'
export const API_USER_ENDPONT = 'user'
export const API_TOKEN_ENDPONT = 'token'

export const HEADERS_MULTIPART = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export const HEADERS_TOKEN = {
    headers: {
        'Token': sessionStorage.getItem('token')
    }
}

export const HEADERS_MULTIPART_TOKEN = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Token': sessionStorage.getItem('token')
    }
}