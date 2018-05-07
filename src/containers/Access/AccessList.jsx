import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class MaintenanceList extends Component {

    state = {
        headers: ["Id", "Modelo", "Marca", "Placas", "Codigo", "User"],
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/all-access')
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
        axios.delete(`http://localhost:3000/api/access/${this.state.data[index][4]}`)
             .then(() => {
                const dataCopy = [
                    ...this.state.data
                ]                 
                dataCopy[index] = null
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
