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
import Swal from "sweetalert2";

function login() {
  // const { setAuthState } = useContext(AuthContext);
  const { setAuthState } = useContext(AuthContext);

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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.error,
          
          })
      } else {
        localStorage.setItem('accessToken', response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          role: response.data.role,
          status: true,
        });

        if (response.data.role === "admin") navigate("/admindashboard");
        else if (response.data.role === "service") navigate("/spdashboard");
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
                style={{ paddingLeft: 100}}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block text-center" style={{ paddingTop: 25}}>
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
                     
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ paddingLeft: 100,paddingTop:45}}>
                    <div className="card-body p-4 p-lg-5 text-black">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={Schema}
                      >
                        <Form >
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
                         
                          <div className="row">
                            

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
                                <a href="registertype" style={{color:'#205375'}}>
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
                            <a href="\index" role="button" aria-pressed="true" style={{color:'#205375'}} ><p>Back To Home</p></a>
                          </div>

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
