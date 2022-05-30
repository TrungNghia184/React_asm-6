import {
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import React from "react";
import LoginPage from "../loginPage";
import { HomePage } from "../../App";
import { CheckToken } from "../../App.js"

const PrivateRoute = (props) => {
  if (localStorage.getItem('token') === 'false') {
    return <Navigate to="/login" replace />;
  } 
    return props.children;
}
export default PrivateRoute;