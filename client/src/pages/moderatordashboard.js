import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Moderatorsidebar from "../components/moderatorsidebar";

function moderatordashboard() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
			<div className="">
					<Moderatorsidebar />
				</div>
				
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Moderator Dashboard</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Moderator Dashboard
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
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Verified Posts
													</span>
													<span class="h3 font-bold mb-0">$750.90</span>
												</div>
												<div class="col-auto">
													<div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
														<i class="bi bi-credit-card"></i>
													</div>
												</div>
											</div>
											<div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-success text-success me-2">
													<i class="bi bi-arrow-up me-1"></i>13%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
													Verified Advertisments
													</span>
													<span class="h3 font-bold mb-0">$750.90</span>
												</div>
												<div class="col-auto">
													<div class="icon icon-shape  bg-primary text-white text-lg rounded-circle">
														<i class="bi bi bi-people"></i>
													</div>
												</div>
											</div>
											<div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-success text-success me-2">
													<i class="bi bi-arrow-up me-1"></i>13%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Diet
													</span>
													<span class="h3 font-bold mb-0">1.400</span>
												</div>
												<div class="col-auto">
													<div class="icon icon-shape bg-info text-white text-lg rounded-circle">
														<i class="bi bi-clock-history"></i>
													</div>
												</div>
											</div>
											<div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-danger text-danger me-2">
													<i class="bi bi-arrow-down me-1"></i>-5%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Total Medications
													</span>
													<span class="h3 font-bold mb-0">1.400</span>
												</div>
												<div class="col-auto">
													<div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
														<i class="bi bi-clock-history"></i>
													</div>
												</div>
											</div>
											<div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-danger text-danger me-2">
													<i class="bi bi-arrow-down me-1"></i>-5%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div class="card shadow border-0 mb-6 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">DIET PLANS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\mddogdiet"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Diet Plans - Dogs
															</button>
														</a>
														<a href="\mdcatdiet" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Diet Plans - Cats
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">POSTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\mdnewpendingposts"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Pending Posts
															</button>
														</a>
														<a href="\mdnewverifyposts" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Verified Posts
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">MEDICATIONS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\mdsinglemed"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra" style={{width:115}}>
																Medicines
															</button>
														</a>
														<a href="\mdsinglevitamin" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra"  style={{width:115}}>
															Vitamins
															</button>
														</a>
														<a href="\mdsinglevacc" role="button" aria-pressed="true" >
															<button type="submit" class="btn-tra"  style={{width:115}}>
															Vaccines
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">ADVERTISMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\mdpendingads"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Pending Advertisments
															</button>
														</a>
														<a href="\mdverifyads" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Verified Advertisements
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>{" "}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default moderatordashboard;
