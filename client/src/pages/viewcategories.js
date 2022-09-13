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
function viewcategories() {
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
									<div class="col col-xs-6 text-right">
										<a href="/addpetcategories" className="header-topic">
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
											>
												Add Animal Category
											</Button>
										</a>
									</div>
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Categories</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-striped table-bordered table-list responsive">
												<thead>
													<tr>
														<th class="hidden-xs text-center">Category ID</th>
														<th class="hidden-xs text-center">Category Name</th>
														<th class="hidden-xs text-center">Description</th>
														<th class="hidden-xs text-center"></th>
													</tr>
												</thead>
												<tbody id="myTable">
													<tr>
														<td class="hidden-xs">1</td>

														<td>Cats</td>
														<td>
															stands among America's most popular dog breeds.
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a href="#" class="btn btn-sm btn-neutral">
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
																<a
																	href="\viewbreedscats"
																	role="button"
																	aria-pressed="true"
																>
																	<button type="submit" class="btn-view">
																		View Breeds
																	</button>
																</a>
															</div>
														</td>
													</tr>
													<tr>
														<td class="hidden-xs">2</td>

														<td>Dogs</td>
														<td>
															As always, the Labrador Retriever tops the list —
															this time for the 31st year!{" "}
														</td>
														<td class="text-end">
															<div style={{ display: "flex" }}>
																<div style={{ paddingRight: 5 }}>
																	<a href="#" class="btn btn-sm btn-neutral">
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
																<a
																	href="\viewbreeds"
																	role="button"
																	aria-pressed="true"
																>
																	<button type="submit" class="btn-view">
																		View Breeds
																	</button>
																</a>
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

export default viewcategories;
