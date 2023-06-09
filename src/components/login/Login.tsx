import React, { ReactElement } from 'react'
import { finalize } from 'rxjs'
import { LoginReq } from '../../data/entity/user/LoginReq'
import { CreateTokenService } from '../../data/service/TokenService'
import { LoginService } from '../../data/service/UserService'
import { Alert } from '../mini/Alert'
import Button from '../mini/Button'
import Input from '../mini/Input'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {
    error: boolean
    isLoading: boolean
    loginReq: LoginReq
    isDisabled: boolean
    validate: any
}

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
            loginReq: {
                email: '',
                password: ''
            },
            isDisabled: true,
            validate: {}
        }
    }
    doLogin() {
        this.setState({
            isLoading: true,
            validate: {}
        })
        LoginService(this.state.loginReq)
            .subscribe({
                next: response => {
                    this.createToken(response.result.email)
                },
                error: error => {
                    if (error.code === 400) {
                        this.setState({
                            validate: error.result
                        })
                        this.setState({
                            isLoading: false
                        })
                        Alert('error', error.message, '')
                    }
                }
            })
    }
    createToken(email: string) {
        CreateTokenService({email})
            .pipe(
                finalize(() => {
                    this.setState({
                        isLoading: false
                    })
                })
            )
            .subscribe({
                next: response => {
                    if (response.code === 200) {
                        console.log(response)
                        sessionStorage.setItem('isLogin', 'true')
                        sessionStorage.setItem('email', response.result.email)
                        sessionStorage.setItem('token', response.result.token)
                        window.location.assign('/')
                    }
                }
            })
    }
    handleOnKeyUp(event: any): void {
        var value = event.target.value
        var email = this.state.loginReq.email
        var password = this.state.loginReq.password
        if (event.target.name === 'email') {
           email = value
        } else if (event.target.name === 'password') {
           password = value
        }
        this.setState({
            loginReq: {
                email: email,
                password: password
            }
        })
        this.checkInput()
    }
    handleOnKeyDown(event: any): void {
        if (event.key === 'Enter') {
            if (!(this.state.isDisabled || this.state.isLoading)) {
                this.doLogin()
            }
        }
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
                        error={this.state.validate.email !== undefined}
                        errorMessage={this.state.validate.email}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        class='w-2/3 px-4 py-2'
                        onKeyUp={this.handleOnKeyUp.bind(this)}
                        name='password'
                        error={this.state.validate.password !== undefined}
                        errorMessage={this.state.validate.password}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Button 
                        type='button' 
                        label='Login' 
                        class='w-2/3 py-2' 
                        onClick={this.doLogin.bind(this)}
                        isDisabled={this.state.isDisabled || this.state.isLoading}
                        isLoading={this.state.isLoading}
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