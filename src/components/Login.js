import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import itemContext from "../context/items/itemContext";
import alretContext from "../context/items/alertContext";
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const context = useContext(itemContext);
  const context1=useContext(alretContext);

  const {mode}=context;
  const {showAlert}=context1;
  const [credentials,setCredentials]=useState({email:"",password:""})
  const navigate=useNavigate();


  const handleSubmit = async (e) => {
   e.preventDefault();
   const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
   });
   const json = await response.json();
   console.log(json);
   if (json.success) {
      localStorage.setItem('token', json.authToken);
      // Decode the JWT token to extract the userID
      const decodedToken = jwtDecode(json.authToken);
      const userID = decodedToken.user.id;
      if (userID) {
        localStorage.setItem('userID', String(userID)); // Set userID if it's defined
      } else {
        console.error('User ID is undefined');
        // Handle the case where user ID is not present
        // Optionally, show an alert to the user or set a default value
      }
      navigate("/");
      showAlert("Logged in successfully", "success");
   } else {
      console.log("else login error");
      showAlert("Invalid Details", "danger");
   }
  };
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className={`bg-${mode} text-${mode==='light'?'dark':'light'}`} style={{display:"flex"}} >
    <div className="container  " style={{ width: "40vw" }}>
      <form className="" onSubmit={handleSubmit}>
        <div className="my-4">
        <h1 className="h3 mb-3 fw-normal ">Please Login</h1>

        <div className="form-floating ">
          <input
            type="email"
            className={`form-control my-4 bg-${mode} text-${mode==='light'?'dark':'light'}`}
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
            className={`form-control my-4 bg-${mode} text-${mode==='light'?'dark':'light'}`}
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
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
