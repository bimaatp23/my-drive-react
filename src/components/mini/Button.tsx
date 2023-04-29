import React from 'react'

interface Props {
    onclick?: any
    label: string
    class?: string
    type?: 'button' | 'submit' | 'reset' | undefined
    isLoading?: boolean
}

export default function Button(props: Props) {

    return <>
        <button 
            type={props.type} 
            onClick={props.onclick} 
            className={'bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-600 ' + (props.class === undefined ? '' : props.class)}
        >
            {props.isLoading ? <AnimationLoading/> : props.label}
        </button>
    </>
}

function AnimationLoading() {
    return <>
        <p
            className='animate-pulse'
        >
            Loading...
        </p>
    </>
}