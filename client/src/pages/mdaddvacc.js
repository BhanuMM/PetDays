import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Box from '@mui/material/Box';
import Moderatorsidebar from "../components/moderatorsidebar";
import { useNavigate } from "react-router-dom";
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



function mdaddvitamin() {

	const initialValues = {
		vacName: "",
	 	descr: "",
		vacNextIter: "",
		
		
	  };
	
	  const Schema = Yup.object().shape({
		vacName:  Yup.string()
		.matches(/^[A-Za-z0-9 ]*$/,"Please enter valid name")
		.required("Please enter Vccine name"),

		vacNextIter:  Yup.string()
		.matches(/^[0-9]*$/,"Please enter valid duration")
		
		
	  });
	
	  const navigate = useNavigate();

	  const onSubmit = (data) => {
		axios.post("http://localhost:3001/mod/addvaccine", data).then((response) => {
		  if (response.data.error) {
			alert(response.data.error);
		  } else {
			navigate("/mdsinglevacc");
		  }
		});
	  };
	
	return (
		<div>
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
										<h1 class="h2 mb-0 ls-tight">Add Vaccine</h1>
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
                                                    <a href="/mdaddvacc">
														 Add Vaccines
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
                        initialValues={initialValues}
                        onSubmit={onSubmit}
						validationSchema={Schema}
                       
                      >
                         <Form class="row g-3" style={{ paddingLeft: 200 }}><br/><br/>

						 <div class="col-10">
							<label className="form-label">Name of the vaccine</label>
							<div className="col">
                              <ErrorMessage name="vacName" className="errormesage" component="span" />
                            </div>
									<Field
									className="form-control"
									id="vacName"
									autocomplete="off"
									name="vacName"
									placeholder=""
									/>
						 </div>
						 <div class="col-10">
							<label className="form-label">Description about the vaccine</label>
							
									<Field
									className="form-control"
									id="descr"
									autocomplete="off"
									name="descr"
									placeholder=""
									component="textarea"
									/>
						 </div>
						 <div class="col-10">
							<label className="form-label">Next Iteration On</label>
							<div className="col">
                              <ErrorMessage name="vacNextIter" className="errormesage" component="span" />
                            </div>
									<Field
									className="form-control"
									id="vacNextIter"
									autocomplete="off"
									name="vacNextIter"
									placeholder=""
									/>
						 </div>


                            
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mb-5 mt-5">
                                    {" "}

									 <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit"
							  style={{backgroundColor: '#F66B0E', borderColor:'#F66B0E'}} 
                            >
                              Add Vaccine
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

export default mdaddvitamin;
