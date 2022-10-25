import React from 'react'
import Sidebar from "../components/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
function editbreed() {
	const [listOfBreeds, setlistOfBreeds] = useState([]);
	const location = useLocation();

	useEffect(() => {
		axios.get("http://localhost:3001/admin/getsinglebreed/"+location.state).then((response) => {
				setlistOfBreeds(response.data);
				console.log(listOfBreeds);
			});
	}, []);

	const navigate = useNavigate();

	const initialValues = {
		breedID: listOfBreeds.breedID,
		breedName: listOfBreeds.breedName,
		descr: listOfBreeds.descr,
	};
	const Schema = Yup.object().shape({
		breedName: Yup.string()
			.matches(/^[A-Za-z0-9 ]*$/, "Please enter valid name")
			.required("Please enter breed name"),
	});

	const onSubmit = (data) => {
		console.log(data);
		axios.post("http://localhost:3001/admin/updatebreed",data).then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					navigate("/viewcategories");
				}
			});
	}; 
  return (
    <div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Sidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Edit Breed</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard">Admin Dashboard /</a>
													<a href="/viewbreeds">View Breed/</a>
													<a href="/editbreed">Edit Breed</a>
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
											<label className="form-label">Name of the breed</label>
											<div className="col">
												<ErrorMessage
													name="breedName"
													className="errormesage"
													component="span"
												/>
											</div>
											<Field
												className="form-control"
												id="breedID"
												type = "hidden"
												autocomplete="off"
												name="breedID"
									
											/>
											<Field
												className="form-control"
												id="breedName"
												autocomplete="off"
												name="breedName"
									
											/>
											<label className="form-label">Description</label>
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
														Update Breed
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
  )
}

export default editbreed