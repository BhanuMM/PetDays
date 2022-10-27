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
import Swal from 'sweetalert2';

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
    formData.append("file", image );
    formData.append("idhid", location.state );
    
    fetch("http://localhost:3001/service/uploadphoto",{ method : "post", body: formData} ).then((res) => res.text()).then((resBody)=> {
      console.log(resBody)
      
   
  });
  navigate("/adpayment",{state: location.state}); 
}
const sendImageonly = (event) => {
  let formData = new FormData();
  formData.append("file", image );
  formData.append("idhid", location.state );
  
  fetch("http://localhost:3001/service/uploadphoto",{ method : "post", body: formData} ).then((res) => res.text()).then((resBody)=> {
    console.log(resBody)
    
 
});
Swal.fire(
  'Saved!',
  'Advertiesment has been Saved.',
  'success'
  )
navigate("/spdashboard"); 
}
const cancelad = (event) => {
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

    
    axios.delete("http://localhost:3001/service/deletead/"+location.state).then((response) => {
      if (response.data.error) {
      alert(response.data.error);
      }  else{
        Swal.fire(
          'Canceled!',
          'Advertiesment has been canceled.',
          'success'
          )
          navigate("/spdashboard"); 
      }
    });
   
      
    
      }});
}

  return (
    <div>
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
            <h1 class="h2 mb-0 ls-tight">Add Advertisment Image </h1>
              <hr />
              <br />
              <div className="row">
                <main class="py-6 bg-surface-secondary">
					
                <div className="App">
      <form>
      {/* <input type="hidden" value={25} name="hiddenid" id="hiddenid" /> */}
        <input type="file" onChange={fileOnChange} required/>
        <br />
        <br /><br />
        <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#266305",borderColor: "#266305", width:300}}
                            onClick ={sendImage}
                          >
                            Proceed to Payment
                          </button>
                          <br /><br />
                         
      </form>
      <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            onClick ={sendImageonly}
                            style={{ backgroundColor: "#dd7313",borderColor: "#dd7313", width:300 }}
                          >
                            Pay Later
                          </button>
                          <br /><br />
                          <button
                            className="register.loginbuttonsize btn btn-success ml-3"
                            type="submit"
                            onClick ={cancelad}
                            style={{ backgroundColor: "#a10000" ,borderColor: "#a10000", width:300  }}
                          >
                            Cancel
                          </button>
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
