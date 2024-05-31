import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../store/changeTheme'

const NavBar = () => {
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'red' : ''
    }
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const btn = 'btn'
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activeLinkClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <button
                        className={theme}
                        onClick={() => dispatch(changeTheme(theme))}
                    >
                        Change Theme{' '}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
