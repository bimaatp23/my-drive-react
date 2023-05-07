import { ReactElement } from 'react'
import Button from '../mini/Button'

export default function Header(): ReactElement {
    return <>
        <div 
            className='bg-white rounded-lg w-full absolute h-16'
        >
            <div
                className='flex justify-between px-5 py-4'
            >   
                <a 
                    href="/"
                >
                    <h1
                        className='text-2xl font-bold text-cyan-500'
                    >
                        My Drive
                    </h1>
                </a>
                <div
                    className='space-x-2'
                >
                    <Button
                        label='Profile'
                        class='px-4 py-1'
                        onClick={() => { window.location.href = '/profile' }}
                    />
                    <Button
                        label='Logout'
                        class='px-4 py-1'
                        onClick={() => { 
                            sessionStorage.clear() 
                            window.location.assign('/login')
                        }}
                    />
                </div>
            </div>
        </div>
    </>
}