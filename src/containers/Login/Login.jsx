import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
class Login extends Component{
    state = {
        controls: [
            {                
                type:"email",
                value: '',
                label: 'Email'                
            },
            {
                type:"password",
                value: '',
                label: 'Password'                
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
                                    Iniciar Sesion
                                </div>
                 
                                <form action="" className="card-body">
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
                                    <br/>
                                    <button type="submit" className="btn btn-primary ">
                                        Iniciar Sesion
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

export default Login