import "../styles/sidebar.css";
import React from "react";
import dog from "../images/PetDays.png";
function sidebar() {
	return (
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
							<a class="nav-link" href="">
								<i class="bi bi-house"></i> Dashboard
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\reportgeneration">
								<i class="bi bi-bar-chart"></i> Report Generation
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<i class="bi bi-bar-chart"></i> Advertisements
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
												<a class="nav-link" href="">
													<i class="bi bi-egg"></i> Diet Plans
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
	);
}

export default sidebar;
