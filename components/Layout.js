import React from 'react'
import useAuth from '../hooks/useAuth'
import Header from './Navbar'

export default function Layout(props) {
    const { children } = props
    return (
        <div className='flex flex-col min-h-screen relative bg-black text-white'> 
        <Header useAuth={useAuth}/>
        <main className='flex-1 flex flex-col p-4'>
            {children}
        </main>
        
        </div>
    )
}