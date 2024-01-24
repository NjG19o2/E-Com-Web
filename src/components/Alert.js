import React, { useContext } from "react";
import alretContext from "../context/items/alertContext";
import itemContext from "../context/items/itemContext";

const Alert = () => {
  const context = useContext(alretContext);
  const { alert } = context;
  const context1 =useContext(itemContext);
  const {mode}=context1;
  // const capatalize = (word) => {
  //   if (word==="danger") {
  //     word="error";
  //   }
  //   // const lower = word.toLowerCase();
  //   // return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
 
  return (
    <div style={{height:'50px'}} className={`bg-${mode}`}>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{alert.type}</strong> : {alert.msg}
          {/* <strong>{capatalize(alert.type)}</strong> : {alert.msg} */}
        </div>
      )}
    </div>
  );
};

export default Alert;
