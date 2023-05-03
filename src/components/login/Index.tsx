import React, { ReactElement } from 'react'
import Button from '../mini/Button'
import Input from '../mini/Input'
import { LoginReq } from '../../data/entity/user/LoginReq'
import { LoginService } from '../../data/service/UserService'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {
    error: boolean
    isLoading: boolean
    loginReq: LoginReq
    isDisabled: boolean
}

export default class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
            loginReq: {
                email: '',
                password: ''
            },
            isDisabled: true
        }
    }
    doLogin() {
        LoginService(this.state.loginReq)
            .subscribe({
                next: response => {
                    if (response.code === 200) {
                        sessionStorage.setItem('isLogin', 'true')
                        sessionStorage.setItem('email', response.result.email)
                        window.location.reload()
                    }
                }
            })
    }
    handleOnKeyUp(event: any): void {
        if (event.target.name === 'email') {
            this.state.loginReq.email = event.target.value
        } else if (event.target.name === 'password') {
            this.state.loginReq.password = event.target.value
        }
        this.checkInput()
        console.log(this.state.isDisabled)
    }
    checkInput(): void {
        this.setState({
            isDisabled: !(this.state.loginReq.email !== '' && this.state.loginReq.password !== '')
        })
    }
    render() {
        return <>
            {this.props.redirect}
            <form 
                className='fixed left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 w-1/3 rounded-lg py-10'
            >
                <center
                    className='space-y-3'
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
                        onKeyUp={this.handleOnKeyUp.bind(this)}
                        name='email'
                        />
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        class='w-2/3 px-4 py-2'
                        onKeyUp={this.handleOnKeyUp.bind(this)}
                        name='password'
                    />
                    <Button 
                        type='button' 
                        label='Login' 
                        class='w-2/3 py-2' 
                        onClick={this.doLogin.bind(this)}
                        isDisabled={this.state.isDisabled}
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
                </center>
            </form>
        </>
    }
}