import React, { ReactElement } from 'react'
import { finalize } from 'rxjs'
import { RegisterReq } from '../../data/entity/user/RegisterReq'
import { RegisterService } from '../../data/service/UserService'
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
    registerReq: RegisterReq
    isDisabled: boolean
    validate: any
}

export default class Register extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: false,
            isLoading: false,
            registerReq: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                cPassword: ''
            },
            isDisabled: true,
            validate: {}
        }
    }
    doRegister() {
        this.setState({
            isLoading: true,
            validate: {}
        })
        RegisterService(this.state.registerReq)
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
                        this.setState({
                            registerReq: {
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                cPassword: ''
                            }
                        })
                        Alert('success', response.message, '')
                    }
                },
                error: error => {
                    if (error.code === 400) {
                        this.setState({
                            validate: error.result
                        })
                        Alert('error', error.message, '')
                    }
                }
            })
    }
    handleOnChange(event: any): void {
        const value = event.target.value
        var firstName = this.state.registerReq.firstName
        var lastName = this.state.registerReq.lastName
        var email = this.state.registerReq.email
        var password = this.state.registerReq.password
        var cPassword = this.state.registerReq.cPassword
        switch (event.target.name) {
            case 'firstName':
                firstName = value
                break
            case 'lastName':
                lastName = value
                break
            case 'email':
                email = value
                break
            case 'password':
                password = value
                break
            case 'cPassword':
                cPassword = value
                break
        }
        this.setState({
            registerReq: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                cPassword: cPassword,
            }
        })
        this.checkInput()
    }
    handleOnKeyDown(event: any): void {
        if (event.key === 'Enter') {
            if (!(this.state.isDisabled || this.state.isLoading)) {
                this.doRegister()
            }
        }
    }
    checkInput(): void {
        this.setState({
            isDisabled: !(this.state.registerReq.firstName !== '' &&
                            this.state.registerReq.lastName !== '' &&
                            this.state.registerReq.email !== '' &&
                            this.state.registerReq.password !== '' &&
                            this.state.registerReq.cPassword !== '')
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
                        Register Page
                    </h1>
                    <Input 
                        type='text' 
                        placeholder='First Name' 
                        class='w-2/3 px-4 py-2'
                        onChange={this.handleOnChange.bind(this)}
                        name='firstName' 
                        error={this.state.validate.firstName !== undefined}
                        errorMessage={this.state.validate.firstName}
                        value={this.state.registerReq.firstName}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Input 
                        type='text' 
                        placeholder='Last Name' 
                        class='w-2/3 px-4 py-2'
                        onChange={this.handleOnChange.bind(this)}
                        name='lastName' 
                        error={this.state.validate.lastName !== undefined}
                        errorMessage={this.state.validate.lastName}
                        value={this.state.registerReq.lastName}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Input 
                        type='text' 
                        placeholder='Email' 
                        class='w-2/3 px-4 py-2'
                        onChange={this.handleOnChange.bind(this)}
                        name='email' 
                        error={this.state.validate.email !== undefined}
                        errorMessage={this.state.validate.email}
                        value={this.state.registerReq.email}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        class='w-2/3 px-4 py-2'
                        onChange={this.handleOnChange.bind(this)}
                        name='password'
                        error={this.state.validate.password !== undefined}
                        errorMessage={this.state.validate.password}
                        value={this.state.registerReq.password}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Input 
                        type='password' 
                        placeholder='Re-Password' 
                        class='w-2/3 px-4 py-2'
                        onChange={this.handleOnChange.bind(this)}
                        name='cPassword'
                        error={this.state.validate.cPassword !== undefined}
                        errorMessage={this.state.validate.cPassword}
                        value={this.state.registerReq.cPassword}
                        onKeyDown={this.handleOnKeyDown.bind(this)}
                    />
                    <Button 
                        type='button' 
                        label='Register' 
                        class='w-2/3 py-2' 
                        onClick={this.doRegister.bind(this)}
                        isDisabled={this.state.isDisabled || this.state.isLoading}
                        isLoading={this.state.isLoading}
                    />
                    <p
                        className='font-semibold'
                    >
                        Have an account? 
                        <a 
                            href='/login'
                            className='ml-1 text-cyan-500 hover:text-cyan-600'
                        >
                            Login
                        </a>
                    </p>
                </center>
            </form>
        </>
    }
}