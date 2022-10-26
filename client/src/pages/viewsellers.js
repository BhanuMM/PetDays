import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function viewsellers() {
	const [listOfServiceproviders, setlistOfServiceproviders] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/admin/getserviceprovider")
			.then((response) => {
				setlistOfServiceproviders(response.data);
			});
	}, []);

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
										<h1 class="h2 mb-0 ls-tight">Service Providers</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/viewsellers" className="header-topic">
														Service Providers
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
								<div style={{ paddingLeft: 20 }}>
									<div class="col col-xs-6 text-right"></div>
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Service Providers</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														{/* <th scope="col">
															<b>
																<strong>User ID </strong>
															</b>
														</th> */}
														<th scope="col">
															<b>
																<strong>User Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Email</strong>
															</b>
														</th>

														<th scope="col">
															<b>
																<strong></strong>
															</b>
														</th>
													</tr>
												</thead>
												<tbody>
													{listOfServiceproviders.map((value, key) => {
														return (
															<tr>
																{/* <td class="hidden-xs">{value.userID}</td> */}

																<td>{value.username}</td>
																<td>{value.email}</td>
															</tr>
														);
													})}
												</tbody>
											</table>
										</div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm"></span>
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

export default viewsellers;
