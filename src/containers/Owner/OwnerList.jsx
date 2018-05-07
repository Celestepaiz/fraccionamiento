import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'

export default class OwnerList extends Component {

    state = {
        headers: ["Id", "Nombre", "Email", "Calle", "Numero", "Rol", "Acciones"],
        data: [
            ["1","Juan", "Juan@Juan.com", "Una bien shida", "69", "Propietario"]
        ]
    }

    //
    deleteHandler = (index) => {
        console.log(this.state.data[index])
    }

    updateHandler = (index) => {
        console.log(this.state.data[index])
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
                               Lista Usuarios 
                               <NavLink to="/owner" className="btn btn-success float-right"> Crear usuario </NavLink>
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
