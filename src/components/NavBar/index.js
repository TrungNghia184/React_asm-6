import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, NavLink, useNavigate } from "react-router-dom";

import "./index.scss"
export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onLogout() {
    localStorage.setItem("token", false)
    navigate('/login');
  }
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink className="navbar__links" to="/" end>
          Home
        </NavLink>
        <NavLink className="navbar__links" to="/cart" end>
          Cart
        </NavLink>
        <NavLink className="navbar__links" to="/login" end>
          Login
        </NavLink>
        <NavLink className="navbar__links" to="/signup" end>
          SignUp
        </NavLink>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </div>
  );
}
