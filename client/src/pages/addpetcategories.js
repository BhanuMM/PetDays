import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Formik, Form, Field, ErrorMessage } from "formik";

import { useNavigate } from "react-router-dom";
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

function addpetcategories() {
	const initialValues = {

		pcatName:"", 
		descr:"",	
	  };
	
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
		axios.post("http://localhost:3001/admin/addcategory", data).then((response) => {
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
										<h1 class="h2 mb-0 ls-tight">Add Pet Category</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/addpetcategories" className="header-topic">
														addpetcategory
													</a>
												</li>
											</ol>
										</nav>

										<br />
									</div>
								</div>
							</div>
						</div>
					</header><br /><br />
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
								<div style={{ paddingLeft: 20 }}>
									{/* <Card
										sx={{
											minWidth: 275,
											maxWidth: 1500,
											width: 1100,
											marginLeft: 15,
										}}
										style={{ height: 450, padding: 10, paddingLeft: 75 }}
									>
										<CardContent> */}
										<Formik
									initialValues={initialValues}
									onSubmit={onSubmit}
								
                      				>
											<Form class="row g-3" style={{ paddingLeft: 200 }}>
												<br />
												<br />
												<br />
												{/* <Box
													component="form"
													sx={{
														"& .MuiTextField-root": { m: 1, width: "100ch" },
													}}
													noValidate
													autoComplete="off"
												> */}
													{/* <TextField
														id="med-name"
														label="Name of the Category"
													/>
													<br />
													<TextField
														id="med-desc"
														label="Description about the Category"
													/> */}

													<div class="col-10">
														<label className="form-label">Name of the Category</label>
															<Field
															className="form-control"
															id="pcatName"
															autocomplete="off"
															name="pcatName"
															placeholder=""
															/>
													</div>
													<div class="col-10">
														<label className="form-label">Description about the Category</label>
															<Field
															className="form-control"
															id="descr"
															autocomplete="off"
															name="descr"
															placeholder=""
															component="textarea"
															/>
													</div>
													<div className="row">
														<div className="col-9"></div>
														<div className="col-3 mb-5 mt-5">
															{" "}
															<button
																className="register.loginbuttonsize btn btn-success "
																type="submit"
																style={{ backgroundColor: "#F66B0E", borderColor:"#F66B0E"}}
															>
																Add Pet Category
															</button>
														</div>
													</div>
												{/* </Box> */}

												{/* <div className="row">
													<div className="col-9"></div>
													<div className="col-3 mb-5 mt-5">
														{" "} */}
														{/* <Button
															variant="contained"
															component="label"
															style={{ backgroundColor: "#F66B0E" }}
														>
															Add Pet Category
														</Button> */}
														 {/* <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit"
							  style={{backgroundColor: '#F66B0E',borderColor:"#F66B0E"}} 
                            >
                             Add Pet Category
                            </button>
													</div>
													
												</div> */}
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

export default addpetcategories;
