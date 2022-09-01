import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
function dashboard() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<nav
					class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
					id="navbarVertical"
				>
					<div class="container-fluid">
						<button
							class="navbar-toggler ms-n2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#sidebarCollapse"
							aria-controls="sidebarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
							<img class="dashboard-image" src={dog} alt="" />
						</a>
						<div class="navbar-user d-lg-none">
							<div class="dropdown">
								<a
									href="#"
									id="sidebarAvatar"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div class="avatar-parent-child">
										<img
											alt="Image Placeholder"
											src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
											class="avatar avatar- rounded-circle"
										/>
										<span class="avatar-child avatar-badge bg-success"></span>
									</div>
								</a>
							</div>
						</div>
						<div class="collapse navbar-collapse" id="sidebarCollapse">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-house"></i> Dashboard
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-bar-chart"></i> Report Generation
									</a>
								</li>
								<li class="nav-item">
									<div class="panel-group" id="accordion">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse1"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-egg"></i> Diet Plans<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:120}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse1" class="panel-collapse collapse in">
												<div class="panel-body">
													<a class="nav-link "style={{paddingLeft:70}} href="#">
														Diet Plans-Cats
													</a>
												</div>
												<div class="panel-footer">
													<a class="nav-link" style={{paddingLeft:70}} href="#">
														Diet Plans-Dogs
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse2"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-bag-plus"></i> Medications<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:105}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse2" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link "style={{paddingLeft:70}} href="#">
														Medicines
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" style={{paddingLeft:70}}href="#">
														Vaccines
													</a>
												</div>
												<div class="panel-footer">
													<a class="nav-link" style={{paddingLeft:70}} href="#">
														Vitamins
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse3"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-bookmarks"></i>Pet Categories<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:88}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse3" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Petcategories-dogs
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Petcategories-cats
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse4"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-people"></i>User Management<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:62}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse4" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Moderators
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Service providers
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<hr class="navbar-divider my-5 opacity-20" />
							<div class="mt-auto"></div>
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-person-square"></i> Account
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-box-arrow-left"></i> Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
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
														Admin Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
														Forum Posts
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
														Income
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
														New advertisments
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
														Moderators
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
														Services
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
											<h5 class="mb-0 ">PET CATEGORIES</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewbreedscats"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Dogs
															</button>
														</a>
														<a href="" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Cats
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
															href="\viewbreedscats"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Dogs
															</button>
														</a>
														<a href="" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																cats
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
													<div className="d-flex">
														<a
															href="\viewbreedscats"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Diet Plans - Dogs
															</button>
														</a>
														<a href="" role="button" aria-pressed="true">
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
											<h5 class="mb-0 ">USER MANAGEMENT</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewbreedscats"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Moderators
															</button>
														</a>
														<a href="" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Service providers
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

export default dashboard;
