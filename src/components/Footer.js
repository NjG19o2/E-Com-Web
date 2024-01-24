import React, { useContext } from "react";
import itemContext from "../context/items/itemContext";
const Footer = () => {
  const context =useContext(itemContext);
  const {mode}=context;
  return (
    <>
    <div className={`bg-${mode}`} style={{margin:" -24px 0 0 0"}}>
      <footer className="py-5 text-center text-body-secondary " style={{height:"40vh"}}>
        <p>
          2024-2025 E-Com-Web
        </p>
        <p className="mb-0">
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
   </>
  );
};

export default Footer;
