import React from 'react';
import './sidebar.css'; // Make sure to import your CSS file

const HelpCenter = () => {
 return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Customer Service</h2>
      <h4>Welcome to Amazon Customer Service</h4>
      <h7>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</h7>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">A delivery, order or return</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Prime</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Payment, charges or gift cards</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Address, security & privacy</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Memberships, subscriptions or communications</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Accessibility</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Something else</h4>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="header-box">
            <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Login & password</h4>
          </div>
        </div>
      </div>
    </div>
 );
};

export default HelpCenter;