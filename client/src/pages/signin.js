import React from 'react';
import { useNavigate  } from "react-router-dom";
import { Formik, Form, Field ,ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from 'yup';

import '../styles/nav.css';
import '../styles/footer.css';
import Signinimage from '../images/signin.png';


function signin() {
  const initialValues = {
    email:"",
    password: "",
  };

  const Schema = Yup.object().shape({
    email: Yup.string().email('Not a proper email address'),
    password: Yup.string().required("This field is required"),
   
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate('/admin');
      }
    });
  };

  return (
    <div className='Signin'>
      <header className="header"/> 
      <div className="Signinform">
         <div className="container mt-5">
            <div className="row ">
              
              <div className="col-6 mr-5">
              <img src={Signinimage}   className="mr-5" alt="signin"/>
              </div>
              <div className="col-6  mt-5 mr-5 ">
              <h1 className=" mt-5">Welcome To Pet Days</h1>
              <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={Schema}
            >
              <Form>
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
                </div>
              </div>
              <div className="col pl-3 pb-5">
                  <button
                  type="submit"
                  className="btn btn-warning start-50 end-50"
                >
                  Login
                </button>
                  </div>
              </Form>
            </Formik>
               
                  
                  
            
              </div>
              
              
            </div>
          </div>
      </div>

    </div>
  )
}

export default signin