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

  //   const Schema = Yup.object().shape({
  // 	email: Yup.string().email("Not a proper email address"),
  // 	password: Yup.string()
  // 	  .min(5)
  // 	  .max(12)
  // 	  .required("This field is required")
  // 	  .matches(
  // 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
  // 		"Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
  // 	  ),
  // 	confirmpassword: Yup.string().when("password", {
  // 	  is: (val) => (val && val.length > 0 ? true : false),
  // 	  then: Yup.string().oneOf(
  // 		[Yup.ref("password")],
  // 		"Passwords does not match"
  // 	  ),
  // 	}),
  //   });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/service/publishad", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/addpetmartimages",{state: response.data});
      }
    });
    console.log(data);
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
                    <Form>
                      {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
                > */}
                      {/* <TextField id="ad-name" label="Name of advertiesment" /><br/>
                    <TextField id="sp-name" label="Name of supplier"/>
                    <TextField id="descrip" label="Description"/>
                    <TextField id="Price" label="Price Rs:"/>
                    <TextField id="image" label="Image (Change the input type)"/>
                    <TextField id="contact" label="Contact Number"/>
                    <TextField id="address" label="Address"/>
                    <TextField id="email" label="Email"/>
                    <TextField id="fb" label="Facebook"/> */}
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
                      {/* <input type="text" id="fname" name="fname"></input> */}
                      {/* <input id="file" name="file" type="file" /> */}
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
                      {/* </Box> */}

                      <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6 mb-5 mt-5">
                          {" "}
                          {/* <Button variant="contained" component="label" sx={{margin:1}}  style={{backgroundColor: '#F66B0E'}}>
                           Submit
                        </Button> */}
                          <button
                            className="register.loginbuttonsize btn btn-success "
                            type="submit"
                            style={{ backgroundColor: "#266305" }}
                          >
                            Next
                          </button>
                          <Button
                            variant="contained"
                            component="label"
                            sx={{ margin: 1 }}
                            style={{ backgroundColor: "#e30b0b" }}
                          >
                            Cancel
                          </Button>
                        </div>
                        <div className="col-3"></div>
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
