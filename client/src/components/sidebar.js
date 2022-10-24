import "../styles/sidebar.css";
import React from "react";
import dog from "../images/PetDays.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function sidebar() {

	const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        role : "",
        status: false,
      });
	  const navigate = useNavigate();
      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/authuser", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                role: response.data.role,
                status: true,
              });
              console.log(response.data.role);
            }
          });
      }, []);
 
	const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", role: "",id: 0, status: false });
		navigate("/home");
      };
	return (
		<nav
			class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 border-bottom border-bottom-lg-0 border-end-lg"
			id="navbarVertical"
			style={{ backgroundColor: "#EFEFEF" }}
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
					<img
						class="dashboard-image"
						src={dog}
						alt=""
						style={{ height: 150, width: 150, marginLeft: 30 }}
					/>
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
							<a class="nav-link" href="\index">
								<i class="bi bi-house"></i> Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\admindashboard">
							<i class="bi bi-bar-chart"></i>Dashboard
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\reportgeneration">
								<i class="fa fa-line-chart" aria-hidden="true"></i> Report
								Generation
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\viewadvertisements">
								<i class="fa fa-file" aria-hidden="true"></i> Advertisements
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
														style={{ paddingLeft: 115 }}
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
												href="\viewdietplans"
											>
												View Diet Plans
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
												href="\viewcategories"
												style={{ paddingLeft: 70 }}
											>
												View Animal Categories
											</a>
										</div>
										<div class="panel-body">
											<a
												class="nav-link"
												href="\addpetcategories"
												style={{ paddingLeft: 70 }}
											>
												Add new category
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
														style={{ paddingLeft: 65 }}
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
							<a class="nav-link" href="/myprofileadmin">
								<i class="bi bi-person-square"></i> Account
							</a>
						</li>
						<li class="nav-item">
						<button type="submit" onClick={logout} >
								 <i class="bi bi-box-arrow-left"></i>   logout
               </button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default sidebar;
