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

function mdeeditmed() {
	const [SingleMed, setSingleMed] = useState([]);
	const location = useLocation();

	useEffect(() => {
		axios
			.get("http://localhost:3001/mod/getmedicines/" + location.state)
			.then((response) => {
				setSingleMed(response.data);
				
			});
	}, []);

	const initialValues = {
		medID: SingleMed.medID,
		medName: SingleMed.medName,
		descr: SingleMed.descr,
	};


	const Schema = Yup.object().shape({
		medName:  Yup.string()
		.matches(/^[A-Za-z0-9 ]*$/,"Please enter valid name")
		.required("Please enter Vccine name"),
	  });

	
	const navigate = useNavigate();

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/mod/updatemedicine", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					console.log(data)
					navigate("/mdsinglemed");
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
										<h1 class="h2 mb-0 ls-tight">Add Medicine</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard">
														Moderator Dashboard /
													</a>
													<a href="/mdsinglemed">Medicines /</a>
													<a href="/mdeditmed">Edit Medicine</a>
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
											<label className="form-label">Name of the medicine</label>
											<div className="col">
                             					 <ErrorMessage name="medName" className="errormesage" component="span" />
                           					 </div>
											<Field
												className="form-control"
												id="medID"
												autocomplete="off"
												type="hidden"
												name="medID"
												// value ={SingleMed.medID}
											/>
											<Field
												className="form-control"
												id="medName"
												autocomplete="off"
												name="medName"
												// value ={SingleMed.medName}
											/>
											<label className="form-label">
												description about the medicine
											</label>
											<Field
												className="form-control"
												id="descr"
												autocomplete="off"
												name="descr"
											/>
											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E" }}
													>
														Update Medicine
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

export default mdeeditmed;
