import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
