import React, { ReactElement } from 'react'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {

}

export default class Trash extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <>
            {this.props.redirect}
            <h1 
                className='text-2xl font-semibold text-cyan-500 mb-4'
            >
                Trash File
            </h1>
        </>
    }
}