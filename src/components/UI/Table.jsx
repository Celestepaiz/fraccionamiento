import React from 'react'
import { NavLink } from 'react-router-dom'
import Edit from '../../img/pencil.svg'
import Delete from '../../img/trashcan.svg'
const Table = (props) => {
    return (
        <table class="table table-hover">
        <thead>
          <tr>
            {
                props.headers.map((header, index) => (
                    <th scope="col" key={index}>{header}</th>        
                ))
            }            
          </tr>
        </thead>
        <tbody>
            {
                props.data.map((register, index) => (
                    <tr key={index}>
                        {
                            register.map((r,i) => (
                                <td key={i}>{r}</td>
                            ))
                        }
                        <td>
                            <NavLink to="/"> 
                                <img src={Edit} alt=""/>
                            </NavLink>
                            <NavLink to="/"> 
                                <img src={Delete} alt=""/>
                            </NavLink>
                        </td>
                    </tr>        
                ))
            }
        </tbody>
      </table>
    )
}

export default Table