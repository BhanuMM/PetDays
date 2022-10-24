import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import "../styles/forum.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function forum() {
	const location = useLocation();
	const initialValues = {
		postTitle: "",
		postDescr: "",
		pcatId: "",
	};

	const navigate = useNavigate();
	const onSubmit = (data) => {
		console.log(data);

		axios.post("http://localhost:3001/user/addpost", data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				navigate(0);
			}
		});
	};

	const [listOfPosts, setListOfPosts] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/user/getposts").then((response) => {
			setListOfPosts(response.data);
		});
	}, []);

	return (
		<div className="forum">
			<Navbar />
			<br />
			<br />
			<br />
			<br />
			<div className="container">
				<div className="container-fluid forum">
					<div className="row mt-3">
						<div class="row  ">
							<main class="py-6 bg-surface-secondary">
								<div class="container-fluid">
									<div class="row g-6 mb-6">
										<div style={{ paddingLeft: 20 }}>
											<div style={{ paddingLeft: 950 }}>
												<Button
													variant="contained"
													component="label"
													style={{ backgroundColor: "#F66B0E" }}
													data-toggle="modal"
													data-target="#exampleModalCenter"
												>
													Start New Disscussion
												</Button>
											</div>
											<br />
											<br />

											<div class="search-line" style={{ display: "flex" }}>
												<p class="fw-semibold " style={{ paddingRight: 40 }}>
													Filtery by :
												</p>

												<p class="fw-semibold ">
													<div
														class="dropdown"
														style={{ paddingRight: 40, paddingLeft: 20 }}
													>
														<button
															class="btn btn-dark dropdown-toggle"
															type="button"
															id="dropdownMenuButton"
															data-toggle="dropdown"
															aria-haspopup="true"
															aria-expanded="false"
															style={{
																height: 40,
																backgroundColor: "#205375",
																width: 200,
																borderColor: "#205375",
															}}
														>
															Recently Published
														</button>
														<div
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButton"
														>
															<a class="dropdown-item" href="#">
																Recent Week
															</a>
															<a class="dropdown-item" href="#">
																Last Month
															</a>
														</div>
													</div>
												</p>

												<div class="dropdown" style={{ paddingRight: 50 }}>
													<button
														class="btn btn-dark"
														type="button"
														style={{
															height: 40,
															backgroundColor: "#205375",
															width: 150,
															borderColor: "#205375",
														}}
													>
														Filter
													</button>
												</div>

												<div
													class="input-group"
													style={{ width: 575, paddingRight: 50 }}
												>
													<input
														type="search"
														class="form-control rounded"
														placeholder="Search Forum Posts"
														aria-label="Search"
														aria-describedby="search-addon"
														style={{ height: 40 }}
													/>
													<button
														type="button"
														class="btn"
														style={{
															height: 40,
															backgroundColor: "#205375",
															color: "white",
														}}
													>
														Search
													</button>
												</div>
											</div>
											<CardContent>
												{listOfPosts.map((value, key) => {
													return (
														<Card
															sx={{ minWidth: 250, maxWidth: 1500 }}
															style={{ padding: 10, paddingLeft: 25 }}
														>
															<div class="card-body">
																<div class="content">
																	<div>
																	<p class="fw-semibold fs-7">
																		Published date {value.postDate}
																		</p>
																		<p class="fw-semibold fs-7">
																		{value.postTitle}
																		</p>
																		<p class="font-italic text-success fs-7">
																		 Published 5 minutes ago.
																		</p>
																	</div>
																	<div>
																	
																		{value.postDescr} 
																
																	</div>
																	<div
																		class="comment"
																		style={{ paddingRight: 50 }}
																	>
																		<p class="fw-semibold fs-7">
																			<a
																				href="\testingposts"
																				class="link-success text-decoration-none"
																			>
																				5 Comments
																			</a>
																		</p>
																		<Button
																	variant="contained"
																	component="label"
																	style={{ backgroundColor: "#F66B0E" }}
																	onClick={() => {
																		navigate("/testingposts", {
																			state: value.postId,
																		});
																	}}
																>
																	View
																</Button>
																	</div>
																</div>
															</div>
														</Card>
													);
												})}
											</CardContent>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>

				<div
					class="modal fade"
					id="exampleModalCenter"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLongTitle">
									Start New Disscussion
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<Formik initialValues={initialValues} onSubmit={onSubmit}>
									<Form>
										<div class="form-group">
											<label for="recipient-name" class="col-form-label">
												Title
											</label>
											<Field
												className="form-control"
												id="postTitle"
												autocomplete="off"
												name="postTitle"
												placeholder=""
											/>
										</div>
										<div className="form-group">
											<label for="message-text" className="col-form-label">
												Message
											</label>
											<Field
												className="form-control"
												id="postDescr"
												autocomplete="off"
												name="postDescr"
												placeholder=""
											/>
										</div>
										<div className="form-group">
											<label for="message-text" className="col-form-label">
												Pet category
											</label>
											<Field as="select" name="pcatId" className="form-select">
												<option value="1">dogs </option>
												<option value="2">cats</option>
											</Field>
										</div>
										<div class="modal-footer">
											<div style={{ paddingRight: 15 }}>
												<button
													variant="contained"
													type="submit"
													component="label"
													style={{ backgroundColor: "#205375" }}
												>
													Submit
												</button>
												<button
													variant="contained"
													component="label"
													style={{ backgroundColor: "#F66B0E" }}
													data-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default forum;
