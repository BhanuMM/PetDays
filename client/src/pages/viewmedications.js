import React from "react";
import Sidebar from "../components/sidebar";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
function viewmedications() {
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
										<h1 class="h2 mb-0 ls-tight">Medicines</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
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
									<div class="col col-xs-6 text-right"></div>

									<div
										class="input-group"
										style={{ width: 430, float: "right" }}
									>
										<input
											type="search"
											class="form-control rounded"
											placeholder="Search Medicines"
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
										<h5 class="mb-0">Available Medicines</h5>
									</div>
									<div class="table-responsive">
										<table class="table table-striped table-bordered table-list responsive text-center">
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
													
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
													</td>
												</tr>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
													</td>
												</tr>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
													</td>
												</tr>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
													</td>
												</tr>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
													</td>
												</tr>
												<tr>
													<td>001</td>
													<td>Feb 15, 2021</td>
													<td>
														zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd
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
					</main>
				</div>
			</div>
		</div>
	);
}

export default viewmedications;
