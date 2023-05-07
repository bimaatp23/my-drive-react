import { MouseEventHandler, ReactElement } from 'react'

interface Props {
    onClick?: MouseEventHandler
    label: string
    class?: string
    type?: 'button' | 'submit' | 'reset' | undefined
    isLoading?: boolean
    isDisabled?: boolean
}

export default function Button(props: Props): ReactElement {
    return <>
        <button 
            type={props.type} 
            onClick={props.onClick} 
            className={'text-white rounded-md font-semibold ' + (props.class === undefined ? '' : props.class) + (props.isDisabled ? ' bg-gray-500' : ' bg-cyan-500 hover:bg-cyan-600')}
            disabled={props.isDisabled}
        >
            {props.isLoading ? <AnimationLoading/> : props.label}
        </button>
    </>
}

function AnimationLoading(): ReactElement {
    return <>
        <p
            className='animate-pulse'
        >
            Loading...
        </p>
    </>
}