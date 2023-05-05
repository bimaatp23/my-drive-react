import React, { ChangeEventHandler, KeyboardEventHandler } from 'react'

interface Props {
    type: 'text' | 'password'
    placeholder?: string
    class?: string
    error?: boolean
    errorMessage?: string
    label?: string
    value?: string
    readOnly?: boolean
    onKeyUp?: KeyboardEventHandler
    name?: string
    onChange?: ChangeEventHandler
}

export default function Input(props: Props) {
    return <>
        <div 
            className='w-full'
        >
            <label 
                className={'items-start font-semibold ' + (props.error ? ' border-red-500 text-red-500' : ' border-cyan-500 text-cyan-500')}
            >
                {props.label === undefined ? '' : props.label}
            </label>
            {
                props.value === undefined ? 
                <input 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    className={'border focus:outline-none font-semibold rounded-md ' + (props.class === undefined ? '' : props.class) + ' ' + (props.error ? ' border-red-500 text-red-500' : (props.readOnly ? 'border-cyan-500 text-gray-500' : 'border-cyan-500 text-cyan-500'))}
                    readOnly={props.readOnly === undefined ? false : props.readOnly}
                    onKeyUp={props.onKeyUp}
                    name={props.name === undefined ? '' : props.name}
                    onChange={props.onChange}
                />
                :
                <input 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    className={'border focus:outline-none font-semibold rounded-md ' + (props.class === undefined ? '' : props.class) + ' ' + (props.error ? ' border-red-500 text-red-500' : (props.readOnly ? 'border-cyan-500 text-gray-500' : 'border-cyan-500 text-cyan-500'))}
                    value={props.value}
                    readOnly={props.readOnly === undefined ? false : props.readOnly}
                    onKeyUp={props.onKeyUp}
                    name={props.name === undefined ? '' : props.name}
                    onChange={props.onChange}
                />
            }
            <p 
                className='text-red-500 font-semibold'
            >
                {props.error ? props.errorMessage : ''}
            </p>
        </div>
    </>
}