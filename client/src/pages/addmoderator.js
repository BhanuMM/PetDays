import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";


function addmoderator() {
	const initialValues = {
		username: "",
		email: "",
		password: "",
	};

	const Schema = Yup.object().shape({
		email: Yup.string()
			.email("Not a proper email address")
			.required("Please enter email"),

			username: Yup.string()
			.max(40)
			.matches(/^[A-Za-z ]*$/, "Please enter valid name")
			.required("Please enter name"),
	});

	const navigate = useNavigate();

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/admin/addmoderator", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					navigate("/viewmoderators");
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
										<h1 class="h2 mb-0 ls-tight">Add Moderators</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/addmoderators" className="header-topic">
														Add Moderators
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
								<div style={{ paddingLeft: 20 }}>
									<Formik
										initialValues={initialValues}
										onSubmit={onSubmit}
										validationSchema={Schema}
									>
										<Form class="row g-3" style={{ paddingLeft: 200 }}>
											<br />
											<br />

											<div class="row g-3">
												<div class="col-8">
													<label className="form-label">Username</label>
													<div className="col">
														<ErrorMessage
															name="username"
															className="errormesage"
															component="span"
														/>
													</div>
													<Field
														className="form-control"
														id="username"
														autocomplete="off"
														name="username"
														placeholder=""
													/>
												</div>
											</div>

											<div class="row g-3">
												<div class="col-8">
													<label className="form-label">E-mail</label>
													<div className="col">
														<ErrorMessage
															name="email"
															className="errormesage"
															component="span"
														/>
													</div>
													<Field
														className="form-control"
														id="email"
														autocomplete="off"
														name="email"
														placeholder=""
													/>
												</div>
											</div>
											<div class="col-8">
												<label className="form-label">Password</label>
												<div className="col">
													<ErrorMessage
														name="password"
														className="errormesage"
														component="span"
													/>
												</div>
												<Field
													className="form-control"
													id="password"
													autocomplete="off"
													name="password"
													placeholder=""
												/>
											</div>

											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{
															backgroundColor: "#F66B0E",
															borderColor: "#F66B0E",
														}}
													>
														Add Moderator
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

export default addmoderator;
