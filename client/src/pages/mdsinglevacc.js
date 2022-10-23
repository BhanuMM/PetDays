import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Button from "@mui/material/Button";
import Moderatorsidebar from "../components/moderatorsidebar";
import Swal from "sweetalert2";

function mdsinglevacc() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [listOfVaccines, setListOfVaccines] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getvaccines").then((response) => {
			setListOfVaccines(response.data);
		});
	}, []);
	const navigate = useNavigate();
	return (
		<div class="container-fluid">
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
										<h1 class="h2 mb-0 ls-tight">Vaccines</h1>
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
													<a href="/mdsinglevacc" className="header-topic">
														Vaccines
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
										class="col col-xs-6 text-right"
										style={{ display: "flex" }}
									>
										<a
											href="\mdaddvacc"
											className="header-topic"
											style={{ paddingRight: 600 }}
										>
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
											>
												Add Vaccine
											</Button>
										</a>
										<div class="input-group" style={{ width: 575 }}>
											<input
												type="search"
												class="form-control rounded"
												placeholder="Search Vaccine"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40 }}
												onChange = {(event) => {
													setSearchTerm(event.target.value);
												}}
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
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Vaccines</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Vaccine ID</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Vaccine Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Description</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Next Iteration</strong>
															</b>
														</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{listOfVaccines.filter((val) => {
															if(searchTerm == ""){
															return val
															}else if (val.vacName.toLowerCase().includes(searchTerm.toLowerCase())){
															return val
															}
														}).map((value, key) => {
														return (
															<tr>
																<td>{value.vacID}</td>
																<td>{value.vacName}</td>
																<td>{value.descr}</td>
																<td>{value.vacNextIter} Months</td>

																<td class="text-end">
																	<div style={{ display: "flex" }}>
																		<div style={{ paddingRight: 5 }}>
																			<button
																				type="button"
																				class="btn btn-sm btn-square btn-neutral text-danger-hover"
																				onClick={() => {
																					navigate("/mdeditvacc", {
																						state: value.vacID,
																					});
																				}}
																			>
																				<em class="fa fa-pencil"></em>
																			</button>
																		</div>
																		<div>
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
																								.delete(
																									"http://localhost:3001/mod/deletevacc/" +
																										value.vacID
																								)
																								.then((response) => {
																									if (response.data.error) {
																										alert(response.data.error);
																									} else {
																										axios
																											.get(
																												"http://localhost:3001/mod/getvaccines"
																											)
																											.then((response) => {
																												setListOfVaccines(
																													response.data
																												);
																											});
																									}
																								});
																							Swal.fire(
																								"Deleted!",
																								"Vaccine has been deleted.",
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

export default mdsinglevacc;
