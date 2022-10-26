import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Moderatorsidebar from "../components/moderatorsidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function moderatordashboard() {
	const [Verifiedadcount, setVerifiedadcount] = useState([]);
	const [Medicinecount, setMedicinecount] = useState([]);
	const [Dietcount, setDietcount] = useState([]);
	const [Verifiedpostcount, setVerifiedpostcount] = useState([]);
  const location = useLocation();
	// let history = useHistory();
	useEffect(() => {
		axios
		  .get("http://localhost:3001/service/getverifiedadcount")
		  .then((response) => {
			setVerifiedadcount(response.data);
		  });
		  axios.get("http://localhost:3001/mod/getverifiedadcount").then((response) => {
			setMedicinecount(response.data);
			});
			axios.get("http://localhost:3001/mod/getdietcount").then((response) => {
				setDietcount(response.data);
				});
			axios.get("http://localhost:3001/mod//getverifiedpostcount").then((response) => {
				setVerifiedpostcount(response.data);
				});
	  }, []);

	const navigate = useNavigate();
	return (
		<div>
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
													<a href="/moderatordashboard" className="header-topic">
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
													<span class="h3 font-bold mb-0">{Verifiedpostcount}</span>
												</div>
												<div class="col-auto"  style={{paddingLeft:110}}>
													<div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
													<i class="bi bi-file-earmark-post"></i>
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
													Verified Ads
													</span>
													<span class="h3 font-bold mb-0">{Verifiedadcount}</span>
												</div>
												<div class="col-auto"  style={{paddingLeft:120}}>
													<div class="icon icon-shape  bg-primary text-white text-lg rounded-circle">
													<i class="bi bi-file-earmark-check"></i>
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
														Diets
													</span>
													<span class="h3 font-bold mb-0">{Dietcount}</span>
												</div>
												<div class="col-auto"  style={{paddingLeft:150}}>
													<div class="icon icon-shape bg-info text-white text-lg rounded-circle">
													<i class="bi bi-egg"></i>
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
														Total Medications
													</span>
													<span class="h3 font-bold mb-0">{Medicinecount}</span>
												</div>
												<div class="col-auto"  style={{paddingLeft:100}}>
													<div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
													<i class="bi bi-bag-plus"/>
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
																View Diet Plans
															</button>
														</a>
														<a href="\mdadddogdiet" role="button" aria-pressed="true">
															<button type="submit" class="btn-tra">
																Add Diet Plans
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
