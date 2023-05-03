import React, { ReactElement } from 'react'
import Input from '../mini/Input'
import { DataGetUserResp } from '../../data/entity/user/GetUserResp'
import { GetUserService } from '../../data/service/UserService'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {
    user: DataGetUserResp
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
            }
        }
    }
    componentDidMount(): void {
        GetUserService({ email: 'mega.putri@gmail.com' })
            .subscribe({
                next: (response) => {
                    if (response.code == 200) {
                        this.setState({
                            user: response.result
                        })
                    }
                }
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
                                value={this.state.user.firstName}
                            />
                        </div>
                        <div>
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='Last Name'
                                value={this.state.user.lastName}
                                readOnly={true}
                            />
                        </div>
                        <div
                            className='col-span-2'
                        >
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='Email'
                                value={this.state.user.email}
                                error={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}