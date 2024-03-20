import React, { Component } from 'react';
import "../css/Login.css";
import { Navigate } from 'react-router-dom';

const initialState = {
  email: "",     
  password: "",
  message:"Please Login"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  fetchData = async () => {
    const { email, password } = this.state;
    try {
     await fetch("http://localhost:8080/admin/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      }).then((res)=>res.json()).then((res)=>{
        localStorage.setItem('token', res.token); 
        localStorage.setItem('isAuth', true); 
        this.setState({ message: res.message });
      })
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await this.fetchData();
    this.setState(initialState);
  }

  render() {
    const token = localStorage.getItem("token");

    if (token) {
        alert("Logged In Successfully")
      return <Navigate to="/" />;
    
   }else{
    return (
        <div className='LoginDiv'>
          <h3>{token?"LoggedIn Successfully":this.state.message}</h3>
          <form action="" className='loginform' onSubmit={this.handleSubmit}>
            <label htmlFor="">email</label>
            <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      );
   }
  }
}

export default Login;


