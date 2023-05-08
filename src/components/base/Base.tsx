import { ReactElement, useEffect } from 'react'
import { CheckTokenService } from '../../data/service/TokenService'
import Header from './Header'
import Sidebar from './Sidebar'
import React from 'react'

interface Props {
    element: ReactElement
}

export default function Base(props: Props): ReactElement {
    useEffect(() => {
        checkToken()
    })
    return <>
        <div 
            className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[95%] h-[85%]'
        >
            <Header/>
            <Sidebar/>
            <div 
                className='bg-white rounded-lg w-[calc(80%-1rem)] absolute top-20 left-[calc(20%+1rem)] h-[calc(100%-5rem)] p-3'
            >
                {props.element}
            </div>
            <Timeout/>
        </div>
    </>
}

function checkToken(): void {
    CheckTokenService()
        .subscribe({
            error: error => {
                if (error.code === 403) {
                    sessionStorage.clear() 
                    window.location.assign('/login')
                }
            }
        })
}

interface P {

}

interface S {
    time: number
}
class Timeout extends React.Component<P, S> {
    constructor(props: P) {
        super(props)
        this.state = {
            time: 5*60
        }
    }
    componentDidMount(): void {
        setInterval(() => {
            if (this.state.time < 0) {
                CheckTokenService()
                .subscribe({
                    error: error => {
                        if (error.code === 403) {
                            sessionStorage.clear() 
                            window.location.assign('/login')
                        }
                    }
                })
            } else {
                this.setState({
                    time: this.state.time - 0.5
                })
            }
        }, 1000)
    }
    numberToTime(seconds: number): string {
        const min = Math.floor(seconds / 60)
        const sec = Math.floor((seconds - (min * 60)) % 60)
        const timeString = `${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`
        return timeString
    }
    render() {
        return <>
        <p
            className='fixed left-2 bottom-1 text-cyan-600'
        >
            { this.state.time >= 0 ? this.numberToTime(this.state.time) : 'Timeout' }
        </p>
    </>
    }
}