import React, { Component } from 'react';
import "../css/SignUp.css";
import { Navigate } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  phone: "",
  address: "",
  bloodgroup: "",
  branch: "",
  subject: "",
  rollno: "",
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employee:initialState,
        message:"Please Sign Up"
    }
  }

  fetchData = async () => {
    try {
     await fetch("http://localhost:8080/admin/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.employee)
      }).then((res)=>res.json()).then((res)=>{
        if(res.message=="User Registered Successfully"){
            this.setState({message:res.message})
        }
        console.log(res)
      })
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
        employee: {
          ...prevState.employee,
          [name]: value
        }
      }));
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword, phone, address, bloodgroup, branch, subject, rollno } = this.state.employee;
  
    const emptyFields = [];
    if (!name) emptyFields.push('Name');
    if (!email) emptyFields.push('Email');
    if (!password) emptyFields.push('Password');
    if (!confirmpassword) emptyFields.push('Confirm Password');
    if (!phone) emptyFields.push('Phone');
    if (!address) emptyFields.push('Address');
    if (!bloodgroup) emptyFields.push('Blood Group');
    if (!branch) emptyFields.push('Branch');
    if (!subject) emptyFields.push('Subject');
    if (!rollno) emptyFields.push('Roll No');
  
    if (emptyFields.length > 0) {
      alert(`The following fields are required: ${emptyFields.join(', ')}`);
      return;
    }
    await this.fetchData()
    this.setState(initialState);
  }

  render() {
    const token = localStorage.getItem("token");

    if (token) {
        alert("Logged In Successfully")
      return <Navigate to="/" />;
    
   }else{
    return (
      <div className='SignUpDiv'>
        <h3>{this.state.message}</h3>
        <form action="" className='signupform' onSubmit={this.handleSubmit}>
          <label htmlFor="">Name  <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
          <label htmlFor="">Email <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
          <label htmlFor="">Password <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
          <label htmlFor="">Confirm Password<label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="password" name='confirmpassword' value={this.state.confirmpassword} onChange={this.handleChange}/>
          <label htmlFor="">Phone <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="number" name='phone' value={this.state.phone} onChange={this.handleChange}/>
          <label htmlFor="">Address <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="text" name='address' value={this.state.address} onChange={this.handleChange}/>
          <label htmlFor="">Blood Group <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="text" name='bloodgroup' value={this.state.bloodgroup} onChange={this.handleChange}/>
          <label htmlFor="">Branch <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="text" name='branch' value={this.state.branch} onChange={this.handleChange}/>
          <label htmlFor="">Subject <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="text" name='subject' value={this.state.subject} onChange={this.handleChange}/>
          <label htmlFor="">Roll No <label htmlFor=""style={{color:"red"}}>*</label></label>
          <input  type="number" name='rollno' value={this.state.rollno} onChange={this.handleChange}/>
          <input  type="submit" />
        </form>
      </div>
    );
   }
  }
}

export default SignUp;
