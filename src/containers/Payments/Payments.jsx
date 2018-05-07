import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

class  Payments extends Component{
    state = {
        controls: [
            {                
                type:"text",
                value: '',
                label: 'Folio'               
            },
            {
                type:"date",
                value:'',
                label: 'Fecha de mantenimiento' 
            },
            {
                type:"text",
                value: '',
                label:"Calle"
            },
            {
                type:"text",
                value: '',
                label:"Numero"
            },
            {
                type:"text",
                value:'',
                label:"Nombre de quien pago"
            }
        ],
        error: null
    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            folio: this.state.controls[0].value,
            fecha_mantenimiento: this.state.controls[1].value,
            calle: this.state.controls[2].value,
            numero: this.state.controls[3].value,
            nombre: this.state.controls[4].value
        }

        axios.post('http://localhost:3000/api/payments',data)
            .then((response) => {
                this.props.history.replace('/all-payments')
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
                                    Pagos
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

export default Payments