import React, { useContext, useState } from "react";
import ItemContext from "./itemContext";



const ItemState = (props) => {
 

  
  const [mode,setMode]=useState(null)
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#38212d';  
      
     
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      

    }
  }
  return <ItemContext.Provider value={{mode,toggleMode}} >
    {props.children}
    </ItemContext.Provider>;
};

export default ItemState;
