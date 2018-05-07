import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => (
    <ul className="nav navbar-light bg-light justify-content-end">
        <li className="nav-item">
            <NavLink to="/owner" className="nav-link"> Crear usuario </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/reservation" className="nav-link"> Reservaciones</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/access" className="nav-link"> Autos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/payments" className="nav-link"> Registro de pagos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/maintenance" className="nav-link"> Alta conceptos de pago </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/all-users" className="nav-link"> Lista Usuarios </NavLink>
        </li>
    </ul>
)

export default Navbar