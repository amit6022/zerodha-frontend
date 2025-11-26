import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../utils";
import { ToastContainer } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  // function handleLogout(e) {
  //   e.preventDefault(); //---------------->>>>Agar button HTML form ke andar hai, to logout me preventDefault lagao
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("loggedInUser");
  //   handleSuccess("User Loggedout");
  //   setTimeout(() => {
  //     navigate("/login");
  //   }, 1000);
  // }

  // const jwtTokenExist = !!localStorage.getItem("token");

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <form className="d-flex" role="search"> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* {jwtTokenExist ? (
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : ( */}
            {/* <div> */}
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://zerodha-dashboard-cvi8.onrender.com" className="text-decoration-none">
                Stock Kite
              </a>
            </li>
            {/* </div> */}
            {/* )} */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
          <ToastContainer />
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
