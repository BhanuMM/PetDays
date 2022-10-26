import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";


function addmoderator() {
	const initialValues = {
		username: "",
		modemail: "",
	};

	const Schema = Yup.object().shape({
		modemail: Yup.string()
			.email("Not a proper email address")
			.required("Please enter email"),

			username: Yup.string()
			.max(40)
			.matches(/^[A-Za-z ]*$/, "Please enter valid name")
			.required("Please enter name"),
	});

	const navigate = useNavigate();

	const onSubmit = (data) => {
		Swal.fire({
			title: '',
			html: '',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
			  Swal.showLoading()
			  // const b = Swal.getHtmlContainer().querySelector('b')
			  // timerInterval = setInterval(() => {
			  //   b.textContent = Swal.getTimerLeft()
			  // }, 100)
			},
			willClose: () => {
			  clearInterval(timerInterval)
			}
		  }).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
			  console.log('I was closed by the timer')
			}
		  })

		axios.post("http://localhost:3001/admin/addmoderator", data).then((response) => {
				if (response.data.error) {
					// alert(response.data.error);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: response.data.error,
						
					  })
				} else {
					
					navigate("/viewmoderators");
				}
			});
			let timerInterval

	};
	return (
		<div>
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
										<h1 class="h2 mb-0 ls-tight">Add New Moderator</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/addmoderator" className="header-topic">
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
													<label className="form-label">Email</label>
													<div className="col">
														<ErrorMessage
															name="modemail"
															className="errormesage"
															component="span"
														/>
													</div>
													<Field
														className="form-control"
														id="modemail"
														autocomplete="off"
														name="modemail"
														placeholder=""
													/>
												</div>
											</div>
											
											<div className="row">
												<div className="col-8 mb-5 mt-5 text-right">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{backgroundColor: "#205375", borderColor:"#205375",width: 250,float: "right"}}>
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
