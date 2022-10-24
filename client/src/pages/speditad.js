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
		.matches(/^[A-Za-z ]*$/,"Please enter valid title")
		.required("Please enter title"),
  
		adPrice: Yup.string()
		.matches(/^[0-9]*$/,"please enter valied price"),
  
		adImage : "",
  
		adProvince :Yup.string()
					   .required("please select province"),
		adDistrict :Yup.string()
		.required("please select district"),
					
  
		adContact: Yup.string()
					  .matches(/^[0-9]{10}$/,"please enter valied contact number"),
  
		adEmail:Yup.string().email("please enter valied email"),
		adAddress: Yup.string(),
	
		
	  });

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
											<label className="form-label">District</label>
											<div className="col">
                             				 <ErrorMessage name="adProvince" className="errormesage" component="span" />
                            				</div>
											<Field as="select" name="adProvince" className="form-select">
												{/* <option value="Central Province">Central Province</option>
												<option value="Eastern Province">Eastern Province </option>
												<option value="Northern Province">Northern Province</option>
												<option value="Southern Province">Southern Province </option>
												<option value="Western Province">Western Province</option>
												<option value="North Western Province">North Western Province </option>
												<option value="Northern Province">Northern Province</option>
												<option value="North Central Province">North Central Province </option>
												<option value="Uva Province">Uva Province</option> */}
												 <option value="Central Province">Anuradhapura</option>
												<option value="Eastern Province">Jaffna </option>
												<option value="Northern Province">Colombo</option>
												<option value="Southern Province">Galle</option>
												<option value="Western Province">Badulla</option>
												<option value="North Western Province">Kurunegala</option>
												<option value="Northern Province">Kandy</option>
												<option value="North Central Province">Ratnapura</option>
												<option value="Uva Province">Puttalam</option>
                        						<option value="Central Province">Ampara</option>
												<option value="Eastern Province"> Matara</option>
												<option value="Northern Province">Gampaha</option>
												<option value="Southern Province">Kalutara</option>
												<option value="Western Province">Polonnaruwa</option>
												<option value="North Western Province">Batticaloa</option>
												<option value="Northern Province">Mullaitivu</option>
												<option value="North Central Province">Nuwara Eliya</option>
												<option value="Uva Province">Kilinochchi</option>
                        						<option value="Central Province">Matale</option>
												<option value="Eastern Province"> Mannar</option>
												<option value="Northern Province">Kegalle</option>
												<option value="Southern Province">Vavuniya</option>
												<option value="Western Province">Hambantota</option>
												<option value="North Western Province">Moneragala</option>
												<option value="Northern Province">Ratnapura</option>
												<option value="North Central Province">Trincomlee</option>
											</Field>
											<label className="form-label">District</label>
											<div className="col">
                             				 <ErrorMessage name="adDistrict" className="errormesage" component="span" />
                            				</div>
											<Field as="select" name="adDistrict" className="form-select">
												<option value="red">Galle</option>
												<option value="green">Matara</option>
												<option value="blue">Hambantota</option>
												<option value="blue">Colombo</option>
											</Field>

											
                                           
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
