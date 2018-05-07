import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'

import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class PaymentsList extends Component {

    state = {
        headers: ["Id", "Folio", "Fecha de mantenimiento", "Calle", "Numero", "Nombre de quien pago", "Concepto", "Monto", "Acciones"],
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/all-payments')
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
    

    //folio
    deleteHandler = (index) => {
        // console.log(this.state.data[index][1])
        axios.delete(`http://localhost:3000/api/payments/${this.state.data[index][1]}`)
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
