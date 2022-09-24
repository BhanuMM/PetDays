import React, { useState, useContext }from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
import * as Yup from "yup";
import signin from "../images/login.png";
import Bgimage from "../images/bkimage.jpg";
import name from "../images/name.png";
import "../styles/login.css";

function login() {
  // const { setAuthState } = useContext(AuthContext);
  const setAuthState  = useContext(AuthContext)

  const initialValues = {
    email: "",
    password: "",
  };

  const Schema = Yup.object().shape({
    email: Yup.string().email("Not a proper email address"),
    password: Yup.string().required("This field is required"),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data.token);
        // setAuthState({
        //   username: response.data.username,
        //   id: response.data.id,
        //   status: true,
        // });

        if (response.data.role === "admin") navigate("/admindashboard");
        else if (response.data.role === "service") navigate("/serviceproviderdashboard");
        else if (response.data.role === "moderator") navigate("/moderatordashboard");
        else if (response.data.role === "user") navigate("/index");
        else navigate("/signin");
      }
    });
  };
  return (
    <div
      className="Login login-bgimagesize"
      style={{
        backgroundImage: `url(${Bgimage})`,
      }}
    >
      <section className="vh-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 ">
              <div
                className="card login-cardsize flex-center login-cardmargins"
                border-radius="2rem; "
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block text-center">
                  <a  href="index"> <img
                      src={signin}
                      alt="login form"
                      className="img-fluid mt-5 pt-2 login-imagesize "
                      border-radius="1rem 0 0 1rem;"
                    /></a>
                    <div className="mt-3">
                      <h5 className="text-center">Welcome to </h5>
                      <img
                        src={name}
                        className="rounded float-start img-fluid login-nameimg"
                        alt="dog"
                      />
                      {/* <h2 className='text-center login.caption'>PET DAYS</h2> */}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={Schema}
                      >
                        <Form>
                          <h3
                            className="fw-normal mb-3 pb-3 text-center text-bold login.caption"
                            letter-spacing="1px;"
                          >
                            LOGIN
                          </h3>

                          <div class="form-outline mb-4">
                            <label className="form-label">Email</label>
                            <div className="col">
                              <ErrorMessage name="email" className="registererror" component="span" />
                            </div>
                            <Field
                              className="form-control"
                              id="email"
                              autocomplete="off"
                              name="email"
                              placeholder="wolf@gmail.com"
                            />
                          </div>

                          <div class="form-outline mb-4">
                            <label className="form-label">Password</label>

                            <div className="row">
                              <ErrorMessage name="password" className="registererror" component="span" />
                              <div className="col">
                                <Field
                                  className="form-control"
                                  type="password"
                                  autocomplete="off"
                                  id="password"
                                  name="password"
                                />
                              </div>
                            </div>
                          </div>
                          {/* 
                                        <div class="pt-1 mb-4">
                                            <button className ="btn btn-success btn-lg btn-block text-center" type="button">Login</button>
                                        </div> */}
                          <div className="row">
                            {/* <div className='col'>
                                            <input type="checkbox" id="topping" name="topping" value="" />Remembr Me
                                           
                                            </div> */}

                            <div className="col">
                              <a className="small text-muted  ml-5" href="#!">
                                Forgot password?
                              </a>
                              <br></br>
                              <p
                                className="pt-2 pb-lg-2"
                                letter-spacing="#393f81;"
                              >
                                Don't have an account?{" "}
                                <a href="registertype" color="#393f81;">
                                  Sign Up
                                </a>
                              </p>
                            </div>
                          </div>
                          <div class="pt-1 mb-4 mt-3 login.buttonmargin text-center">
                            <button
                              className="login.loginbuttonsize login.buttonmargin btn btn-success "
                              type="submit"
                            >
                              LOGIN{" "}
                            </button>
                          </div>

                          {/* <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a> */}
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default login;
