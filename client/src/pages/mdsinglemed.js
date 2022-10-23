import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
import Moderatorsidebar from "../components/moderatorsidebar";
import Swal from "sweetalert2";

function mdsinglemed() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [listOfMedicines, setListOfMedicines] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getmedicines").then((response) => {
			setListOfMedicines(response.data);
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
										<h1 class="h2 mb-0 ls-tight">Medicines</h1>
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
													<a href="/mdsinglemed" className="header-topic">
														Medicines
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
													navigate("/mdaddmed");
												}}
											>
												Add Medicine
											</Button>
										</div>
										<div class="input-group" style={{ width: 575 }}>
											<p
												class="fw-semibold "
												style={{ paddingRight: 10, paddingTop: 10 }}
											>
												Search Medicine
											</p>
											<input
												type="search"
												class="form-control rounded"
												placeholder="Enter Medicine Name"
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

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Medicines</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Medicine ID</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Medicine Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Description</strong>
															</b>
														</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{listOfMedicines
														.filter((val) => {
															if (searchTerm == "") {
																return val;
															} else if (
																val.medName
																	.toLowerCase()
																	.includes(searchTerm.toLowerCase())
															) {
																return val;
															}
														})
														.map((value, key) => {
															return (
																<tr>
																	<td>{value.medID}</td>
																	<td>{value.medName}</td>
																	<td>{value.descr}</td>

																	<td class="text-end">
																		<div style={{ display: "flex" }}>
																			<div style={{ paddingRight: 5 }}>
																				<button
																					type="button"
																					class="btn btn-sm btn-square btn-neutral text-danger-hover"
																					onClick={() => {
																						navigate("/mdeditmed", {
																							state: value.medID,
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
																										"http://localhost:3001/mod/deletemed/" +
																											value.medID
																									)
																									.then((response) => {
																										if (response.data.error) {
																											alert(
																												response.data.error
																											);
																										} else {
																											axios
																												.get(
																													"http://localhost:3001/mod/getmedicines"
																												)
																												.then((response) => {
																													setListOfMedicines(
																														response.data
																													);
																												});
																										}
																									});
																								Swal.fire(
																									"Deleted!",
																									"Medicine has been deleted.",
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
																//   <div
																//     key={key}
																//     className="post"
																//     onClick={() => {
																//       history.push(`/post/${value.id}`);
																//     }}
																//   >
																//     <div className="title"> {value.title} </div>
																//     <div className="body">{value.postText}</div>
																//     <div className="footer">{value.username}</div>
																//   </div>
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

export default mdsinglemed;
