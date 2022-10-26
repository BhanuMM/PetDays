import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function viewmoderators() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [listOfModerators, setListOfModerators] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios.get("http://localhost:3001/admin/getmoderators").then((response) => {
			setListOfModerators(response.data);
		});
	}, []);
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
										<h1 class="h2 mb-0 ls-tight">Moderators</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/viewmoderators" className="header-topic">
														Moderators
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
								<div
										class="col col-xs-8 text-right"
										style={{ display: "flex" }}
									>
										<div style={{ width: 800 }}>
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
												onClick={() => {
													navigate("/addmoderator");
												}}
											>
												Add Moderator
											</Button>
										</div>
										<div style={{ width: 575, float: "right" ,display:"flex",paddingTop:10 }}>
											<p
												class="fw-semibold "
												style={{ paddingRight: 10, paddingTop: 10 ,width:250 }}
											>
												Search Moderator
											</p>
											<input
												type="search"
												class="form-control rounded input-group"
												placeholder="Enter Moderator Name"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40 }}
												onChange={(event) => {
													setSearchTerm(event.target.value);
												}}
											/>
										</div>
									</div>
									<br />
									<br />
									<br />
									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Active Moderators</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-striped table-bordered table-list responsive text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Moderator ID</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Moderator Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Email</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong></strong>
															</b>
														</th>
													</tr>
												</thead>
												<tbody id="myTable">
													{listOfModerators
														.filter((val) => {
															if (searchTerm == "") {
																return val;
															} else if (
																val.username
																	.toLowerCase()
																	.includes(searchTerm.toLowerCase())
															) {
																return val;
															}
														})

														.map((value, key) => {
															return (
																<tr>
																	<td class="hidden-xs">{value.userID}</td>
																	<td>{value.username}</td>
																	<td>{value.email}</td>
																	<td class="text-end" >
																		<div style={{ display: "flex" }}>

																			<div style={{ display: "flex" }}>
																			<div style={{ paddingRight: 5 }}>

																		</div>
																			<button
																					type="button"
																					class="btn btn-sm btn-square btn-neutral text-danger-hover"
																					onClick={() => {
																						Swal.fire({
																							title: "Are you sure?",
																							text:
																								"You won't be able to revert this!",
																							icon: "warning",
																							showCancelButton: true,
																							confirmButtonColor: "#3085d6",
																							cancelButtonColor: "#d33",
																							confirmButtonText:
																								"Yes, delete it!",
																						}).then((result) => {
																							if (result.isConfirmed) {
																								axios
																									.post(
																										"http://localhost:3001/admin/deletemoderator/" +
																											value.userID
																									)
																									.then((response) => {
																										if (response.data.error) {
																											alert(
																												response.data.error
																											);
																										} else {
																											axios
																												.get(
																													"http://localhost:3001/admin/getmoderators"
																												)
																												.then((response) => {
																													setListOfModerators(
																														response.data
																													);
																												});
																										}
																									});
																								Swal.fire(
																									"Removed!",
																									"Moderator has been Removed.",
																									"success"
																								);
																							}
																						});
																					}}
																				>
																					<i class="bi bi-trash"></i>
																				</button>
																			</div>
																		</div>
																	</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default viewmoderators;
