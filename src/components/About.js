import React, { useContext } from "react";
import itemContext from "../context/items/itemContext";
const About = () => {
  const context =useContext(itemContext);
  const {mode}=context;
  return (
    <div className={`bg-${mode}`}>
      i am About
    </div>
  )
}

export default About
