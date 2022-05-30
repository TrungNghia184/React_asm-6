import * as Yup from "yup";
import { HomePage } from "./Components/HomePage";
import PageNotFound from "./Components/pageNotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  NavLink,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import PrivateRoute from "./Components/privateRoute/PrivateRoute";
import AuthRoute from "./Components/authRoute/AuthRoute";
import LoginPage from "./Components/loginPage";
import "./App.css";
import SignUp from "./Components/signUp";
export default function App() {
  const navigate = useNavigate();
  const adminUser = {
    username: "admin",
    password: "admin",
  };
  localStorage.setItem("adminUser", JSON.stringify(adminUser));
  console.log(JSON.parse(localStorage.getItem("adminUser")));
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink className="links" to="/" end>
          Home
        </NavLink>
        <NavLink className="links" to="/login" end>
          Login
        </NavLink>
        <NavLink className="links" to="/signup" end>
          SignUp
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <button className="logout-button"
                onClick={() => {
                  localStorage.setItem("token", false);
                  console.log(typeof localStorage.getItem("token"));
                  navigate("/login");
                }}
              >
                Logout
              </button>
              <HomePage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
