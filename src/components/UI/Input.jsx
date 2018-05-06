import React from "react"

const Input = (props) => (
    <div className="form-group">
    <label >{props.label}</label>
    <input type={props.type} value={props.value} onChange={props.changed} className="form-control"/>
    </div>   
)
export default Input
