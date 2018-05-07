import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

class  MaintenanceUpdate extends Component{
    state = {
        controls: [
            {                
                type:"text",
                value: '',
                label: 'Concepto'               
            },
            {
                type:"texto",
                value:'',
                label: 'Monto' 
            },
            {
                type:"date",
                value: '',
                label: 'Fecha limite'                
            }
        ],
        error: null,
        usersData: [],
        userId: null
        
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/maintenance/${this.props.location.state.id}`)
        .then((response) => {
           const data = response.data.registro[0]
           const updatedControls = [
               ...this.state.controls,                                    
           ]            
           updatedControls[0].value = data.concepto
           updatedControls[1].value = data.monto
           updatedControls[2].value = data.fecha_limite
           this.setState({
               controls: updatedControls               
           })
           
        })
   
        axios.get('http://localhost:3000/api/users')
             .then((response) => {
                 this.setState({
                     usersData: response.data.users,
                     userId: response.data.users[0]._id                     
                 })
             }).catch((error) => {
                console.log("error" + error)
             })
    }


    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            concepto: this.state.controls[0].value,
            monto: this.state.controls[1].value,
            fecha_limite: this.state.controls[2].value,
            id_user: this.state.userId,
        }

        axios.post('http://localhost:3000/api/maintenance',data)
            .then((response) => {
                this.props.history.replace('/all-maintenance')
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
                                    Pago Mantenimiento
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
                                    <button type="submit" className="btn btn-primary">
                                        Crear Pago
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

export default MaintenanceUpdate