import React from "react";
import itemContext from "./itemContext";

const ItemState = () => {
  return <itemContext.Provider >
    {props.children}
    </itemContext.Provider>;
};

export default ItemState;
