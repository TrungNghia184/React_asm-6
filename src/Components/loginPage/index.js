import { useFormik } from "formik";
import * as Yup from "yup";
import { Component } from "react";
import React, { useEffect, useState } from "react";
import "./index.css"
import {
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  function handleUserNameChange(e) {
    setUsername(e.target.value);
    console.log(username);
  }
  function checkAuthentication() {
    let usersList = JSON.parse(localStorage.getItem("listUsers"));
    console.log(usersList);
    let matchedUser = usersList.filter((user) => {
      if (user.username === username && user.password === password) {
        return user
      }   
    });
    if (matchedUser.length > 0) {
      localStorage.setItem('token', true);
      console.log(localStorage.getItem('token'))
      navigate('/')
    }
    console.log(matchedUser);
  }
  return (
    <div className="login-container">
      <label className="label" for="username">Username</label>
      <input className="input"
        type="text"
        id="username"
        onChange={handleUserNameChange}
        required
      />
      <label className="label" for="password">Password</label>
      <input className="input"
        type="password"
        id="password"
        onChange={handlePasswordChange}
        required
      />
      <button className="button" onClick={checkAuthentication}>Login</button>
    </div>
  );
}

