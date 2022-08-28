import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from "../components/dashnavbar";
import drug from "../images/drugs.png";
import man from "../images/man-01.png";
import cat from "../images/cat-01.png";
import diet from "../images/health.png";
import postmd from "../images/postsmd.png";
import addmd from "../images/addmd.png";
import Serviceprovidersidebar from "../components/serviceprovidersidebar";
function serviceproviderdashboard() {
	return (
		<div class="container-fluid moderatordashboard">
			<div className="row mb-5">
				<Navbar />
			</div>
			<div className="row mt-4">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color pl-5">
						<Serviceprovidersidebar />
					</div>
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-4">Service Provider Dashboard</h1><hr/>
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
											<div class="card-body">
                        <div class='title'>
                            All<br/>Advertiesments
                        </div><div class="vr"></div>
                        <div class='count'>
                          02
                        </div>
                      </div>
										</div>
									</div>
									<div class="col-xl-3 col-md-6">
										<div class="card bg-info text-white mb-4">
                    <div class="card-body">
                        <div class='title'>
                            Approved<br/>Advertiesments
                        </div><div class="vr"></div>
                        <div class='count'>
                          02
                        </div>
                      </div>
											
											
										</div>
									</div>
									<div class="col-xl-3 col-md-6">
										<div class="card bg-success text-white mb-4">
                    <div class="card-body">
                        <div class='title-med'>
                          Pending<br/>Advertiesments
                        </div><div class="vr"></div>
                        <div class='count-med'>
                          02
                        </div>
                      </div>
											
											
										</div>
									</div>
									<div class="col-xl-3 col-md-6">
										<div class="card bg-danger text-white mb-4">
                    <div class="card-body">
                        <div class='title-diet'>
                          Rejected<br/>Advertiesments
                        </div><div class="vr"></div>
                        <div class='count-diet'>
                          02
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
													<h5 className="pt-3">Create New Advertiesment</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={postmd}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\addservices">
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
													<h5 className="pt-3">Approved Advertiesments</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={postmd}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\approved">
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
									{/* <div class="col-xl-6 col-md-6">
										<div class="card bg-card text-white mb-3">
											<div class="card-body">
												<div className="col">
													<h5 className="pt-3">Medications</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={drug}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>
											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="mdmedications">
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
									</div> */}
									<div class="col-xl-6 col-md-6">
										<div class="card bg-card text-white mb-4">
											<div class="card-body card-style">
												<div className="col">
													<h5 className="pt-3">Pending Advertiesment</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={postmd}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>

											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\pendingads">
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
													<h5 className="pt-3">Rejected Advertiesment</h5>
												</div>
												<div className="col-float-right">
													<p className="lead">
														<img
															src={postmd}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</p>
												</div>
											</div>

											<div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="\rejected">
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

export default serviceproviderdashboard;
