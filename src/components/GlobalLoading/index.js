import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Space, Spin } from "antd";
import { setGlobalLoading } from "../../redux/slices/globalSlice";
import "./index.scss"
export default function GlobalLoading() {
  const [loading, setLoading] = useState(false);
  const loadingState = useSelector((state) => state.GlobalReducer.loadingState);
  useEffect(() => {
    setLoading(loadingState);
  }, [loadingState]);
  return (
    <Spin className="spin" spinning={loading}>
    </Spin>
  );
}
