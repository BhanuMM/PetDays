import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Card,CardContent,CardMedia,Grid,Container,Typography} 
from "@mui/material";
import Moderatorsidebar from "../components/moderatorsidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function mdnewpendingposts() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [listOfpendingposts, setlistOfpendingposts] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getpendingposts").then((response) => {
			setlistOfpendingposts(response.data);
		});
	}, []);
	const navigate = useNavigate();

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
										<h1 class="h2 mb-0 ls-tight">Pending Forum Posts</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a
														href="/moderatordashboard"
														className="header-topic"
													>
														Moderator Dashboard/
													</a>
													<a href="/mdnewpendingposts" className="header-topic">
														Pending Posts
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
									

									<div class="search-line" style={{ display: "flex" }}>

										<div
											
											style={{ width: 700, marginLeft: 420,display:"flex" }}
										>
											<p
												class="fw-semibold "
												style={{ paddingRight: 10, paddingTop: 10}}
											>
												Search Posts
											</p>
											<input
												type="search"
												class="form-control rounded input-group"
												placeholder="Search Posts"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40,width:300 }}
												onChange={(event) => {
													setSearchTerm(event.target.value);
												}}
											/>
										</div>
									</div>

									<CardContent>
										{listOfpendingposts
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
													<div style={{paddingLeft:160 }}>
														<Card
															sx={{ minWidth: 250, maxWidth: 1000 }}
															style={{ padding: 10,paddingLeft:100}}
														>
															<div class="card-body">
																<div class="content" style={{ alignItems:"left"}}>
																	<div>
																		<Typography class="fw-semibold fs-7" style={{ fontSize:20}}>
																			{value.postTitle}
																		</Typography>
																		<Typography class="font-italic text-success fs-7">
																			Posted Date : {value.postDate}
																		</Typography>
																	</div>
																	<div>
																		<Typography>{value.postDescr}</Typography>
																	</div>
																	<div
																		class="comment"
																		style={{ paddingRight: 50 }}
																	>
																		<br />
																		<Button
																			variant="contained"
																			component="label"
																			style={{ backgroundColor: "#F66B0E",width:100 }}
																			onClick={() => {
																				navigate("/mdverifyposts", {
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
														<br />
													</div>
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
	);
}

export default mdnewpendingposts;
