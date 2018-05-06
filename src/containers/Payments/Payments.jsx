import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
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
                label:"calle"
            },
            {
                type:"text",
                value: '',
                label:"numero"
            },
            {
                type:"text",
                value:'',
                label:"Nombre de quien pago"
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
               
                <form className="col-sm-5" action="">
             
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
                        submit
                    </button>
                    
                </form>  
                                         
            </div>
        )
    }
}

export default Payments