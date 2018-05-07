import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

class  Reservation extends Component{
    state = {
        controls: [
            {                
                type:"text",
                value: '',
                label: 'Titulo'               
            },
            {
                type:"texto",
                value:'',
                label: 'Descripcion' 
            },
            {
                type:"date",
                value: '',
                label: 'Fecha inicio'                
            },
            {
                type:"date",
                value:'',
                label:'Fecha fin'
               
            },
            {
                type:"time",
                value:'',
                label:'Hora inicio'
            },
            {
                type:"time",
                value:'',
                label:'Hora fin'
            },        
        ],
        error: null ,
        usersData: [],
        userId: this.state.usersData[0]._id
                      
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/users')
             .then((response) => {
                 this.setState({
                     usersData: response.data.users
                 })
             }).catch((error) => {
                console.log("error" + error)
             })
    }


    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            titulo: this.state.controls[0].value,
            descripcion: this.state.controls[1].value,
            fecha_inicio: this.state.controls[2].value,
            fecha_fin: this.state.controls[3].value,
            hora_inicio: this.state.controls[4].value,
            hora_fin: this.state.controls[5].value,
            id_user: this.state.userId
        }

        axios.post('http://localhost:3000/api/reservation',data)
            .then((response) => {
                this.props.history.replace('/all-reservations')
            })
            .catch((error) => {
                this.setState({
                    error: "Ha ocurrido un error"
                })
            })
    }

    inputHandler = (event, index) => {
        const stateCopy = [
            ...this.state.controls        
        ]            
        stateCopy[index].value = event.target.value
        this.setState({
            controls: stateCopy
        })
    }

    changeHandler = (event) => {
        this.setState({
            userId: event.target.value
        })
    }


    render(){
        return(
            <div>
                 <Navbar auth={true}/> 
                 <div className="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Reservaciones
                                </div>
                                {   
                                    this.state.error
                                    ? 
                                    <div class="alert alert-danger" role="alert">
                                        {this.state.error}
                                    </div>                                
                                    : null
                                }                                                                                                
                                <form className="card-body" onSubmit={this.submitHandler}>
                            
                                    {
                                        this.state.controls.map((control, index)=>(                            
                                            <Input 
                                                key={index}
                                                label={control.label} 
                                                value={control.value} 
                                                type={control.type}
                                                changed={(event) => this.inputHandler(event,index) }
                                            />
                                        ))
                                    }
                                    <div className="form-group">
                                        <label >Nombre Usuario</label>
                                        <select className="form-control" onChange={(event) => this.changeHandler(event)}>
                                            {
                                                this.state.usersData.map((user,index) => (
                                                    <option key={index} value={user._id}>{user.nombre}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary">
                                        Crear Reservacion
                                    </button>
                                    
                                </form>                  
                            </div>                
                        </div>
                    </div>                        
                 </div>                  
            </div>
        )
    }
}

export default Reservation