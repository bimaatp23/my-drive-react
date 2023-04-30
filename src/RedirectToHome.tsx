import React from 'react'

interface Props {

}

interface State {
    isLogin: boolean
}

export default class Redirect extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isLogin: false
        }
        this.state.isLogin ? 
            window.location.href = '/dashboard'
            :
            window.location.href = '/login'
    }
    render() {
        return <></>
    }
}