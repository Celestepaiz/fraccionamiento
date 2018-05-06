import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
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
        
        ]                
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
                 <Navbar/>
                 <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Registrar Nuevo Usuario
                                </div>
                 
                                <form className="form-group card-body" action="">
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