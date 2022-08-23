import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function dashboard() {
	return (
		<div class="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row ">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Sidebar />
					</div>
					<div className="col-10" id="layoutSidenav">
						<div id="layoutSidenav_nav"></div>
						<div id="layoutSidenav_content">
							<main>
								<div class="container-fluid px-4">
									<h1 class="mt-4">Dashboard</h1>
									<ol class="breadcrumb mb-4">
										<li class="breadcrumb-item active">Dashboard</li>
									</ol>
									<div class="row">
										<div class="col-xl-3 col-md-6">
											<div class="card bg-primary text-white mb-4">
												<div class="card-body">Primary Card</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														View Details
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-md-6">
											<div class="card bg-warning text-white mb-4">
												<div class="card-body">Warning Card</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														View Details
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-md-6">
											<div class="card bg-success text-white mb-4">
												<div class="card-body">Success Card</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														View Details
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-md-6">
											<div class="card bg-danger text-white mb-4">
												<div class="card-body">Danger Card</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														View Details
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row pt-4">
										<div class="col-xl-6 col-md-6">
											<div class="card bg-card text-white mb-4">
												<div class="card-body">Pet Categories</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														See More
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-6 col-md-6">
											<div class="card bg-card text-white mb-4">
												<div class="card-body">Medications</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														See More
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row pt-4">
										<div class="col-xl-6 col-md-6">
											<div class="card bg-card text-white mb-4">
												<div class="card-body">Diet Plan</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														See More
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
										<div class="col-xl-6 col-md-6">
											<div class="card bg-card text-white mb-4">
												<div class="card-body">View Users</div>
												<div class="card-footer d-flex align-items-center justify-content-between">
													<a class="small text-white stretched-link" href="#">
														See More
													</a>
													<div class="small text-white">
														<i
															class="fa fa-angle-double-right"
															aria-hidden="true"
														></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default dashboard;
