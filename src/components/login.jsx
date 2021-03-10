import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Register from './register';

class Login extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  };
  registerHandler = () => {
    //return <Redirect to="/register"/>
    const history = useHistory;
    this.props.history.push("/register")
   
  };
  loginHandler = () => {
    if (this.state.account.username && this.state.account.password)
    {
      console.log('login');
      this.props.history.push("/dashboard");
    }
  }
  validate = () => { 
    const errors = {};
    const { account } = this.state;
    if (this.state.account.username.trim() === '')
      errors.username = 'username is required';
    if (this.state.account.password.trim() === '')
      errors.password = 'password is required';
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = ({currentTarget: input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }
  //username = React.createRef();
  handleSubmit = e => { 
    e.preventDefault();

    const errors = this.validate();
    
    this.setState({ errors: errors || {}});
    if (errors) return;
    // call the server and redirects it to different page 
    //const username = this.username.current.value;
    console.log('submitted');
  };
  
  render() { 
    const { account, errors } = this.state;
    
    return (  <div>
      <h3 > LOGIN  </h3><h5>(if not registered please sign up)</h5>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input error={ errors.username}name="username" autoFocus value={account.username} onChange={this.handleChange} id="username" type="text" className="form-control" />
          {errors.username && <div className="alert alert-danger">{errors.username}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input error={errors.password} name="password" value={account.password} onChange={this.handleChange} type="text" className="form-control" />
          {errors.password && <div className="alert alert-danger">{errors.password}</div>}
        </div>

        <button className="btn btn-primary m-2" onClick={this.loginHandler}>Login</button>
        <button className="btn btn-warning m-2" onClick={this.registerHandler }>Sign up</button>
        </form>
    </div>);
  }
  
}
 
export default Login;