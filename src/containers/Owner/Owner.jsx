import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

class  Owner extends Component{
    state = {
        controls: [
            {                
                type:"text",
                value: '',
                label: 'Nombre'                
            },
            {
                type:"email",
                value:'',
                label: 'Email' 
            },
            {
                type:"password",
                value: '',
                label: 'Password'                
            },
            {
                type:"text",
                value:'',
                label:'Calle'
            },
            {
                type:"text",
                value:'',
                label:'Numero'
            }                    
        ],
        error: null            
    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            nombre: this.state.controls[0].value,
            email: this.state.controls[1].value,
            password: this.state.controls[2].value,
            calle: this.state.controls[3].value,
            numero: this.state.controls[4].value,
            rol: "propietario"
        }

        axios.post('http://localhost:5000/api/register',data)
            .then((response) => {
                this.props.history.replace('/all-users')
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

    render(){
        return(
            <div>
                 <Navbar auth={true}/>
                 <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Registrar Nuevo Usuario
                                </div>
                                {   
                                    this.state.error
                                    ? 
                                    <div class="alert alert-danger" role="alert">
                                        {this.state.error}
                                    </div>                                
                                    : null
                                }                                
                                <form className="form-group card-body" onSubmit={this.submitHandler}>
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
                                    <button type="submit" className="btn btn-primary btn-md">
                                        Crear usuario
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

export default Owner