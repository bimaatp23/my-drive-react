import React, { ReactElement } from 'react'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {

}

export default class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return <>
            {this.props.redirect}
            <h1 className='text-xl'>Profile Page</h1>
        </>
    }
}