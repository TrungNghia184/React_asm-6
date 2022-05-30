import {
    BrowserRouter as Router,
    Navigate,
  } from "react-router-dom";
  
  import React from "react";
  const AuthRoute = (props) => {
    if (localStorage.getItem('token') !== 'false') {
      return <Navigate to="/" replace />;
    }
      return props.children;
  }
  export default AuthRoute; 
  