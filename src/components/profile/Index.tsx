import React, { ReactElement } from 'react'
import { finalize } from 'rxjs/operators'
import { UserResp } from '../../data/entity/BaseResp'
import { UpdateUserReq } from '../../data/entity/user/UpdateUserReq'
import { GetUserService, UpdateUserService } from '../../data/service/UserService'
import { Alert } from '../mini/Alert'
import Button from '../mini/Button'
import Input from '../mini/Input'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {
    user: UserResp
    updateUserReq: UpdateUserReq
    isDisabled: boolean
    isLoading: boolean
    validate: UpdateUserReq
    isEdit: boolean
}

export default class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                createdAt: '',
                updatedAt: ''
            },
            updateUserReq: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            isDisabled: true,
            isLoading: false,
            validate: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            isEdit: false
        }
    }
    componentDidMount(): void {
        this.doGetUser()
    }
    doGetUser() {
        GetUserService({ email: sessionStorage.getItem('email') as string })
            .subscribe({
                next: (response) => {
                    if (response.code === 200) {
                        this.setState({
                            user: response.result,
                            updateUserReq: {
                                firstName: response.result.firstName,
                                lastName: response.result.lastName,
                                email: response.result.email,
                                password: ''
                            }
                        })
                    }
                }
            })
    }
    doUpdateUser() {
        this.setState({
            isLoading: true,
            validate: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        })
        UpdateUserService(this.state.updateUserReq)
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
                            user: response.result,
                            isEdit: false,
                            updateUserReq: {
                                firstName: response.result.firstName,
                                lastName: response.result.lastName,
                                email: response.result.email,
                                password: ''
                            }
                        })
                        Alert('success', response.message, '')
                    } else if (response.code === 400) {
                        this.setState({
                            validate: response.result
                        })
                        Alert('error', response.message, '')
                    }
                }
            })
    }
    handleOnkeyUp(event: any): void {
        const value = event.target.value
        var firstName = this.state.updateUserReq.firstName
        var lastName = this.state.updateUserReq.lastName
        var password = this.state.updateUserReq.password
        switch (event.target.name) {
            case 'firstName':
                firstName = value
                break
            case 'lastName':
                lastName = value
                break
            case 'password':
                password = value
                break
        }
        this.setState({
            updateUserReq: {
                firstName: firstName,
                lastName: lastName,
                email: this.state.updateUserReq.email,
                password: password,
            }
        })
        this.checkInput()
    }
    checkInput(): void {
        this.setState({
            isDisabled: !(this.state.updateUserReq.firstName !== '' &&
                            this.state.updateUserReq.lastName !== '' &&
                            this.state.updateUserReq.password !== '')
        })
    }
    handleIsEdit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    render() {
        return <>
            {this.props.redirect}
            <h1 
                className='text-2xl font-semibold text-cyan-500 mb-4'
            >
                My Profile
            </h1>
            <Button 
                class='absolute right-5 top-5 py-2 px-4'
                label={this.state.isEdit ? 'Cancel' : 'Edit'}
                onClick={this.handleIsEdit.bind(this)}
            />
            <div
                className='grid grid-cols-3'
            >
                <div
                    className='w-full'
                >
                    <center>
                        <div
                            className='w-60 h-60 bg-cyan-500 rounded-full'
                        >
                        </div>
                    </center>
                </div>
                <div
                    className='w-full col-span-2'
                >
                    <div
                        className='grid grid-cols-2 gap-x-4 gap-y-4'
                    >
                        <div>
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='First Name'
                                value={this.state.updateUserReq.firstName}
                                name='firstName'
                                onChange={this.handleOnkeyUp.bind(this)}
                                readOnly={!this.state.isEdit}
                                />
                        </div>
                        <div>
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='Last Name'
                                value={this.state.updateUserReq.lastName}
                                name='lastName'
                                onChange={this.handleOnkeyUp.bind(this)}
                                readOnly={!this.state.isEdit}
                            />
                        </div>
                        <div
                            className='col-span-2'
                        >
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='Email'
                                value={this.state.updateUserReq.email}
                                readOnly={true}
                            />
                        </div>
                        {
                            this.state.isEdit ?
                            <div
                                className='col-span-2 grid grid-cols-2 gap-x-4'
                            >
                                <div>
                                    <Input 
                                        type='password' 
                                        class='w-full px-4 py-2'
                                        label='Password'
                                        value={this.state.updateUserReq.password}
                                        name='password'
                                        onChange={this.handleOnkeyUp.bind(this)}
                                        error={this.state.validate.password.length > 0}
                                        errorMessage={this.state.validate.password}
                                    />
                                </div>
                                <div
                                    className='relative'
                                >
                                    <Button 
                                        type='button' 
                                        label='Update' 
                                        class='w-full absolute bottom-0 py-2' 
                                        onClick={this.doUpdateUser.bind(this)}
                                        isDisabled={this.state.isDisabled || this.state.isLoading}
                                        isLoading={this.state.isLoading}
                                    />
                                </div>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        </>
    }
}