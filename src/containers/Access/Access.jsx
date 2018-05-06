import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
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
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Chips control de acceso
                                </div>
                 
                                <form className="card-body" action="">
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