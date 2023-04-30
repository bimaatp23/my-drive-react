import React from 'react'

export default function Sidebar() {
    return <>
        <div 
            className='bg-white rounded-lg w-[20%] absolute top-20 h-[calc(100%-5rem)]'
        >
            <ul>
                <Item label='Fitur 1'/>
                <Item label='Fitur 2'/>
                <Item label='Fitur 3'/>
                <Item label='Fitur 4'/>
                <Item label='Fitur 5'/>
            </ul>
        </div>
    </>
}

interface Props {
    label: string
    href?: string
}

function Item(props: Props) {
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