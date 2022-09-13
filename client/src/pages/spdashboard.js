import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import "../styles/spdashboard.css";
import dog from "../images/PetDays.png";
import AddIcon from '@mui/icons-material/Add';
import Man from "../images/man.jpg";
import Navbar from "../components/navbar";
import Moderatorsidebar from "../components/moderatorsidebar";
// import AddIcon from '@mui/icons-material/Add';


import Sellersidebar from "../components/serviceprovidersidebar";
function dashboard() {
	return (
		
		
		<div class="container-fluid">
			
			
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary ">
					<div className="">
				< Sellersidebar/>
			</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Service Provider Dashboard</h1>
										<div className="navbar-collapse">
										<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
											
											<li className="nav-item active">
												<a className="nav-link" href="petmart"><h4>Pet Mart</h4></a>
											</li>
											<li className="nav-item active">
												<a className="nav-link" href="forum"><h4>Pet Talk</h4></a>
											</li>
											
								
           								 </ul>
										</div>
										
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
											
										</div>
									</div>
								</div>
               
								
							</div>
              <div className="row mb-5 mt-5">
                <div className="col-8"></div>
                <div className="col-4">
                <div className="d-flex mt-5 mb-5">
														<a
															href="\addpetmartadd"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class=" create-button"   style={{backgroundColor: '#F66B0E'}}>
                              <AddIcon/> Create New Advertiesment
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
															href="\approved"
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
														
                            href="\pendingads"
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
															href="\rejected"
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
