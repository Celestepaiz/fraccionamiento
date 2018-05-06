import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
class Login extends Component{
    state = {
        controls: [
            {                
                type:"email",
                value: '',
                label: 'email'                
            },
            {
                type:"password",
                value: '',
                label: 'password'                
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
                <br/>
                <br/>
                <br/>
                <br/>

                <form action="" className="form-inline justify-content-center">
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
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>                            
            </div>
        )
    }
}

export default Login