import React from 'react'
import Edit from '../../img/pencil.svg'
import Delete from '../../img/trashcan.svg'
const Table = (props) => {
    return (
        <table className="table table-hover">
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
                            <img src={Edit} alt="" className="ml-10" onClick={() => props.updateHandler(index)}/>
                            <img src={Delete} alt="" className="ml-10"  onClick={() => props.deleteHandler(index)}/>
                        </td>
                    </tr>        
                ))
            }
        </tbody>
      </table>
    )
}

export default Table