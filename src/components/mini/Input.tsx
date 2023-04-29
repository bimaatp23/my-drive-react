import React from 'react'

interface Props {
    type: 'text' | 'password'
    placeholder: string
    class?: string
    error?: boolean
    errorMessage?: string
}

export default function Input(props: Props) {
    return <>
        <div 
            className='w-full flex items-center flex-col'
        >
            <input 
                type={props.type} 
                placeholder={props.placeholder} 
                className={'border focus:outline-none font-semibold rounded-md ' + (props.class === undefined ? '' : props.class) + (props.error ? ' border-red-500 text-red-500' : ' border-cyan-500 text-cyan-500')}
            />
            <p 
                className='text-red-500 font-semibold'
            >
                {props.error ? props.errorMessage : ''}
            </p>
        </div>
    </>
}