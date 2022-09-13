import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
function viewdietplans() {
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
										<h1 class="h2 mb-0 ls-tight">Diet Plans</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/viewdietplans" className="header-topic">
														Diet Plans
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
									<div class="col col-xs-6 text-right"></div>
									<br />
									<p class="fw-semibold " style={{ paddingRight: 40 }}>
										Filtery by :
									</p>
									<div class="search-line" style={{ display: "flex" }}>
										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
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
														width: 150,
														borderColor: "#205375",
													}}
												>
													Pet Category
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Cats
													</a>
													<a class="dropdown-item" href="#">
														Dogs
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
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
														width: 150,
														borderColor: "#205375",
													}}
												>
													Pet Breed
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Bullmastiff
													</a>
													<a class="dropdown-item" href="#">
														Golden Retriever
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
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
														width: 150,
														borderColor: "#205375",
													}}
												>
													Age Range
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														0-10
													</a>
													<a class="dropdown-item" href="#">
														10-20
													</a>
													<a class="dropdown-item" href="#">
														20-30
													</a>
													<a class="dropdown-item" href="#">
														30-40
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
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
														width: 150,
														borderColor: "#205375",
													}}
												>
													Weight Range
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														0-10
													</a>
													<a class="dropdown-item" href="#">
														10-20
													</a>
													<a class="dropdown-item" href="#">
														20-30
													</a>
													<a class="dropdown-item" href="#">
														30-40
													</a>
												</div>
											</div>
										</p>
										<div class="dropdown" style={{ paddingRight: 40 }}>
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

										<div class="input-group" style={{ width: 430 }}>
											<input
												type="search"
												class="form-control rounded"
												placeholder="Search Diet Plans"
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
									<br />
									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Diet Plans</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-striped table-bordered table-list responsive text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col"><b><strong>Diet Plan ID</strong></b></th>
														<th scope="col"><b><strong>Diet Plan Name</strong></b></th>
														<th scope="col"><b><strong>Description</strong></b></th>
														<th scope="col"><b><strong>Category</strong></b></th>
														<th scope="col"><b><strong>Breed</strong></b></th>
														<th scope="col"><b><strong>Age Range</strong></b></th>
														<th scope="col"><b><strong>Weight Range</strong></b></th>
														
														<th></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
													</tr>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
													</tr>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
													</tr>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
													</tr>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
													</tr>
													<tr>
														<td>001</td>
														<td>Feb 15, 2021</td>
														<td>
															zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
														</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
														<td>Feb 15, 2021</td>
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

export default viewdietplans;
