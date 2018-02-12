import React from 'react'
import { NavLink } from 'react-router-dom'

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/">[Home]</NavLink>
        <NavLink to="/vans">[Vans]</NavLink>
        <NavLink to="/events">[Events]</NavLink>
        <NavLink to="/contact">[Contact Us]</NavLink>
    </nav>

export const VanMenu = () =>
    <div className="van-menu">
        <NavLink to="/vans">[Horse Vans]</NavLink>
        <NavLink to="/vans/star-wars">[Star Wars Vans]</NavLink>
        <NavLink to="/vans/snake-and-wolf">[Snake and Wolf Vans]</NavLink>
    </div>