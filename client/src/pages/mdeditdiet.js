import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Box from "@mui/material/Box";
import Moderatorsidebar from "../components/moderatorsidebar";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";



const bull = (
    	<Box
    	  component="span"
    	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
    	>
    	  •
    	</Box>
    );



function mdeditdogdiet() {

	const [SingleDietplan, setSingleDietplan] = useState([]);
	const location = useLocation();

	useEffect(() => {
		axios
			.get("http://localhost:3001/mod/getdietplans/" + location.state)
			.then((response) => {
				setSingleDietplan(response.data);
			});
	}, []);

	const initialValues = {
		dietPlanID: SingleDietplan.dietPlanID,
		planName: SingleDietplan.planName,
		planDescr: SingleDietplan.planDescr,
		ageRangeFrom: SingleDietplan.ageRangeFrom,
		ageRangeTo: SingleDietplan.ageRangeTo,
		weightRangeFrom: SingleDietplan.weightRangeFrom,
		weightRangeTo: SingleDietplan.weightRangeTo,
		breedId: SingleDietplan.breedId,
		catId: SingleDietplan.catId,

	};
	const Schema = Yup.object().shape({
		planName:  Yup.string()
		.matches(/^[A-Za-z0-9 ]*$/,"Please enter valid name")
		.required("Please enter name"),

		planDescr: Yup.string()
		.required("Please enter description"),
		

		ageRangeFrom: Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid age"),

		ageRangeTo: Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid age"),

		weightRangeFrom:Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid weight"),

		weightRangeTo: Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid weight"),

		breedId: Yup.string()
		.required("please select breed"),

		catId: Yup.string()
		.required("please select category"),

		
		
	});

	const navigate = useNavigate();

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/mod/updatediet", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					console.log(data)
					navigate("/mddogdiet");
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
										<h1 class="h2 mb-0 ls-tight">Edit Diet Plan</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard">
														Moderator Dashboard /
													</a>
													<a href="/mddogdiet">
														 Diet Plans / 
													</a>
                                                    <a href="/mdeditdiet">
														 Edit Diet Plan
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
									>    
                        <Form><br/><br/>
						<br />
											<br />
											<label className="form-label">Name of the Diet Plan</label>
											<div className="col">
                             				 <ErrorMessage name="planName" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="dietplanID"
												autocomplete="off"
												type="hidden"
												name="dietplanID"
												// value ={SingleMed.medID}
											/>
											<Field
												className="form-control"
												id="planName"
												autocomplete="off"
												name="planName"
												// value ={SingleMed.medName}
											/>
											<label className="form-label">
												Description about the Diet Plan
											</label>
											<div className="col">
                             				 <ErrorMessage name="planDescr" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="planDescr"
												autocomplete="off"
												name="planDescr"
											/>

											<label className="form-label">
												Age Range From
											</label>
											<div className="col">
                             				 <ErrorMessage name="ageRangeFrom" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="ageRangeFrom"
												autocomplete="off"
												name="ageRangeFrom"
											/>
											<label className="form-label">
												Age Range To
											</label>
											<div className="col">
                             				 <ErrorMessage name="ageRangeTo" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="ageRangeTo"
												autocomplete="off"
												name="ageRangeTo"
											/>
											<label className="form-label">
												Weight Range From
											</label>
											<div className="col">
                             				 <ErrorMessage name="weightRangeFrom" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="weightRangeFrom"
												autocomplete="off"
												name="weightRangeFrom"
											/>
											<label className="form-label">
												Weight Range To
											</label>
											<div className="col">
                             				 <ErrorMessage name="weightRangeTo" className="errormesage" component="span" />
                            				</div>
											<Field
												className="form-control"
												id="weightRangeTo"
												autocomplete="off"
												name="weightRangeTo"
											/>

											<label className="form-label">Breed id</label>
											<div className="col">
                             				 <ErrorMessage name="breedId" className="errormesage" component="span" />
                            				</div>
												<Field as="select" name="breedName" className="form-select">
													<option value="0">select breed</option>
													<option value="1">german shephard</option>
													<option value="2">lion shephard</option>
												</Field>

											<label className="form-label">Cat id</label>
											<div className="col">
                             				 <ErrorMessage name="catId" className="errormesage" component="span" />
                            				</div>
												<Field as="select" name="catId" className="form-select">
													<option value="0">select category</option>
													<option value="1">dogs</option>
													<option value="2">cats</option>
												</Field>

                            
						<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
												<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E" }}
													>
														Update Diet Plan
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
