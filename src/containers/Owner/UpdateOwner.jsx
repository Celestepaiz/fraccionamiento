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
        error: null,
        userId: null      
    }

    componentDidMount(){
        axios.get(`http://10.50.65.22:3000/api/user/${this.props.location.state.id}`)
        .then((response) => {
            console.log(response)
           const data = response.data.user
           const updatedControls = [
               ...this.state.controls,                                    
           ]            
           updatedControls[0].value = data.nombre
           updatedControls[1].value = data.email
           updatedControls[2].value = data.calle
           updatedControls[3].value = data.numero
           
           this.setState({
               controls: updatedControls,
               userId: data._id
           })
           
        })
           
    }


    submitHandler = (event) => {
        event.preventDefault()
        const data = {
            _id: this.state.userId,
            nombre: this.state.controls[0].value,
            email: this.state.controls[1].value,
            calle: this.state.controls[2].value,
            numero: this.state.controls[3].value,
            rol: "propietario"
        }

        axios.put('http://10.50.65.22:3000/api/update-user',data)
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
                                    Actualizar Usuario
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
                                        Actualizar usuario
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