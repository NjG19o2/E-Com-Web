import React, { useContext  } from "react";
import itemContext from "../context/items/itemContext";
import alertContext from "../context/items/alertContext";
import user from "../images/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import './styles.css'

const Sidebar = () => {
  const context = useContext(itemContext);
  const navigate = useNavigate();
  const { mode, toggleMode } = context;
  const { showAlert } = useContext(alertContext);


  const alertMode = () => {
    if (mode === "light") {
      showAlert("Dark mode enabled", "success");
    } else {
      showAlert("Light mode enabled", "success");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    showAlert("Logged Out successfully", "success");
  };
  return (
    <div  style={{ position: "absolute", top: "0", right: "0", width: "280px" }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 "
        style={{
          zIndex: "30",
          height: "100vh",
          width: "287px",
          position: "fixed",
          background: "#efecec",
        }}
      >
        
        
       

        {!localStorage.getItem("token") ? (
          <>
          <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Hello,Sign In</span>
        </a>
            <Link
              className="btn btn-primary mx-1 my-2"
              to="/login"
              role="button"
            >
              Login
            </Link>
            <Link
              className="btn btn-primary mx-1 my-2"
              to="/signup"
              role="button"
            >
              SignUp
            </Link>
          </>
        ) : (
          <>
          <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Hello,Customer</span>
        </a>
        <hr/>
           <Link
          to="/user"
          className="d-flex justify-content-center align-items-center link-body-emphasis text-decoration-none my-1"
        >
          <img
            src={user}
            alt=""
            width="50"
            height="50"
            className="rounded-circle me-2"
          />
        </Link>
        <div
          className="my-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <strong>user</strong>
        </div>
            <ul className="nav nav-pills flex-column mb-auto" style={{ listStyleType: 'none' }}>
              <li   style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
              <Link to="/orders" className="nav-link link-body-emphasis ">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="nav-link link-body-emphasis">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/coupons" className="nav-link link-body-emphasis">
                  Coupons
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="nav-link link-body-emphasis">
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link link-body-emphasis">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/helpcenter" className="nav-link link-body-emphasis">
                  Help Center
                </Link>
              </li>
            </ul>
            <hr />
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              } my-1`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  toggleMode();
                }}
                onChange={alertMode}
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
              >
                DarkMode
              </label>
            </div>

            <button onClick={handleLogout} className="btn btn-primary my-1">
              LogOut
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
