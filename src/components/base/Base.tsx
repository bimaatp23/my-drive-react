import React, { ReactElement } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

interface Props {
    element: ReactElement
}

export default function Base(props: Props) {
    return <>
        <div 
            className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[95%] h-[85%]'
        >
            <Header/>
            <Sidebar/>
            <div 
                className='bg-white rounded-lg w-[calc(80%-1rem)] absolute top-20 left-[calc(20%+1rem)] h-[calc(100%-5rem)] p-3'
            >
                Content
                {props.element}
            </div>
        </div>
    </>
}