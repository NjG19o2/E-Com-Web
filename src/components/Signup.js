import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
  const navigate = useNavigate();
  
  const hadleSubmit =async(e)=>{
    e.preventDefault();
    const {name,email,password}= credentials;
   
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        
      },
      
      body: JSON.stringify({name,email,password}), 
    });
    const json = await response.json()
    console.log(json)
    if (json.success){
      //save the token and redirect
      localStorage.setItem('token',json.authToken)
      navigate("/")
    }
    else{
      console.log("else error")
    }
   
  }
  const onchange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }



  return (
    <div className="container my-4" style={{ width: "40vw" }}>
      <form onSubmit={hadleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="name"
            className="form-control my-4"
            id="name"
            name="name"
            placeholder="name"
            onChange={onchange}
           
            
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control my-4"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={onchange}
            
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control my-4"
            id="password"
            name="password"
            placeholder="Password"
            minLength={5} required
            onChange={onchange}
           
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="cpassword"
            className="form-control my-4"
            id="cpassword"
            name="cpassword"
            placeholder="Password"
            minLength={5} required
            onChange={onchange}
            


          />
          <label htmlFor="cpassword">Confirm Password</label>
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
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
      </form>
    </div>
  );
};

export default Signup;
