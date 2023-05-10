import { ReactElement } from 'react'

export default function Sidebar(): ReactElement {
    return <>
        <div 
            className='bg-white rounded-lg w-[20%] absolute top-20 h-[calc(100%-5rem)]'
        >
            <ul>
                <Item label='Dashboard' href='/'/>
                <Item label='My File' href='/file'/>
                <Item label='Sharing File' href='/sharing'/>
                <Item label='Trash File' href='/trash'/>
            </ul>
        </div>
    </>
}

interface Props {
    label: string
    href?: string
}

function Item(props: Props): ReactElement {
    return <>
        <a 
            href={props.href === undefined ? '#' : props.href}
        >
            <li
                className='w-full border-b text-cyan-500 hover:bg-cyan-300 hover:text-white px-4 py-2 text-lg font-semibold'
            >
                {props.label}
            </li>
        </a>
    </>
}