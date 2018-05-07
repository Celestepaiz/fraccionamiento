import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'

export default class ReservationList extends Component {

    state = {
        headers: ["Id", "Titulo", "Descripcion", "Fecha inicio", "Fecha fin", "Hora inicio", "Hora fin", "Acciones"],
        data: [
            ["1","Cena", "COn mi amor", "2018-03-03", "2018-03-04", "12:00:00", "12:00:00"]
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
                               Reservaciones
                               <NavLink to="/reservation" className="btn btn-success float-right"> Crear </NavLink>
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
