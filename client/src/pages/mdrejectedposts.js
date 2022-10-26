import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Moderatorsidebar from "../components/moderatorsidebar";

function mdnewrejectedposts() {
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
		<div>
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
										<h1 className="h2 mb-0 ls-tight">Rejected Forum Posts</h1>
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
														href="/mdrejectedposts"
														classNameName="header-topic"
													>
														Rejected Posts
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
									
									<div className="search-line" style={{ display: "flex" }}>
										
										<div
											
											style={{ width: 575, marginLeft: 270 , display: "flex",paddingLeft: 100 }}
										>
											<p
												class="fw-semibold "
												style={{ paddingRight: 10, paddingTop: 10,width:200}}
											>
												Search Posts
											</p>
											<input
												type="search"
												class="form-control rounded input-group"
												placeholder="Search Posts"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40 }}
												onChange={(event) => {
													setSearchTerm(event.target.value);
												}}
											/>
										</div>
									</div><br/>
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
												<div style={{paddingLeft:160 }}>
													<Card
														sx={{ minWidth: 250, maxWidth: 1000 }}
														style={{ padding: 10, paddingLeft: 100 }}
													>
														<div className="card-body">
															<div className="content">
																<div>
																	<p className="fw-semibold fs-7" style={{ fontSize:20}}>
																		{value.postTitle}
																	</p>
																	<p className="font-italic text-danger fs-7">
																		Posted Date : {value.postDate}
																	</p>
																</div>
																<div>{value.postDescr}</div>
																
															</div>
														</div>
													</Card><br/>
												</div>
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

export default mdnewrejectedposts;
