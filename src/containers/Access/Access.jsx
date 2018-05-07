import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
class  Access extends Component{
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
        error: null
    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            modelo: this.state.controls[0].value,
            marca: this.state.controls[1].value,
            placas: this.state.controls[2].value,
            codigo: this.state.controls[3].value
        }

        axios.post('http://localhost:3000/api/access',data)
            .then((response) => {
                this.props.history.replace('/access')
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
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Chips control de acceso
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
                                        Crear Control de Acceso
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

export default Access