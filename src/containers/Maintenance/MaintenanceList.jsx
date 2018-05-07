import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'

export default class MaintenanceList extends Component {

    state = {
        headers: ["Id", "Concepto", "Monto", "Fecha limite"],
        data: [
            ["1","Pago Mayo", "200", "2018-05-05"]
        ]
    }

    render() {
        return(
            <div>
            <Navbar/>
            <div className="container">
               <div className="row justify-content-center align-items-center">
                   <div className="col-sm-12">
                       <div className="card mt-15">
                           <div className="card-header text-center">
                               Pagos de mantenimiento
                               <NavLink to="/maintenance" className="btn btn-success float-right"> Crear nuevo pago </NavLink>
                           </div>       
                           <Table headers={this.state.headers} data={this.state.data}/>
                           </div>                
                        </div>
                    </div>                        
                 </div>     
            </div>
        )
    }

}
