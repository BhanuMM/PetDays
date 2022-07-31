import React from "react";
import { useNavigate  } from "react-router-dom";
import { Formik, Form, Field ,ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from 'yup';

import '../styles/nav.css';
import '../styles/footer.css';
import Signupimage from '../images/signup.png';

function signup() {

  const initialValues = {
    username: "",
    email:"",
    password: "",
    confirmpassword: "",
  };

  const Schema = Yup.object().shape({
    email: Yup.string().email('Not a proper email address'),
    password: Yup.string().required("This field is required"),
    confirmpassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords does not match"
      )
    })
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/register", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate('/signin');
      }
    });
  };

  return (
    <div className="Signup">
      <header className="header"/> 
      <div className="container mt-5 ">
        <div className="col-6 align-self-center">
          <h1>Okay, Let's Register !</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={Schema}
            >
              <Form>
              <div className="mb-3">
                <label  className="form-label">
                  User Name
                </label>
                <div className="row">
                  <div className="col">
                <Field className="form-control"
                  id="username"
                  autocomplete="off"
                  name="username"
                  placeholder="Wolf"
                />
                   
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <div className="col">
                <ErrorMessage name="email" component="span" />
                </div>
                <Field className="form-control"
                  id="email"
                  autocomplete="off"
                  name="email"
                  placeholder="wolf@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                
                <div className="row">
                <ErrorMessage name="password" component="span" />
                  <div className="col">
                  <Field className="form-control"
                  type = "password"
                  autocomplete="off"
                  id="password"
                  name="password"
                />
                  </div>
                  <div id="passwordHelpBlock" class="form-text">
                    Your password must be 5-12 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                  {/* <div class="col">
                            <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Last name"/>
                        </div> */}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Confirm Password
                </label>
                
                <div className="row">
                <ErrorMessage name="confirmpassword" component="span" />
                  <div className="col">
                  <Field className="form-control"
                  type = "password"
                  autocomplete="off"
                  id="confirmpassword"
                  name="confirmpassword"
                />
                  </div>
                </div>
              </div>

              {/* <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">Province</label>
                    <select className="form-select" aria-label="Disabled select example">
                        <option selected>Select From Here</option>
                        <option value="1">North</option>
                        <option value="2">Southern</option>
                        <option value="3">Western</option>
                        <option value="4">Eastern</option>
                        <option value="5">North Western</option>
                        <option value="6">Central</option>
                        <option value="7">Uwa</option>
                        <option value="8">Sabaragamuwa</option>
                        <option value="9">North Western</option>
                    </select>
                  </div> */}
              <div className="col pl-1 pt-3">
                <button
                  type="submit"
                  className="btn btn-warning start-50 end-50"
                >
                  Register
                </button>
              </div>
              </Form>
            </Formik>
          </div>

          <div className="col-6">
          <img src= {Signupimage}  alt="Signupimage"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
