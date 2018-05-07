import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'

export default class MaintenanceList extends Component {

    state = {
        headers: ["Id", "Modelo", "Marca", "Placas", "Codigo"],
        data: [
            ["1","2018", "Seat", "asdf123", "asdf3221"]
        ]
    }

    //id
    deleteHandler = (index) => {
        console.log(this.state.data[index][0])
    }

    //id
    updateHandler = (index) => {
        console.log(this.state.data[index][0])
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
                               Autos con acceso
                               <NavLink to="/access" className="btn btn-success float-right"> Añadir auto </NavLink>
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
