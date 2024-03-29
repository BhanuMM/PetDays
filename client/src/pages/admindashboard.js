import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
function dashboard() {
	return (
		<div>
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
										<h1 class="h2 mb-0 ls-tight">Admin Dashboard</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard
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
														Income for <br /> this month
													</span>
													<span class="h3 font-bold mb-0">Rs.7500.00</span>
												</div>
												<div class="col-auto " style={{paddingLeft:100}}>
													<div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
														<i class="bi bi-credit-card"></i>
													</div>
												</div>
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
														Recently Posted <br /> Advertisments
													</span>
													<span class="h3 font-bold mb-0">20</span>
												</div>
												<div class="col-auto"style={{paddingLeft:100}}>
													<div class="icon icon-shape  bg-primary text-white text-lg rounded-circle">
													<i class="bi bi-file-earmark-post-fill"></i>
													</div>
												</div>
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
														Recently Joined <br />
														Moderators
													</span>
													<span class="h3 font-bold mb-0">14</span>
												</div>
												<div class="col-auto" style={{paddingLeft:100}}>
													<div class="icon icon-shape bg-info text-white text-lg rounded-circle">
													<i class="bi bi-people"></i>
													</div>
												</div>
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
														Recently Joined Service providers
													</span>
													<span class="h3 font-bold mb-0">20</span>
												</div>
												<div class="col-auto" style={{paddingLeft:100}}>
													<div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
													<i class="bi bi-person"></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div class="card shadow border-0 mb-6 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">ANIMAL CATEGORIES</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewcategories"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																View Animal Categories
															</button>
														</a>
														<a
															href="\addpetcategories"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Add Category
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
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
															href="\viewmedications"
															role="button"
															aria-pressed="true"
														>
															<button
																type="submit"
																class="btn-tra"
																style={{ width: 115 }}
															>
																Medicines
															</button>
														</a>
														<a
															href="\viewvitamins"
															role="button"
															aria-pressed="true"
														>
															<button
																type="submit"
																class="btn-tra"
																style={{ width: 115 }}
															>
																Vitamins
															</button>
														</a>
														<a
															href="\viewvaccines"
															role="button"
															aria-pressed="true"
														>
															<button
																type="submit"
																class="btn-tra"
																style={{ width: 115 }}
															>
																Vaccines
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
											<h5 class="mb-0 ">DIET PLANS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" style={{paddingLeft:150}}>
														<a
															href="\viewdietplans"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra" >
																View Diet Plans
															</button>
														</a>
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">USER MANAGEMENT</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewmoderators"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Moderators
															</button>
														</a>
														<a
															href="\viewsellers"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Service providers
															</button>
														</a>
													</div>
												</div>
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

export default dashboard;
