import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'

export default class PaymentsList extends Component {

    state = {
        headers: ["Id", "Folio", "Fecha de mantenimiento", "Calle", "Numero", "Nombre de quien pago", "Acciones"],
        data: [
            ["1","1234567", "2017-09-09", "Asturias", "22", "Vicentina"]
        ]
    }

    //folio
    deleteHandler = (index) => {
        console.log(this.state.data[index][1])
    }

    //folio
    updateHandler = (index) => {
        console.log(this.state.data[index][1])
    }

    render() {
        return(
            <div>
            <Navbar auth={true}/>
            <div className="container">
               <div className="row justify-content-center align-items-center">
                   <div className="col-sm-12">
                       <div className="card mt-15">
                           <div className="card-header text-center">
                               Lista de pagos 
                               <NavLink to="/payments" className="btn btn-success float-right"> Registrar pago </NavLink>
                           </div>       
                           <Table
                                headers={this.state.headers} 
                                data={this.state.data}
                                deleteHandler={this.deleteHandler}
                                updateHandler={this.updateHandler}
                            />
                           </div>                
                        </div>
                    </div>                        
                 </div>     
            </div>
        )
    }

}
