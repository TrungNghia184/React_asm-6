import {
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { setGlobalLoading } from "../../redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const PrivateRoute = (props) => {
  const dispatch = useDispatch();
  if (localStorage.getItem('token') === 'false') {
    dispatch(setGlobalLoading(false))
    return <Navigate to="/login" replace />;
  } 
    return props.children;
}
export default PrivateRoute;