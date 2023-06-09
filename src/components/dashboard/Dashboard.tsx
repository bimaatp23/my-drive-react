import React, { ReactElement } from 'react'

interface Props {
    isLogin: boolean
    redirect: ReactElement
}

interface State {

}

export default class Dashboard extends React.Component<Props, State> {
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
                Dashboard
            </h1>
            <div
                className='flex justify-between space-x-5'
            >
                <Item 
                    count={17} 
                    label='My File'
                    href='/file'
                />
                <Item 
                    count={3} 
                    label='Sharing File'
                    href='/sharing'
                />
                <Item 
                    count={5} 
                    label='Trash File'
                    href='/trash'
                />
            </div>
        </>
    }
}

interface PropsItem {
    count: number
    label: string
    href?: string
}

function Item(props: PropsItem): ReactElement {
    return <>
        <a
            className='w-full rounded-md border border-cyan-500 text-cyan-500 flex flex-col items-center py-4'
            href={props.href === undefined ? '#' : props.href}
        >
            <p
                className='text-5xl font-semibold'
            >
                {props.count}
            </p>
            <p
                className='text-xl font-semibold'
            >
                {props.label}
            </p>
        </a>
    </>
}