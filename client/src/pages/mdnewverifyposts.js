import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Moderatorsidebar from "../components/moderatorsidebar";

function mdnewverifyposts() {
	const [listOfverifyposts, setlistOfverifyposts] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getverifyposts").then((response) => {
			setlistOfverifyposts(response.data);
		});
	}, []);

	const navigate = useNavigate();

	return (
		<div className="container-fluid">
			<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div classNameName="">
					<Moderatorsidebar />
				</div>
				<div className="h-screen flex-grow-1 overflow-y-lg-auto">
					<header className="bg-surface-primary border-bottom pt-6">
						<div className="container-fluid">
							<div className="mb-npx">
								<div className="row align-items-center">
									<div className="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 className="h2 mb-0 ls-tight">Verified Forum Posts</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb">
												<li className="breadcrumb-item">
													<a
														href="/moderatordashboard"
														classNameName="header-topic"
													>
														Moderator Dashboard/
													</a>
													<a
														href="/mdnewverifyposts"
														classNameName="header-topic"
													>
														Verified Posts
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
					<main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							<div className="row g-6 mb-6">
								<div style={{ paddingLeft: 20 }}>
									<p className="fw-semibold " style={{ paddingRight: 40 }}>
										Filtery by :
									</p>
									<div className="search-line" style={{ display: "flex" }}>
										<p className="fw-semibold ">
											<div
												className="dropdown"
												style={{ paddingRight: 40, paddingLeft: 20 }}
											>
												<button
													className="btn btn-dark dropdown-toggle"
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
													className="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a className="dropdown-item" href="#">
														Recent Week
													</a>
													<a className="dropdown-item" href="#">
														Last Month
													</a>
												</div>
											</div>
										</p>

										<div className="dropdown" style={{ paddingRight: 40 }}>
											<button
												className="btn btn-dark"
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
											className="input-group"
											style={{ width: 575, marginLeft: 270 }}
										>
											<p
												class="fw-semibold "
												style={{ paddingRight: 10, paddingTop: 10 }}
											>
												Search Posts
											</p>
											<input
												type="search"
												class="form-control rounded"
												placeholder="Enter Posts"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40 }}
												onChange={(event) => {
													setSearchTerm(event.target.value);
												}}
											/>
										</div>
									</div>
									{listOfverifyposts
										.filter((val) => {
											if (searchTerm == "") {
												return val;
											} else if (
												val.postTitle
													.toLowerCase()
													.includes(searchTerm.toLowerCase())
											) {
												return val;
											}
										})
										.map((value, key) => {
											return (
												<CardContent>
													<Card
														sx={{ minWidth: 250, maxWidth: 1500 }}
														style={{ padding: 10, paddingLeft: 25 }}
													>
														<div className="card-body">
															<div className="content">
																<div>
																	<p className="fw-semibold fs-7">
																		{value.postTitle}
																	</p>
																	<p className="font-italic text-success fs-7">
																		{value.postDate}
																	</p>
																</div>
																<div>{value.postDescr}</div>
																{/* <div
																	className="comment"
																	style={{ paddingRight: 50 }}
																>
																	<p className="fw-semibold fs-7">
																		<a
																			href="#"
																			className="link-success text-decoration-none"
																		>
																			5 Comments
																		</a>
																	</p>
																</div> */}
															</div>
														</div>
													</Card>
												</CardContent>
											);
										})}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default mdnewverifyposts;
