import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from "../components/navbarspecial";
import drug from "../images/drugs.png";
import man from "../images/man-01.png";
import cat from "../images/cat-01.png";
import diet from "../images/health.png";
import postmd from "../images/postsmd.png";
import addmd from "../images/addmd.png";

function moderatordashboard() {
	return (
		<div class="container-fluid moderatordashboard">
			<div className="row">
				<Navbar />
			</div>
			<div className="row mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Moderatorsidebar />
					</div>
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-4">Advertisments</h1><hr/>
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
                                        <a class="small text-white stretched-link" href="\mdpendingads"><div class="card-body">
                                                <div class='title'>
                                                    Pending<br/>Advertisments
                                                </div><div class="vr"></div>
                                                <div class='count'>
                                                02
                                                </div>
                                            </div></a>
											{/* <div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="#">
													View Details
												</a>
												<div class="small text-white">
													<i
														class="fa fa-angle-double-right"
														aria-hidden="true"
													></i>
												</div>
											</div> */}
										</div>
									</div>
									<div class="col-xl-3 col-md-6">
										<div class="card bg-warning text-white mb-4">
                                        <a class="small text-white stretched-link" href="\mdverifyads">
													
										
                    <div class="card-body">
                        <div class='title'>
                            Verified<br/>Advertisments
                        </div><div class="vr"></div>
                        <div class='count'>
                          02
                        </div>
                      </div></a>
											
											{/* <div class="card-footer d-flex align-items-center justify-content-between">
												<a class="small text-white stretched-link" href="#">
													View Details
												</a>
												<div class="small text-white">
													<i
														class="fa fa-angle-double-right"
														aria-hidden="true"
													></i>
												</div>
											</div> */}
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

export default moderatordashboard;
