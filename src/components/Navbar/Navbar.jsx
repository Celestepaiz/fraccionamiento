import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
    let links = [
        <ul className="nav navbar-light bg-light justify-content-end">
            <li className="nav-item">
                <NavLink to="/all-users" className="nav-link"> Usuarios </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/all-payments" className="nav-link"> Pagos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/all-reservations" className="nav-link"> Reservaciones </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/all-maintenance" className="nav-link"> Mantenimiento </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/reports" className="nav-link"> Reportes </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/logout' className="nav-link"> Cerrar Sesion</NavLink>
            </li>
        </ul>
    ]
    
    return (
        <nav >
            {
                props.auth ? links: null
            }
        
        </nav>
    )
}

export default Navbar