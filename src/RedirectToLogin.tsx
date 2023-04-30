import React, { useEffect } from 'react'

interface Props {
    isLogin: boolean
}

export default function RedirectToLogin(props: Props) {
    useEffect(() => {
        if (!props.isLogin) {
            window.location.href = '/login'
        }
    })
    return <></>
}