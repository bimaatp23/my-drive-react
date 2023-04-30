import React, { ReactElement } from 'react'
import Input from '../mini/Input'

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
                                value='Bima'
                            />
                        </div>
                        <div>
                            <Input 
                                type='text' 
                                class='w-full px-4 py-2'
                                label='Last Name'
                                value='Tribuana Putra'
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
                                value='bimaatp.23@gmail.com'
                                error={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}