import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        if (this.state.firstName && this.state.lastName && this.state.password && this.state.gender)
        {
            alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
            console.log(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                password: '',
                gender: "",
            })
            event.preventDefault();
            this.props.history.push("/login");
        }
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label >FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Role :</label><select className="btn btn-warning m-2" onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Role</option>
                        <option value="male">Host</option>
                        <option value="female">Hosteler</option>
                    </select><br />
                    <input className="btn btn-primary m-2" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Register