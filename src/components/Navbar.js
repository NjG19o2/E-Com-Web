import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import itemContext from "../context/items/itemContext";
import Sidebar from "./Sidebar";


const Navbar = () => {
 const context = useContext(itemContext);
 const { mode } = context;

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
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleSidebar);
    }

    return () => {
      document.removeEventListener("mousedown", handleSidebar);
    };
 }, [isSidebarVisible]);


 return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} `}
        style={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${mode === "light" ? "dark" : "light"}`}
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
                 className={`nav-link active text-${mode === "light" ? "dark" : "light"}`}
                 aria-current="page"
                 to="/"
                 
                >
                 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 className={`nav-link text-${mode === "light" ? "dark" : "light"}`}
                 to="/about"
                >
                 About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 className={`nav-link text-${mode === "light" ? "dark" : "light"}`}
                 to="/contact"
                >
                 Contact Us
                </Link>
              </li>
            </ul>

            <form
              className="d-flex"
              role="search"
              style={{ position: "absolute", left: "30%", right: "30%" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary mx-1" type="submit">
                <i className="fa-solid fa-search"></i>
              </button>
            </form>

            <div ref={sidebarRef}>{isSidebarVisible && <Sidebar />}</div>
            <div
              className={`bg-${mode === "light" ? "gray" : "light"}`}
              style={{
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="fa-solid fa-user "
                onClick={() => setIsSidebarVisible(true)}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
 );
};

export default Navbar;