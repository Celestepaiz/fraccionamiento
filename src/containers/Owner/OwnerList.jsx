import React, { Component } from 'react'
import Table from '../../components/UI/Table'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class OwnerList extends Component {

    state = {
        headers: ["Id", "Nombre", "Email", "Calle", "Numero", "Acciones"],
        data: []
    }

    componentDidMount(){
        axios.get('http://10.50.65.22:3000/api/all-users')
             .then((response) => {
                const registros = this.ObjectToArray(response.data.users)
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
    
    //
    deleteHandler = (index) => {
        axios.delete(`http://10.50.65.22:3000/api/delete-user/${this.state.data[index][0]}`)
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
        //console.log(this.state.data[index])
        this.props.history.push({
            pathname: '/update-user',
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
