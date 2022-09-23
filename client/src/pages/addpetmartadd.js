import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
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
  const initialValues = {
	adTitle : "",
	adDescr : "",
  adImage : "",
	adPrice : "",
	adContact : "",
	adEmail : "",
	adAddress : "",
	adProvince : "",
	adDistrict : ""

  
  };

    // const Schema = Yup.object().shape({

    //   adTitle: Yup.string()
    //   .matches(/^[A-Za-z ]*$/,"Please enter valid name")
    //   .required(),

    //   adPrice: Yup.number(),
                  

    //   adContact: Yup.string()
    //                 .matches(/^[0-9]{10}$/),
    //   adEmail:Yup.string().email(),
    //   adAddress: Yup.string(),
  
  	
    // });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
              <hr />
              <br />
              <div className="row">
                <main class="py-6 bg-surface-secondary">
					
                  <Formik initialValues={initialValues} onSubmit={onSubmit}
                  
                  >
                    <Form class="row g-3" style={{ paddingLeft: 200 }}>
										<div class="col-10">
                      <label className="form-label">
                          Advertiesment Title
                        </label>
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
                        <Field
                          className="form-control"
                          id="adPrice"
                          autocomplete="off"
                          name="adPrice"
                          placeholder=""
                        />
										</div>
										
										<div class="row g-3">
											<div class="col-5">
                        <label className="form-label">Contact Number </label>
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
                      <Field as="select" name="adProvince" className="form-select">
                        <option value="Central Province">Central Province</option>
                        <option value="Eastern Province">Eastern Province </option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="Southern Province">Southern Province </option>
                        <option value="Western Province">Western Province</option>
                        <option value="North Western Province">North Western Province </option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="North Central Province">North Central Province </option>
                        <option value="Uva Province">Uva Province</option>
                      </Field>
											</div>
											<div class="col-5">
                      <label className="form-label">District</label>
                      <Field as="select" name="adDistrict" className="form-select">
                        <option value="red">Galle</option>
                        <option value="green">Matara</option>
                        <option value="blue">Hambantota</option>
                        <option value="blue">Colombo</option>
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

													{/* <button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E", borderColor:"#F66B0E"}}
													>
														Add Advertisment
													</button> */}
												</div>
											</div>
										</Form>
                    {/* <Form>
                      
                      <label className="form-label">
                        Advertiesment Title
                      </label>
                      <Field
                        className="form-control"
                        id="adTitle"
                        autocomplete="off"
                        name="adTitle"
                        placeholder=""
                      />
                      <label className="form-label">Advertiesment Description</label>
                      <Field
                        className="form-control"
                        id="adDescr"
                        autocomplete="off"
                        name="adDescr"
                        placeholder=""
                      />
                      <Field
                        className="form-control"
                        type="hidden"
                        id="adImage"
                        autocomplete="off"
                        name="adImage"
                        placeholder=""
                      />
                      <label className="form-label">Price</label>
                      <Field
                        className="form-control"
                        id="adPrice"
                        autocomplete="off"
                        name="adPrice"
                        placeholder=""
                      />
                     
                      <label className="form-label">Contact Number </label>
                      <Field
                        className="form-control"
                        id="adContact"
                        autocomplete="off"
                        name="adContact"
                        placeholder=""
                      />
                     
                      <label className="form-label">Email</label>
                      <Field
                        className="form-control"
                        id="adEmail"
                        autocomplete="off"
                        name="adEmail"
                        placeholder=""
                      />
                      <label className="form-label">Address</label>
                      <Field
                        className="form-control"
                        id="adAddress"
                        autocomplete="off"
                        name="adAddress"
                        placeholder=""
                      />
                      <label className="form-label">Province</label>
                      <Field as="select" name="adProvince" className="form-select">
             <option value="Central Province">Central Province</option>
             <option value="Eastern Province">Eastern Province </option>
             <option value="Northern Province">Northern Province</option>
             <option value="Southern Province">Southern Province </option>
             <option value="Western Province">Western Province</option>
             <option value="North Western Province">North Western Province </option>
             <option value="Northern Province">Northern Province</option>
             <option value="North Central Province">North Central Province </option>
             <option value="Uva Province">Uva Province</option>
           </Field>
                      <label className="form-label">District</label>
                      <Field as="select" name="adDistrict" className="form-select">
             <option value="red">Galle</option>
             <option value="green">Matara</option>
             <option value="blue">Hambantota</option>
             <option value="blue">Colombo</option>
           </Field>
                     

                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 mb-5 mt-5">
                          {" "}
                          
                          <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#266305" }}
                          >
                            Next
                          </button>
                          <button
                           className="register.loginbuttonsize btn btn-success "
                           type="cancel"
                           style={{ backgroundColor: "red" }}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className="col-3"></div>
                      </div>
                    </Form> */}
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
