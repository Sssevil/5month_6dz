import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'

import { useSelector } from 'react-redux'

const App = () => {
    const theme = useSelector(state => state.theme)
    return (
        <div style={{height: '100vh'}} className={theme}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
