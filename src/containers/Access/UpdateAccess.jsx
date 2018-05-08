import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
class  UpdateAccess extends Component{
    state = {
        controls: [
            {                
                type:"text",
                value: '',
                label: 'Modelo'                
            },
            {
                type:"text",
                value:'',
                label: 'Marca' 
            },
            {
                type:"text",
                value:'',
                label:'Placas'
            },
            {
                type:"text",
                value:'',
                label:'Codigo'
            }        
        ],
        error: null,
        usersData: [],
        userId: null
        
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/access/${this.props.location.state.codigo}`)
             .then((response) => {
                const data = response.data.registro[0]
                const updatedControls = [
                    ...this.state.controls,                                    
                ]            
                updatedControls[0].value = data.modelo
                updatedControls[1].value = data.marca
                updatedControls[2].value = data.placas
                updatedControls[3].value = data.codigo
                this.setState({
                    controls: updatedControls,
                    
                })
                
             })
        
    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            modelo: this.state.controls[0].value,
            marca: this.state.controls[1].value,
            placas: this.state.controls[2].value,
            codigo: this.state.controls[3].value,
            id_user: this.state.userId
        }

        axios.put('http://localhost:3000/api/access',data)
            .then((response) => {
                this.props.history.replace('/all-access')
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
                                    Actualizar Chip Control de Acceso
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
                                        Guardar
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

export default UpdateAccess