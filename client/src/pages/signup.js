import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import '../styles/nav.css';
import '../styles/footer.css';
import Signupimage from '../images/signup.png';

function signup() {

  const initialValues = {
    username: "",
    email:"",
    password: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/register", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="Signup">
      <header className="header"/> 
      <div className="container mt-5 ">
        <div className="col-6 align-self-center">
          <h1>Okay,Lets Register</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
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
                  <div className="col">
                  <Field className="form-control"
                  type = "password"
                  autocomplete="off"
                  id="password"
                  name="password"
                />
                  </div>
                  {/* <div class="col">
                            <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Last name"/>
                        </div> */}
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
              <div className="col pl-3 pt-5">
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
          <img src= {Signupimage} className="rounded float-start img-fluid" alt="Signupimage"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
