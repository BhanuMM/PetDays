import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import medical from "../images/medicine 3-01.jpg";
import man from "../images/pw.jpg";
import men from "../images/user 4-01.jpg";
import food from "../images/foods-06.jpg";
import report from "../images/postsmd.png";
function dashboard() {
	return (
		<div class="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row pt-0 mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Sidebar />
					</div>
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-4">Admin Dashboard</h1>
								<hr />
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">
												Dashboard
											</a>
										</li>
									</ol>
								</nav>
								<div class="row pt-3">
									<div class="col-xl-6 col-md-6">
										<div class="card bg-card text-white mb-4">
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">Pet Categories / Breeds</h5>
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
												<a
													class="small text-white stretched-link"
													href="\petcategories"
												>
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
												<a
													class="small text-white stretched-link"
													href="\medications"
												>
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
												<a
													class="small text-white stretched-link"
													href="\dietplans"
												>
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
													<h5 className="pt-3">User management</h5>
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
												<a
													class="small text-white stretched-link"
													href="\viewusers"
												>
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
										<div class="card bg-card text-black mb-4">
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">Report Generation</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={report}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a
													class="small text-white stretched-link"
													href="\reportgeneration"
												>
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
