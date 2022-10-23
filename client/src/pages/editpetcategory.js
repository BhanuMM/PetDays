import React from "react";
import Sidebar from "../components/sidebar";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

function editpetcategory() {
	const [listOfCategory, setlistOfCategory] = useState([]);
	const location = useLocation();

	useEffect(() => {
		axios
			.get("http://localhost:3001/admin/getcategory/" + location.state)
			.then((response) => {
				setlistOfCategory(response.data);
			});
	}, []);

	const navigate = useNavigate();

	const initialValues = {
		pcatID: listOfCategory.pcatID,
		pcatName: listOfCategory.pcatName,
		descr: listOfCategory.descr,
	};

	const Schema = Yup.object().shape({
		pcatName: Yup.string()
			.matches(/^[A-Za-z0-9 ]*$/, "Please enter valid name")
			.required("Please enter category name"),
	});

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/admin/updatecategory", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					// console.log(data)
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
										<h1 class="h2 mb-0 ls-tight">Edit Animal Category</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard">Admin Dashboard /</a>
													<a href="/viewcategories">View Animal Categories/</a>
													<a href="/editpetcategory">Edit Animal Categories</a>
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
											<label className="form-label">Name of the category</label>
											<div className="col">
												<ErrorMessage
													name="medName"
													className="errormesage"
													component="span"
												/>
											</div>
											<Field
												className="form-control"
												id="pcatName"
												autocomplete="off"
												name="pcatName"
												// value ={SingleMed.medName}
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
														Update Category
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

export default editpetcategory;
