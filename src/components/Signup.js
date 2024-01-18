import React from 'react'

const Signup = () => {
  return (
    <div className='container my-4'  style={{ width:"40vw"}}>
 <form>
    
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="name" className="form-control my-4" id="name" placeholder="name@example.com"/>
      <label for="name">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control my-4" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control my-4" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="cpassword" className="form-control my-4" id="cpassword" placeholder="Password"/>
      <label for="cpassword">Confirm Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2024–2025</p>
  </form>
    </div>
  )
}

export default Signup
