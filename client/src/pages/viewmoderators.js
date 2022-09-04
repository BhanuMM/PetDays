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
function viewmoderators() {
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
										<h1 class="h2 mb-0 ls-tight">Moderators</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/viewmoderator" className="header-topic">
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
									<div class="col col-xs-6 text-right">
										<a href="\addmoderator" className="header-topic">
											<Button
												variant="contained"
												component="label"
												style={{ backgroundColor: "#F66B0E" }}
											>
												Add Moderator
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
													</tr>
												</thead>
												<tbody id="myTable">
													<tr>
														<td class="hidden-xs">1</td>
														<td>john</td>
														<td>johnkey@gmail.com</td>
													</tr>
													<tr>
														<td class="hidden-xs">2</td>
														<td>sandy</td>
														<td>sandymartin@gmail.com</td>
													</tr>
													<tr>
														<td class="hidden-xs">3</td>
														<td>rockey</td>
														<td>rockeykale@gmail.com</td>
													</tr>
													<tr>
														<td class="hidden-xs">4</td>
														<td>menny</td>
														<td>menny123@gmail.com</td>
													</tr>
													<tr>
														<td class="hidden-xs">5</td>
														<td>lilly</td>
														<td>lillyfernando@gmail.com</td>
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

export default viewmoderators;
