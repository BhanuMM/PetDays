import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
function dashboard() {
	return (
		<div >
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
										<h1 class="h2 mb-0 ls-tight">Admin Report Genaration Dashboard</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard / 
													</a>
													<a href="/reportgenarationdashboard" className="header-topic">
														Report Generation
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
							
							<div className="row">
								<div className="col-12">
									<div class="card shadow border-0 mb-6 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">ANALYTICAL REPORTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\Reportincome"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra" style={{width: 300}}>
																Advertiesment Income Report
															</button>
														</a>
														<a
															href="\reportuser"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra"  style={{width: 300}}>
																User Analysis Report
															</button>
														</a>
														<a
															href="\reportuser"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra"  style={{width: 300}}>
																Vaccinated Pet Analysis Report
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
									
								</div>
								{/* <div className="col-6">
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">DETAIL REPORT</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" >
														<a
															href="\reportvaccine"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra" >
																VACCINE USAGE
															</button>
														</a>
                                                        <a
															href="\reportpost"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra" >
																FORUM POST REPORT
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
                                    
									
								</div> */}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default dashboard;
