import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Box from "@mui/material/Box";
import Spsidebar from "../components/spsidebar";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const bull = (
	<Box
		component="span"
		sx={{
			display: "inline-block",
			mx: "2px",
			transform: "scale(0.8)",
			maxHeight: "1000",
		}}
	>
		•
	</Box>
);

function speditad() {
	const [SingleAd, setSingleAd] = useState([]);
	const location = useLocation();
	const [selected, setSelected] = React.useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getadview/" + location.state)
			.then((response) => {
				setSingleAd(response.data);
				
			});
	}, []);

	const initialValues = {
		adId: SingleAd.adId,
		adTitle: SingleAd.adTitle,
		adDescr: SingleAd.adDescr,
		adPrice: SingleAd.adPrice,
		adType:SingleAd.adType,
		adContact: SingleAd.adContact,
		adEmail: SingleAd.adEmail,
		adAddress: SingleAd.adAddress,
		adProvince: SingleAd.adProvince,
		adDistrict: SingleAd.adDistrict,
        adStatus: SingleAd.adStatus,
		adDate: SingleAd.adDate,
		adTime: SingleAd.adTime,
	
	};
	

	const Schema = Yup.object().shape({

		adTitle: Yup.string()
		.matches(/^[A-Z a-z 0-9]*$/,"Please enter valid title")
		.required("Please enter title"),
  
		adPrice: Yup.string()
		.matches(/^[0-9]*$/,"please enter valied price"),
  
		adImage : "",
  
		// adProvince :Yup.string()
		// 			   .required("please select province"),
		adDistrict :Yup.string()
		.required("please select district"),
					
  
		adContact: Yup.string()
					  .matches(/^[0-9]{10}$/,"please enter valied contact number"),
  
		adEmail:Yup.string().email("please enter valied email"),
		adAddress: Yup.string(),
	
		
	  });
	  
     
	  const changeSelectOptionHandler = (event) => {
		setSelected(event.target.value);
		
		
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
	  }

	const navigate = useNavigate();

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/service/updatead", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					console.log(data);
					navigate("/spmyads");

				}
			});
	};

	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Spsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Update Advertiesment</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/spdashboard">Serviceprovider Dashboard /</a>
													<a href="/spviewad">Advertisments /</a>
													<a href="/speditad">Edit Advertisments</a>
												</li>
											</ol>
										</nav>

										<br />
									</div>
								</div>
							</div>
						</div>
					</header>
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
								<div style={{ paddingLeft: 20 }}>
									<Formik
										enableReinitialize={true}
										initialValues={initialValues}
										onSubmit={onSubmit}
										validationSchema={Schema}
									>
										<Form>
										
											<br />
											<br />

											<label className="form-label">
												Title of the Advertisment
											</label>
											<div className="col">
                             				 <ErrorMessage name="adTitle" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="adId"
												autocomplete="off"
												name="adId"
												type="hidden"
												
											/>


											<Field
												className="form-control"
												id="adStatus"
												autocomplete="off"
												name="adStatus"
												type="hidden"
												
											/>
											<Field
												className="form-control"
												id="adTitle"
												autocomplete="off"
												name="adTitle"
												
											/>
											<label className="form-label">
												Description of the Advertisment
											</label>
											<div className="col">
                             				 <ErrorMessage name="adDescr" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id=" adDescr"
												autocomplete="off"
												name="adDescr"
											/>
											<label className="form-label">
												Price of the Advertisment
											</label>
											<div className="col">
                             				 <ErrorMessage name="adPrice" className="errormesage" component="span" />
                            				</div>

											<Field
												className="form-control"
												id="adPrice"
												autocomplete="off"
												name="adPrice"
											
											/>
											  <div class="col-10">
                     							 <label className="form-label">Ad Type</label>
                      
                      								<Field as="select" name="adType" className="form-select">
												<option value="Grooming">Grooming</option>
												<option value="Day Care">Day Care</option>
												<option value="Walking">Walking</option>
												<option value="Other">Other</option>
											</Field>
										</div>
											<label className="form-label">Contact</label>
											<div className="col">
                             				 <ErrorMessage name="adContact" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="adContact"
												autocomplete="off"
												name="adContact"
												
											/>
											<label className="form-label">Email</label>
											<div className="col">
                             				 <ErrorMessage name="adEmail" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="adEmail"
												autocomplete="off"
												name="adEmail"
											
											/>
											<label className="form-label">Address</label>
											<div className="col">
                             				 <ErrorMessage name="adAddress" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="adAddress"
												autocomplete="off"
												name="adAddress"
												
											/>
													<div class="row g-3">
                    <div class="col-5">
                    <Field
												className="form-control"
												id="adProvince"
												autocomplete="off"
                        name="adProvince"
												type="hidden"
                        value={selected}
                        placeholder={selected}

												
											/>
                      <label className="form-label">Province</label>
                      <div className="col">
                        <ErrorMessage name="adProvince" className="errormesage" component="span" />
                      </div>
                     
                       <select onChange={changeSelectOptionHandler}  className="form-select" >
          
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
                      {
              
              options
            }
                        

                      </Field>
                    
											</div>
										</div>
											

											
                                           
											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E" }}
													>
														Update Advertisments
													</button>
													
												</div>
											</div>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default speditad;
