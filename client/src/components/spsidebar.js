import "../styles/sidebar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Profilepic from "../images/profile.jpg";
import { AuthContext } from "../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
function spsidebar() {
	const [authState, setAuthState] = useState({
		username: "",
		id: 0,
		role: "",
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
		setAuthState({ username: "", role: "", id: 0, status: false });
		navigate("/home");
	};
	return (
		<nav
			class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 border-bottom border-bottom-lg-0 border-end-lg"
			id="navbarVertical"
			style={{ backgroundColor: "#EFEFEF" }}
		>
			<div class="container-fluid" style={{ width: 250 }}>
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
				<br />
				<br />
				<br />
				<br />
				<br />
				<div style={{ paddingLeft: 20 }}>
					<a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
						<img
							class="dashboard-image"
							src={Profilepic}
							alt=""
							style={{
								height: 90,
								width: 90,
								marginLeft: 40,
								borderRadius: "50%",
							}}
						/>
					</a>
					<br />
					<br />
				</div>
				<div>
					<center>
						<strong>
							<p style={{ fontSize: 20 }}>
								Hello !<br />
							</p>
							<p style={{ fontSize: 18 }}>{authState.username}</p>
						</strong>
						<p style={{ fontSize: 15 }}>Service Provider</p>
					</center>
				</div>
				<center>
					<hr style={{ width: 200, paddingLeft: 40, color: "#205375" }} />
				</center>

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
				<br />
				<div class="collapse navbar-collapse" id="sidebarCollapse">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="\index">
								<i class="bi bi-house"></i> Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="\spdashboard">
								<i class="bi bi-bar-chart"></i> Dashboard
							</a>
						</li>
						<li class="nav-item">
							<div class="panel-group" id="accordion">
								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a class="nav-link" href="\spmyads">
												<i class="bi bi-people"></i> Payment Pending Ads
											</a>
										</h4>
									</div>
								</div>
								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a class="nav-link" href="\sppendingads">
												<i class="bi bi-bag-plus"></i> Pending Advertisments
											</a>
										</h4>
									</div>
								</div>
								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a class="nav-link" href="\sppublishedads">
												<i class="bi bi-bookmarks"></i>Published Advertisments
											</a>
										</h4>
									</div>
								</div>
								<div class="panel panel-default">
									<div class="panel-heading">
										<h4 class="panel-title">
											<a class="nav-link" href="\sprejectedads">
												<i class="bi bi-bag-plus"></i> Rejected Advertisments
											</a>
										</h4>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<hr class="navbar-divider my-5 opacity-20" />
					<div class="mt-auto"></div>
					<ul class="navbar-nav">

						
						<li class="nav-item">
						<a class="nav-link"  >
								 <button type="submit" onClick={logout} >
								 <i class="bi bi-box-arrow-left"></i>   logout
               </button>
							</a>

						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default spsidebar;
