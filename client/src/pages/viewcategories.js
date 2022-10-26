import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";

function viewcategories() {
	const [listOfPetcatagories, setListOfPetcatagories] = useState([]);
	const [searchTerm, setSearchTerm] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:3001/admin/getpetcategories")
			.then((response) => {
				setListOfPetcatagories(response.data);
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
										<h1 class="h2 mb-0 ls-tight">Animal Categories</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/viewcategories" className="header-topic">
														viewcategories
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
										style={{
											width: 575,
											float: "right",
											display: "flex",
											paddingTop: 10,
										}}
									>
										<p
											class="fw-semibold "
											style={{
												paddingRight: 10,
												paddingTop: 10,
												width: 250,
											}}
										>
											Search categories
										</p>
										<input
											type="search"
											class="form-control rounded input-group"
											placeholder="Enter available categories"
											aria-label="Search"
											aria-describedby="search-addon"
											style={{ height: 40 }}
											onChange={(event) => {
												setSearchTerm(event.target.value);
											}}
										/>
									</div><br/><br/><br/>

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Categories</h5>
										</div>

										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													{/* <th scope="col">
														<b>
															<strong>Category ID</strong>
														</b>
													</th> */}
													<th scope="col">
														<b>
															<strong>Category Name</strong>
														</b>
													</th>
													<th scope="col">
														<b>
															<strong>Description</strong>
														</b>
													</th>
													<th scope="col">
														<b>
															<strong></strong>
														</b>
													</th>
												</thead>
												<tbody id="myTable">
													{listOfPetcatagories
														.filter((val) => {
															if (searchTerm == "") {
																return val;
															} else if (
																val.pcatName
																	.toLowerCase()
																	.includes(searchTerm.toLowerCase())
															) {
																return val;
															}
														})
														.map((value, key) => {
															return (
																<tr>
																	{/* <td class="hidden-xs">{value.pcatID}</td> */}

																	<td>{value.pcatName}</td>
																	<td>{value.descr}</td>
																	<td class="text-end">
																		<div style={{ display: "flex" }}>
																			<div style={{ paddingRight: 5 }}>
																				<button
																					type="button"
																					class="btn btn-sm btn-square btn-neutral text-danger-hover"
																					onClick={() => {
																						navigate("/editpetcategory", {
																							state: value.pcatID,
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
																										"http://localhost:3001/admin/deletecategory/" +
																											value.pcatID
																									)
																									.then((response) => {
																										if (response.data.error) {
																											alert(
																												response.data.error
																											);
																										} else {
																											axios
																												.get(
																													"http://localhost:3001/admin/getpetcategories"
																												)
																												.then((response) => {
																													setListOfPetcatagories(
																														response.data
																													);
																												});
																										}
																									});
																								Swal.fire(
																									"Deleted!",
																									"Category has been removed.",
																									"success"
																								);
																							}
																						});
																					}}
																				>
																					<i class="bi bi-trash"></i>
																				</button>
																			</div>

																			<button
																				type="submit"
																				class="btn-view"
																				onClick={() => {
																					navigate("/viewbreedscats", {
																						state: value.pcatID,
																					});
																				}}
																			>
																				View Breeds
																			</button>
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

export default viewcategories;
