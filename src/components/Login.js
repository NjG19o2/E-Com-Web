import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials,setCredentials]=useState({email:"",password:""})
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", 
   
      headers: {
        "Content-Type": "application/json",
      
      },
   
      body: JSON.stringify({email:credentials.email,password:credentials.password}), 
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('token',json.authToken);
      navigate("/")
    }
    else{
      console.log("else login error")
    }

  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className="container my-4" style={{ width: "40vw" }}>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control my-4"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control my-4"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
      </form>
    </div>
  );
};

export default Login;
