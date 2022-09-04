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
function viewsellers() {
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
										<h1 class="h2 mb-0 ls-tight">Service Providers</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
													Admin Dashboard/
													</a>
													<a href="/viewsellers" className="header-topic">
													Service Providers</a>
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
										<a href="\addseller" className="header-topic">
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
											>
												Add Service Provider
											</Button>
										</a>
									</div>
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Vaccines</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-striped table-bordered table-list responsive">
												<thead>
													<tr>
														<th class="hidden-xs text-center">User ID</th>
														<th class="hidden-xs text-center">User Name</th>
														<th class="hidden-xs text-center">Email</th>
														<th class="hidden-xs text-center">Address</th>
														<th class="hidden-xs text-center">
															Telephone Number
														</th>
													</tr>
												</thead>
												<tbody id="myTable">
													<tr>
														<td class="hidden-xs">1</td>
														<td>danny</td>
														<td>danny@gmail.com</td>
														<td>No 200, jayathissa mawatha</td>
														<td>0112254985</td>
													</tr>
													<tr>
														<td class="hidden-xs">2</td>
														<td>jane</td>
														<td>janeloaf@gmail.com</td>
														<td>queens street, colombo 5</td>
														<td>0113636525</td>
													</tr>
													<tr>
														<td class="hidden-xs">3</td>
														<td>gally</td>
														<td>gallyday@gmail.com</td>
														<td>sapumal road, colombo 5</td>
														<td>0774466985</td>
													</tr>
													<tr>
														<td class="hidden-xs">4</td>
														<td>denny</td>
														<td>dennypontin@gmail.com</td>
														<td>york street</td>
														<td>0708896436</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												Showing 10 items of Vaccines
											</span>
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

export default viewsellers;
