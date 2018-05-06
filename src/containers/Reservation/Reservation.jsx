import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
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
                                    Reservaciones
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