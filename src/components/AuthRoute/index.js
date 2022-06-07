import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { setGlobalLoading } from "../../redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
const AuthRoute = (props) => {
  const dispatch = useDispatch();
  if (localStorage.getItem("token") !== "false") {
    dispatch(setGlobalLoading(false));
    return <Navigate to="/" replace />;
  }
  return props.children;
};
export default AuthRoute;
