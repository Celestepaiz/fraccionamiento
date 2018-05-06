import React from 'react'

const Navbar = (props) => (
    <ul className="nav navbar-light bg-light justify-content-end">
        <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
)

export default Navbar