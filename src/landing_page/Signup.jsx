import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupInfo((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupInfo);
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      //client side validation
      return handleError("name, email and password are required");
    }
    try {
      const url = "http://localhost:3002/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        window.location.href = "http://localhost:3001";
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
    setSignupInfo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="containerAuth">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter a name"
            id="name"
            name="name"
            value={signupInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter a email"
            id="email"
            name="email"
            value={signupInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter a password"
            id="password"
            name="password"
            value={signupInfo.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Signup;
