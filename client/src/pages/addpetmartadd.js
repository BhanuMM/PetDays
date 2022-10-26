import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
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
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    role : "",
    status: false,
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/authuser", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            role: response.data.role,
            status: true,
          });
          console.log(response.data.role);
        }
      });
  }, []);
  const [selected, setSelected] = React.useState("");
  

  const initialValues = {
    adTitle : "",
    adDescr : "",
    adImage : "",
    adPrice : "",
    adContact : "",
    adEmail : "",
    adAddress : "",
    adType:"",
    adProvince :"",
    adDistrict : "",
    userId : authState.id
    
    }
    
  
   

    const Schema = Yup.object().shape({

      adTitle: Yup.string()
      .matches(/^[A-Za-z0-9 ]*$/,"Please enter valid title")
      .required("Please enter title"),

      adPrice: Yup.string()
      .matches(/^[0-9]*$/,"please enter valied price"),

      adImage : "",

      // adProvince :Yup.string()
      //                .required("please select province"),
      adDistrict :Yup.string()
      .required("please select district"),
                  

      adContact: Yup.string()
                    .matches(/^[0-9]{10}$/,"please enter valied contact number"),

      adEmail:Yup.string().email("please enter valied email"),
      adAddress: Yup.string(),
  
  	
    });
   
    
  
  
     
    const changeSelectOptionHandler = (event) => {
      setSelected(event.target.value);
      // setprovinceselected(event.target.value);
      
      
    };
    
  
    const central = [
      "Kandy", "Matale", "Nuwara Eliya"
    ];
    const north = ["Anuradhapura", "Polonnaruwa"];
    const eastern = ["Ampara", "Batticaloa", "Trincomalee"];
    const northern =["Jaffna","Kilinochchi","Mannar","Vavuniya","Mullativu"];
    const nwestern = ["Kurunegala","Puttalam"];
    const southern =["Galle","Matara","Hambantota"];
    const uva =["Badulla","Monaragala"];
    
    let type = null;
    
    
    let options = null;
    // let optionsprovince = null;
 
    if (selected === "Central") {
      type = central;
    } else if (selected === "North Central") {
      type = north;
    } else if (selected === "Eastern") {
      type = eastern;
    }
   else if (selected === "Northern") {
    type = northern;
  }
  else if (selected === "North Western") {
    type = nwestern;
  }
  else if (selected === "Southern") {
    type = southern;
  }
  else if (selected === "Uva") {
    type = uva;
  }
    
   
    if (type) {
      options = type.map((el) => <option key={el} value={el}>{el}</option>);
      // optionsprovince =  <option value= {selected}>{selected}</option>;
    }
    

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/service/publishad", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/addpetmartimages",{state: response.data});
      }

    });
    
  };

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
              <h1 class="h2 mb-0 ls-tight">Post New Advertisment</h1>
             
              
              <nav aria-label="breadcrumb">
										<ol class="breadcrumb pt-3">
											<li class="breadcrumb-item">
												<a href="/spdashboard" className="header-topic">
													Dashboard /
												</a>
												<a href="/addpetmartadd" className="header-topic">
												Create New Advertisment
												</a>
											</li>
										</ol>
									</nav>
                  <hr></hr>
            
              <br />
              <div className="row">
                <main class="py-6 bg-surface-secondary">
					
                  <Formik 
                  enableReinitialize={true}
                  initialValues={initialValues} 
                  onSubmit={onSubmit}
                  validationSchema={Schema}
                  
                
                  
                  >
                    <Form class="row g-3" style={{ paddingLeft: 200 }}>
										<div class="col-10">
                      <label className="form-label">
                          Advertiesment Title
                        </label>
                        <div className="col">
                             				 <ErrorMessage name="adTitle" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adTitle"
                          autocomplete="off"
                          name="adTitle"
                          placeholder=""
                        />
										</div>
                    
										<div class="col-10">
                      <label className="form-label">Advertiesment Description</label>
                      <div className="col">
                             				 <ErrorMessage name="adDescr" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adDescr"
                          autocomplete="off"
                          name="adDescr"
                          placeholder=""
                          component="textarea"
                        />
										</div>

                    <div class="col-10">
                      <label className="form-label">Price</label>
                      <div className="col">
                             				 <ErrorMessage name="adPrice" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adPrice"
                          autocomplete="off"
                          name="adPrice"
                          placeholder=""
                        />
										</div>
                    <div class="col-10">
                      <label className="form-label">Ad Type</label>
                      
                      <Field as="select" name="adType" id="adType" className="form-select">
												<option value="Grooming">Grooming</option>
												<option value="Day Care">Day Care</option>
												<option value="Walking">Walking</option>
												<option value="Other">Other</option>
											</Field>
										</div>
										
										<div class="row g-3">
											<div class="col-5">
                        <label className="form-label">Contact Number </label>
                        <div className="col">
                             				 <ErrorMessage name="adContact" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adContact"
                          autocomplete="off"
                          name="adContact"
                          placeholder=""
                        />
											</div>
											<div class="col-5">
                        <label className="form-label">Email</label>
                        <div className="col">
                             				 <ErrorMessage name="adEmail" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adEmail"
                          autocomplete="off"
                          name="adEmail"
                          placeholder=""
                        />
											</div>
										</div>

                    <div class="col-10">
                      <label className="form-label">Address</label>
                      <div className="col">
                             				 <ErrorMessage name="adAddress" className="errormesage" component="span" />
                            				</div>
                        <Field
                          className="form-control"
                          id="adAddress"
                          autocomplete="off"
                          name="adAddress"
                          placeholder=""
                        />
                        
										</div>
										<div class="row g-3">
                    <div class="col-5">
                   
                      <label className="form-label">Province</label>
                      <div className="col">
                        <ErrorMessage name="adProvince" className="errormesage" component="span" />
                      </div>
                     
                       <select onChange={changeSelectOptionHandler}  className="form-select" >
                       <option>Select a Province</option>
                        <option>Central</option>
                       <option>North Central</option>
                       <option>Eastern</option>
                        <option>Northern</option>
                         <option>North Western</option>
                        <option>Southern</option>
                        <option>Uva</option>
          </select>
											</div>
											<div class="col-5">
                      <label className="form-label">district</label>
                      <div className="col">
                             				 <ErrorMessage name="adDistrict" className="errormesage" component="span" />
                            				</div>

                           
                      <Field as ="select" name="adDistrict" className="form-select" onchange="byprovince">
                      <option>Select a District</option>
                      {
              
              options
            }
                        

                      </Field>
                    
											</div>
										</div>
											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													{" "}

                          <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#205375", borderColor:"#205375"}}
                          >
                            Next
                          </button>

                          <Button
                            variant="contained"
                            component="label"
                            sx={{ margin: 1 }}
                            style={{backgroundColor: "#F66B0E", borderColor:"#F66B0E"}}
                          >
                            Cancel
                          </Button>

													
												</div>
											</div>
										</Form>
                   
                  </Formik>
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
