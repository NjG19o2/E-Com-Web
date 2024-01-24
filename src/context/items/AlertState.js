import React, { useState } from 'react'
import AlretContext from './alertContext'


const AlertState = (props) => {
    const [alert,setAlert]=useState();
    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        });
        setTimeout(()=>{
          setAlert(null);
        },1500);

    }
  return (
    <AlretContext.Provider value={{alert,showAlert}}> 
        {props.children}
    </AlretContext.Provider>
  )
}

export default AlertState