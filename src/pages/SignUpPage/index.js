import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.scss";
import {
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([{
    username: 'admin',
    password: 'admin',
  }]);
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "USername must have more than 2 characters!")
        .max(15, "Username must have less than 16 characters!")
        .label("Full Name")
        .matches(
          /^[a-z]+$/,
          "Your username must only contains lowercase letters"
        )
        .required(),
      password: Yup.string()
        .min(3, "Password must have more than 2 characters!")
        .max(15, "Password must have less than 16 characters!")
        .required()
        .matches(
          /(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]/,
          "Your password must contains atleast 1 lowercase and 1 number"
        ),
    }),
    onSubmit: function (values) {
      console.log(values.name, values.password);
      let newUser = { username: values.name, password: values.password };
      const checkForMatchedUser = function () {
        let matchedUser = usersList.filter(user => user.username === newUser.username)
        if (matchedUser.length > 0) {
          alert('This user already exists')
        } else {
          setUsersList(usersList => [...usersList, newUser]);
          alert('Register successful')
          console.log(usersList)
          setTimeout(() => {
            navigate('/login')
          }, 2000);
        }
      }
      checkForMatchedUser()
      
    },
  });
  useEffect(() => {
    localStorage.setItem("listUsers", JSON.stringify(usersList));
    console.log(JSON.parse(localStorage.getItem("listUsers")))
  }, [usersList]);
  return (
    <div>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit} className="form">
          <h1>Register</h1>
          <div className="form-inputs">
            <label for="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`block w-full rounded border py-1 px-2 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-400">{formik.errors.name}</span>
            )}
          </div>
          <div className="form-inputs">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`block w-full rounded border py-1 px-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-400"
                  : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-400">{formik.errors.password}</span>
            )}
          </div>
          <div className="button-container">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
