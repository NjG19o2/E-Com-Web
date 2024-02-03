import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import itemContext from "../context/items/itemContext";
import alertContext from "../context/items/alertContext";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const context = useContext(itemContext);
  const { showAlert } = useContext(alertContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    showAlert("Logged Out successfully", "success");
  };
  const { mode} = context;



  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef();
  const handleSidebar = (event) => {
    if (!sidebarRef.current || sidebarRef.current.contains(event.target)) {
      // Clicked inside the sidebar, do nothing
      return;
    }
    setIsSidebarVisible(false);
 };

 useEffect(() => {
    // Add the event listener when the sidebar is opened
    if (isSidebarVisible) {
      document.addEventListener('mousedown', handleSidebar);
    }

    // Remove the event listener when the sidebar is closed or the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleSidebar);
    };
 }, [isSidebarVisible]);

  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navber-${mode} bg-${mode} `}>
        
          <div className="container-fluid">
            <Link
              className={`navbar-brand text-${
                mode === "light" ? "dark" : "light"
              }`}
              to="/"
            >
              E-Com-Web
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link active text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              {!localStorage.getItem("token") ? (
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-primary mx-1"
                    type="submit"
                  >
                    Search
                  </button>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/login"
                    role="button"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/signup"
                    role="button"
                  >
                    SignUp
                  </Link>
                </form>
              ) : (
                <button onClick={handleLogout} className="btn btn-primary mx-1">
                  LogOut
                </button>
              )}
              
            <div ref={sidebarRef}>
          {isSidebarVisible && <Sidebar />}
        </div>
        <i
          className="fa-solid fa-user"
          onClick={() => setIsSidebarVisible(true)}
        ></i>
            </div>
          </div>
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
