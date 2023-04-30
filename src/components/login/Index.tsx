import React, { ReactElement } from 'react'
import Button from '../mini/Button'
import Input from '../mini/Input'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {
    error: boolean
    isLoading: boolean
}

export default class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
        }
    }
    render() {
        return <>
            {this.props.redirect}
            <form 
                className='fixed left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 w-1/3 flex flex-col items-center rounded-lg py-10 space-y-3'
            >
                <h1 
                    className='text-2xl font-semibold text-cyan-500'
                >
                    Login Page
                </h1>
                <Input 
                    type='text' 
                    placeholder='Email' 
                    class='w-2/3 px-4 py-2' 
                />
                <Input 
                    type='password' 
                    placeholder='Password' 
                    class='w-2/3 px-4 py-2'
                />
                <Button 
                    type='submit' 
                    label='Login' 
                    class='w-2/3 py-2' 
                />
                <p
                    className='font-semibold'
                >
                    Don't have an account? 
                    <a 
                        href='/register'
                        className='ml-1 text-cyan-500 hover:text-cyan-600'
                    >
                        Register
                    </a>
                </p>
            </form>
        </>
    }
}