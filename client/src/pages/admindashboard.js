import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import medical from "../images/medical-01.png";
import man from "../images/man-01.png";
import men from "../images/user 4-01.jpg";
import food from "../images/foods-06.jpg";
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
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-4">Admin Dashboard</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Dashboard</a>
										</li>
									</ol>
								</nav>
								<div class="row">
									<div class="col-xl-3 col-md-6">
										<div class="card bg-primary text-white mb-4">
											<div class="card-body">Service Providers</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\viewusers">
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
											<div class="card-body">Registered Moderators</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\viewusers">
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
											<div class="card-body">Reports</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\reportgeneration">
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
											<div class="card-body">Advertiesments</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="/petmart">
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
								<div class="row pt-3">
									<div class="col-xl-6 col-md-6">
										<div class="card bg-card text-white mb-4">
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">Pet Categories</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={man}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\petcategories">
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
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">Medications</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={medical}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\medications">
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
								<div class="row pt-3">
									<div class="col-xl-6 col-md-6">
										<div class="card bg-card text-white mb-3">
											<div class="card-body">
												<div className="col">
													<h5 className="pt-3">Diet Plan</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={food}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\dietplans">
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
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">View Users</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={men}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>

											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\viewusers">
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
	);
}

export default dashboard;
