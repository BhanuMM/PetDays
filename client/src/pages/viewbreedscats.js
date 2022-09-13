import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
function viewbreedscats() {
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
										<h1 class="h2 mb-0 ls-tight">Breeds</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
														viewbreedscats
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
									<div class="col col-xs-6 text-right">
										<a href="\addcatbreed" className="header-topic">
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
											>
												Add Breeds
											</Button>
										</a>
										<div
										class="input-group"
										style={{ width: 430, float: "right" }}
									>
										<input
											type="search"
											class="form-control rounded"
											placeholder="Search Breeds"
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
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Breeds</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-striped table-bordered table-list responsive text-center">
											<thead class="thead-light">
													<tr>
														<th scope="col"><b>
															<strong>Cat ID</strong>
														</b></th>
														<th scope="col"><b>
															<strong>Breed ID</strong>
														</b></th>
														<th scope="col"><b>
															<strong>Breed Name</strong>
														</b></th>
														<th scope="col"><b>
															<strong>Description</strong>
														</b></th>
														<th scope="col"><b>
															<strong></strong>
														</b></th>
													</tr>
												</thead>
												<tbody id="myTable">
													<tr>
														<td class="hidden-xs">1</td>
														<td>C-1</td>
														<td>Maine Coon Cats</td>

														<td>
															The cat is a domestic species of small carnivorous
															mammal
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a
																		href="\editbreed"
																		class="btn btn-sm btn-neutral"
																	>
																		<em class="fa fa-pencil"></em>
																	</a>
																</div>
																<div>
																	<button
																		type="button"
																		class="btn btn-sm btn-square btn-neutral text-danger-hover"
																	>
																		<i class="bi bi-trash"></i>
																	</button>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td class="hidden-xs">2</td>
														<td>C-2</td>
														<td>Persian Cats</td>
														<td>
															It is the only domesticated species in the family
															Felidae and is often referred to as the domestic
															cat
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a
																		href="\editbreed"
																		class="btn btn-sm btn-neutral"
																	>
																		<em class="fa fa-pencil"></em>
																	</a>
																</div>
																<div>
																	<button
																		type="button"
																		class="btn btn-sm btn-square btn-neutral text-danger-hover"
																	>
																		<i class="bi bi-trash"></i>
																	</button>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td class="hidden-xs">3</td>
														<td>C-3</td>
														<td>British Shorthair</td>
														<td>
															Inconsistency in a breed classification and naming
															among registries
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a
																		href="\editbreed"
																		class="btn btn-sm btn-neutral"
																	>
																		<em class="fa fa-pencil"></em>
																	</a>
																</div>
																<div>
																	<button
																		type="button"
																		class="btn btn-sm btn-square btn-neutral text-danger-hover"
																	>
																		<i class="bi bi-trash"></i>
																	</button>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td class="hidden-xs">4</td>
														<td>C-4</td>
														<td>Ragdoll Cats</td>
														<td>
															The domestic short-haired and domestic long-haired
															cat types are not breeds
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a
																		href="\editbreed"
																		class="btn btn-sm btn-neutral"
																	>
																		<em class="fa fa-pencil"></em>
																	</a>
																</div>
																<div>
																	<button
																		type="button"
																		class="btn btn-sm btn-square btn-neutral text-danger-hover"
																	>
																		<i class="bi bi-trash"></i>
																	</button>
																</div>
															</div>
														</td>
													</tr>
													<tr>
														<td class="hidden-xs">5</td>
														<td>C-5</td>
														<td>Exotic Shorthair Cats</td>
														<td>different breeds by different registries</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a
																		href="\editbreed"
																		class="btn btn-sm btn-neutral"
																	>
																		<em class="fa fa-pencil"></em>
																	</a>
																</div>
																<div>
																	<button
																		type="button"
																		class="btn btn-sm btn-square btn-neutral text-danger-hover"
																	>
																		<i class="bi bi-trash"></i>
																	</button>
																</div>
															</div>
														</td>
													</tr>
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

export default viewbreedscats;
