import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import "../styles/spdashboard.css";
import dog from "../images/PetDays.png";
function dashboard() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
			<nav
			class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 border-bottom border-bottom-lg-0 border-end-lg"
			id="navbarVertical"  style={{ backgroundColor:"#EFEFEF" }} 
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
					<img class="dashboard-image" src={dog} alt="" style={{ height:150 , width: 150, marginLeft: 30}} />
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
									src="https://t4.ftcdn.net/jpg/02/47/31/89/360_F_247318925_vOUBhAtYnTIyJcVpxoOP50pWK01f6dtr.jpg"
									class="avatar avatar- rounded-circle"
								/>
								<span class="avatar-child avatar-badge bg-success"></span>
							</div>
						</a>
            <h1>Devid Person</h1>
					</div>
				</div>
				<div class="collapse navbar-collapse" id="sidebarCollapse">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="">
								<i class="bi bi-house"></i> Published Ads
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\reportgeneration">
								<i class="bi bi-bar-chart"></i> Pending Ads
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<i class="bi bi-bar-chart"></i> Rejected Ads
							</a>
						</li>
            <li class="nav-item">
							<a class="nav-link" href="#">
								<i class="bi bi-bar-chart"></i> Create New Ad
							</a>
						</li>
						{/* <li class="nav-item">
							<div class="panel-group" id="accordion">
								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a
												data-toggle="collapse"
												data-parent="#accordion"
												href="#collapse1"
											>
												<a class="nav-link" href="">
													<i class="bi bi-egg"></i> Diet P
													<i
														class="fa fa-caret-down"
														aria-hidden="true"
														style={{ paddingLeft: 120 }}
													></i>
												</a>
											</a>
										</h4>
									</div>
									<div id="collapse1" class="panel-collapse collapse in">
										<div class="panel-body">
											<a
												class="nav-link "
												style={{ paddingLeft: 70 }}
												href="\viewdietplanscats"
											>
												Diet Plans-Cats
											</a>
										</div>
										<div class="panel-footer">
											<a
												class="nav-link"
												style={{ paddingLeft: 70 }}
												href="\viewdietplans"
											>
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
													<i class="bi bi-bag-plus"></i> Medications
													<i
														class="fa fa-caret-down"
														aria-hidden="true"
														style={{ paddingLeft: 105 }}
													></i>
												</a>
											</a>
										</h4>
									</div>
									<div id="collapse2" class="panel-collapse collapse">
										<div class="panel-body">
											<a
												class="nav-link "
												style={{ paddingLeft: 70 }}
												href="\viewmedications"
											>
												Medicines
											</a>
										</div>
										<div class="panel-body">
											<a
												class="nav-link"
												style={{ paddingLeft: 70 }}
												href="\viewvaccines"
											>
												Vaccines
											</a>
										</div>
										<div class="panel-footer">
											<a
												class="nav-link"
												style={{ paddingLeft: 70 }}
												href="\viewvitamins"
											>
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
													<i class="bi bi-bookmarks"></i>Pet Categories
													<i
														class="fa fa-caret-down"
														aria-hidden="true"
														style={{ paddingLeft: 88 }}
													></i>
												</a>
											</a>
										</h4>
									</div>
									<div id="collapse3" class="panel-collapse collapse">
										<div class="panel-body">
											<a
												class="nav-link"
												href="\viewbreeds"
												style={{ paddingLeft: 70 }}
											>
												Petcategories-dogs
											</a>
										</div>
										<div class="panel-body">
											<a
												class="nav-link"
												href="\viewbreedscats"
												style={{ paddingLeft: 70 }}
											>
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
													<i class="bi bi-people"></i>User Management
													<i
														class="fa fa-caret-down"
														aria-hidden="true"
														style={{ paddingLeft: 62 }}
													></i>
												</a>
											</a>
										</h4>
									</div>
									<div id="collapse4" class="panel-collapse collapse">
										<div class="panel-body">
											<a
												class="nav-link"
												href="\viewmoderators"
												style={{ paddingLeft: 70 }}
											>
												Moderators
											</a>
										</div>
										<div class="panel-body">
											<a
												class="nav-link"
												href="\viewsellers"
												style={{ paddingLeft: 70 }}
											>
												Service providers
											</a>
										</div>
									</div>
								</div>
							</div>
						</li> */}
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
										<h1 class="h2 mb-0 ls-tight">Service Provider Dashboard</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/spdashboard" className="header-topic">
														Service Provider Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
														
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
								<div class="col-xl-4 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col-6">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Publised Advertiesments
													</span>
												
												</div>
                        <div className="col-4">
                        <span class="h3 font-bold mb-0">13</span>
                        </div>
												<div class="col-2">
													<div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
														<i class="bi bi-credit-card"></i>
													</div>
												</div>
											</div>
										
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col-6">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Pending Advertisments
													</span>
												
												</div>
                        <div className="col-4">
                        <span class="h3 font-bold mb-0">03</span>
                        </div>
												<div class="col-2">
													<div class="icon icon-shape  bg-primary text-white text-lg rounded-circle">
                          <i class="bi bi-clock-history"></i>
														
													</div>
												</div>
											</div>
											{/* <div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-success text-success me-2">
													<i class="bi bi-arrow-up me-1"></i>13%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div> */}
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col-6">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Rejected Advertiesments
													</span>
													
												</div>
                        <div class="col-4"><span class="h3 font-bold mb-0">02</span></div>
												<div class="col-2">
													<div class="icon icon-shape bg-info text-white text-lg rounded-circle">
													<i class="bi bi bi-people"></i>
													</div>
												</div>
											</div>
											{/* <div class="mt-2 mb-0 text-sm">
												<span class="badge badge-pill bg-soft-danger text-danger me-2">
													<i class="bi bi-arrow-down me-1"></i>-5%
												</span>
												<span class="text-nowrap text-xs text-muted">
													Since last month
												</span>
											</div> */}
										</div>
									</div>
								</div>
               
								{/* <div class="col-xl-3 col-sm-6 col-12">
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
								</div> */}
							</div>
              <div className="row mb-5 mt-5">
                <div className="col-8"></div>
                <div className="col-4">
                <div className="d-flex mt-5 mb-5">
														<a
															href="\viewbreeds"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra create-button" >
                              <i class="plus"></i>Create New Advertiesment
															</button>
														</a>
														
													</div>
              </div>
                </div>
            
							<div className="row">
								<div className="col-6">
									<div class="card shadow border-0 mb-6 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">PUBLISHED  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewbreeds"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Click here to see
															</button>
														</a>
														
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">PENDING  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
														
                            href="\viewdietplans"
                            role="button"
                            aria-pressed="true"
                          >
                            <button type="submit" class="btn-tra">
                            Click here to see
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
											<h5 class="mb-0 ">REJECTED  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
														<a
															href="\viewdietplans"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
                              Click here to see
															</button>
														</a>
													
													</div>
												</div>
											</span>
										</div>
									</div>
									{/* <div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">DRAFTED  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex">
                          <a
															href="\viewdietplans"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
                              Click here to see
															</button>
														</a>
														
													</div>
												</div>
											</span>
										</div>
									</div> */}
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
