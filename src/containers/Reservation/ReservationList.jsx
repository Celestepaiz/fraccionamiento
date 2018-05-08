import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

import { NavLink } from 'react-router-dom'

export default class ReservationList extends Component {

    state = {
        headers: ["Id", "Titulo", "Descripcion", "Fecha inicio", "Fecha fin", "Hora inicio", "Hora fin", "Acciones"],
        data: []
    }

    componentDidMount(){
        axios.get('http://10.50.67.83:4203/api/all-reservations')
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
        axios.delete(`http://localhost:3000/api/Reservation/${this.state.data[index][0]}`)
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
                               Reservaciones
                               <NavLink to="/reservation" className="btn btn-success float-right"> Crear </NavLink>
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
