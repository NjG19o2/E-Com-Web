import React, { useContext } from "react";
import itemContext from "../context/items/itemContext";
const Footer = () => {
  const context =useContext(itemContext);
  const {mode}=context;
  return (
    <>
    <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        
      </a>
      <p>OFFLINE STORE</p>
      <a href="#">Find Stores Near Me</a>
      <p class="text-body-secondary" style={{marginTop:"20px"}}>© 2024</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>GET TO KNOW US</h5>
      <ul class="nav flex-column">
        
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQ's</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Blogs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>TRACK OR RETURN/EXCHANGE ORDER</h5>
      <ul class="nav flex-column">
        
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">TRACK ORDER</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">PLACE RETURN/EXCHANGE REQUEST</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">RETURNS/EXCHANGE POLICY</a></li>
        
      </ul>
    </div>

    <div class="col mb-3">
      <h5>CUSTOMER CARE</h5>
      <ul class="nav flex-column">
       
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Timings: 10 AM - 7 PM (Mon - Sat)</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Whatsapp</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Instagram</a></li>
      
      </ul>
    </div>
  </footer>
</div>
   </>
  );
};

export default Footer;
