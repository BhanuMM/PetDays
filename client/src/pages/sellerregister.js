import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

import signin from "../images/login.png";
import Bgimage from "../images/bkimage.jpg";
import name from "../images/name.png";
import "../styles/register.css";

function register() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const Schema = Yup.object().shape({
    email: Yup.string().email("Not a proper email address"),
    password: Yup.string()
      .min(5)
      .max(12)
      .required("This field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmpassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords does not match"
      ),
    }),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/sellerregister", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/verifyemail");
      }
    });
  };

  return (
    <div
      className="Register"
      style={{
        backgroundImage: `url(${Bgimage})`,
      }}
    >
      <section className="vh-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 ">
              <div
                className="card register-cardsize flex-center register-cardmargins"
                border-radius="2rem; "
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={Schema}
                      >
                        <Form>
                          <h3
                            className="fw-normal mb-3 pb-3 text-center text-bold register.caption"
                            letter-spacing="1px;"
                          >
                            CREATE YOUR SELLER ACCOUNT
                          </h3>

                          <div class="form-outline mb-4">
                            {/* <label className="form-label" for="">User Name </label>
                                            <input type="text" id="form2Example17" className=" register-inputfieldwidth form-control form-control-lg" /> */}
                            <label className="form-label">User Name</label>
                            <div className="row">
                              <div className="col">
                                <Field
                                  className="form-control"
                                  id="username"
                                  autocomplete="off"
                                  name="username"
                                  placeholder="Wolf"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="form-outline mb-4">
                            {/* <label class="form-label" for="form2Example27">E-mail</label>
                                            <input type="email" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" />
                                            */}
                            <label className="form-label">Email</label>
                            <div className="col">
                              <ErrorMessage name="email" className="registererror" component="span" />
                            </div>
                            <Field
                              className="form-control"
                              id="email"
                              autocomplete="off"
                              name="uemail"
                              placeholder="wolf@gmail.com"
                            />
                          </div>
                          <div class="form-outline mb-4">
                            {/* <label class="form-label" for="form2Example27">Password</label>
                                            <input type="password" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" />
                                            */}
                            <label className="form-label">Password</label>

                            <div className="row">
                              <ErrorMessage
                                name="password"
                                className="registererror"
                                component="span"
                              />
                              <div className="col">
                                <Field
                                  className="form-control"
                                  type="password"
                                  autocomplete="off"
                                  id="password"
                                  name="password"
                                />
                              </div>
                              <div id="passwordHelpBlock" class="form-text infotext">
                                Your password must be 5-12 characters long, must
                                contain Uppercase and Lowercase letters ,numbers
                                and Special Case characters.
                              </div>
                              {/* <div class="col">
                            <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Last name"/>
                        </div> */}
                            </div>
                          </div>
                          <div class="form-outline mb-4">
                            {/* <label class="form-label" for="form2Example27">Confirm Password</label>
                                            <input type="password" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" /> */}
                            <label className="form-label">
                              Confirm Password
                            </label>

                            <div className="row">
                              <ErrorMessage
                              className="registererror"
                                name="confirmpassword"
                                component="span"
                              />
                              <div className="col">
                                <Field
                                  className="form-control"
                                  type="password"
                                  autocomplete="off"
                                  id="confirmpassword"
                                  name="confirmpassword"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <p className="pb-lg-2" >
                            Alredy have an account?{" "}
                            <a href="signin" color="#393f81;">
                              Sign In
                            </a>
                          </p>
                          <div class="pt-1 mb-4 mt-3 text-center">
                            <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit" 
                            >
                              REGISTER
                            </button>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 d-none d-md-block mt-5 text-center">
                    <img
                      src={signin}
                      alt="login form"
                      className="img-fluid mt-5 pt-5 register-imagesize"
                      border-radius="1rem 0 0 1rem;"
                    />
                    <div>
                      <h5 className="text-center">Welcome to </h5>
                      <img
                        src={name}
                        className="rounded float-start img-fluid login-nameimg"
                        alt="dog"
                      />
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

export default register;
