import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";

import "../styles/moderatordashboard.css";
import "../styles/petmart.css";
import "../styles/forum.css";

import "../styles/petcategories.css";
import "../styles/serviceproviderdashboard.css";
import Spsidebar from "../components/spsidebar";
import Navbarsp from "../components/navsp";
import "../styles/spdashboard.css";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";


function addpetmartadd() {
  const navigate = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState("");

  const fileOnChange = (event) => {
    setImage(event.target.files[0]);
  };

  const sendImage = (event) => {
    let formData = new FormData();
    formData.append("file", image);
    
    fetch("http://localhost:3001/service/uploadphoto",{ method : "post", body: formData} ).then((res) => res.text()).then((resBody)=> {
      console.log(resBody)
      
    // axios.post("http://localhost:3001/service/uploadphoto",{ method : "post", body: formData} ).then((response) => {
    //   if (response.data.error) {
    //     alert(response.data.error);
    //   } else {
    //     navigate("/spdashboard");
    //   }
    // });
  });
  navigate("/spdashboard"); 
}
  return (
    <div class="container-fluid">
      <Navbarsp />
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <div className="">
          <Spsidebar />
        </div>
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <br />
          <br />
          <br />
          <br />
          <br />
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
            <h1 class="h2 mb-0 ls-tight">Add Advertisment Image {location.state}</h1>
              <hr />
              <br />
              <div className="row">
                <main class="py-6 bg-surface-secondary">
					
                <div className="App">
      <form>
        
        <input type="file" onChange={fileOnChange} />
        <br />
        <br /><br />
        <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#266305" }}
                            onClick ={sendImage}
                          >
                            Proceed to Payment
                          </button>
                          <br /><br />
                          <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#dd7313" }}
                          >
                            Skip
                          </button>
                          <br /><br />
                          <button
                            className="register.loginbuttonsize btn btn-success ml-3"
                            type="submit"
                            style={{ backgroundColor: "#a10000" }}
                          >
                            Cancel
                          </button>
      </form>
    </div>


                
                </main>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default addpetmartadd;
