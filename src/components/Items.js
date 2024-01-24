import React, { useContext } from "react";
import { Link } from "react-router-dom";
import itemContext from "../context/items/itemContext";


const Items = (props) => {
  const context =useContext(itemContext);
  const {mode}=context;
  return (
    <div>
      <div className={`card bg-${mode} text-${mode==='light'?'dark':'light'}`}>
        <img src={props.image}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <Link to={props.link} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
