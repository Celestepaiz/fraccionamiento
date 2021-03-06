import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class MaintenanceList extends Component {

    state = {
        headers: ["Id", "Concepto", "Monto", "Fecha limite", "Id", "Acciones"],
        data: []
    }

    componentDidMount(){
        axios.get('http://10.50.65.22:3000/api/all-maintenance')
             .then((response) => {
                const registros = this.ObjectToArray(response.data.registros)
                this.setState({
                    data: registros
                })
             })
    }

    ObjectToArray = (ObjectArray) => {
        let aux = []    
        ObjectArray.map((obj) => {
            // console.log(Object.values(obj))
            aux.push(Object.values(obj))
        })
        return aux    
    }
    

    //id
    deleteHandler = (index) => {
        // console.log(this.state.data[index][0])
        axios.delete(`http://10.50.65.22:3000/api/maintenance/${this.state.data[index][0]}`)
        .then(() => {
           const dataCopy = [
               ...this.state.data
           ]                 
           dataCopy.splice(index, 1)
           this.setState({
               data: dataCopy
           })
       })
        .catch(() => {
            console.log("error")
        })
    }

    //id
    updateHandler = (index) => {
        this.props.history.push({
            pathname: '/update-maintenance',
            state: {
                id: this.state.data[index][0]
            }
        })
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
                               Pagos de mantenimiento
                               <NavLink to="/maintenance" className="btn btn-success float-right"> Crear nuevo pago </NavLink>
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
