import React, { useContext } from "react";
import itemContext from "../context/items/itemContext";

const Contactus = () => {
  const context = useContext(itemContext);
  const {mode}=context;
  return (
    <div className={`bg-${mode} text-${mode==='light'?'dark':'light'}`}>
    <div className="container" >
      <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label my-4">
            Name
          </label>
          <input
            type="name"
            className={`form-control bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={`form-text text-${mode==='light'?'dark':'light'}`}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <p>Are you a Membar</p>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
           Yes
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Tell us about yourself
          </label>
          <textarea
            className={`form-control bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Tell your concern
          </label>
          <textarea
            className={`form-control bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={`form-check-input bg-${mode} text-${mode==='light'?'dark':'light'}`}
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
    
    
  );
};

export default Contactus;
