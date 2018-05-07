import React, {Component} from 'react'
import Input from '../../components/UI/Input'
import Navbar from '../../components/Navbar/Navbar'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


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

    authHandler = (event) => {
        event.preventDefault()
        console.log(this.state.controls[0].value,this.state.controls[1].value)
        this.props.onAuth(this.state.controls[0].value,this.state.controls[1].value,true)
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
        let authRedirect = null 
        if(this.props.isAuthenticated) {
            authRedirect = ( <Redirect to='/profile'/>)
        }
        
        return(
            <div>
                {authRedirect}                
                <Navbar/>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6">
                            <div className="card mt-15">
                                <div className="card-header text-center">
                                    Iniciar Sesion
                                </div>
                 
                                <form onSubmit={this.authHandler} className="card-body">
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
                                    <button type="submit" className="btn btn-primary " >
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


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null,
        error: state.error    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email,password,isSignUp) => dispatch(actions.auth(email,password,isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)