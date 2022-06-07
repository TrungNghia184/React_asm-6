import React from 'react'
import { setGlobalLoading } from "../../redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import "./index.css"
export default function PageNotFound() {
  const dispatch = useDispatch();
  dispatch(setGlobalLoading(false));
  return (
    <div className="page-not-found">404: PageNotFound</div>
  )
}
