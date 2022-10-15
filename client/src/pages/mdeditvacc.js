import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Moderatorsidebar from "../components/moderatorsidebar";

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

function mdeditdogdiet() {
	const [SingleVac, setSingleVac] = useState([]);
	const location = useLocation();
  
	useEffect(() => {
	  axios
		.get("http://localhost:3001/mod/getvaccines/" +location.state)
		.then((response) => {
		  setSingleVac(response.data);
		  console.log(SingleVac.VacID);
		});
	}, []);
  
  
	const initialValues = {
	  vacID: SingleVac.vacID,
	  vacName: SingleVac.vacName,
	  descr: SingleVac.descr,
	  vacNextIter: SingleVac.vacNextIter,
	};
	const Schema = Yup.object().shape({
		vacName:  Yup.string()
		.matches(/^[A-Za-z0-9 ]*$/,"Please enter valid name")
		.required("Please enter Vccine name"),

		vacNextIter:  Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid duration")
		
		
	  });
  
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
	  axios
		.post("http://localhost:3001/mod/updatevaccine", data).then((response) => {
		  if (response.data.error) {
			alert(response.data.error);
		  } else {
			  // console.log(data)
			navigate("/mdsinglevacc");
		  }
		});
	};
  
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
			<div className="">
					<Moderatorsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Edit Vaccine</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard">
														Moderator Dashboard /
													</a>
													<a href="/mdsinglevacc">
														 Vaccines / 
													</a>
                                                    <a href="/mdeditvacc">
														 Edit Vaccine
													</a>
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
							<div style={{paddingLeft:20}}>
                            <Formik
										enableReinitialize={true}
										initialValues={initialValues}
										onSubmit={onSubmit}
										validationSchema={Schema}
									>
										<Form>
											<br />
											<br />
											<label className="form-label">Name of the vaccine</label>
											<div className="col">
                             				 <ErrorMessage name="vacName" className="errormesage" component="span" />
                            				</div>

											<Field
												className="form-control"
												id="vacName"
												autocomplete="off"
												name="vacName"
												// value ={SingleVac.vacName}
											/>
											
											<label className="form-label">
												description about the vaccine
											</label>
											<Field
												className="form-control"
												id="descr"
												autocomplete="off"
												name="descr"
											/>
											<label className="form-label">Next iteration of the vaccine</label>
											<div className="col">
                              					<ErrorMessage name="vacNextIter" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="vacNextIter"
												autocomplete="off"
												name="vacNextIter"
												// value ={SingleVit.vacNextIter}
											/>
											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E" }}
													>
														Update Vaccine
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

export default mdeditdogdiet;
