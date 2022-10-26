import React from "react";
import "../styles/footerspecial.css";
import "../styles/dashboard.css";
import "../styles/spdashboard.css";
import Navbarsp from "../components/navsp";
import Spsidebar from "../components/spsidebar";
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function dashboard() {
	
	const [x, setx] = useState(0);
	const [y, sety] = useState(0);
	const [z, setz] = useState(0);


	useEffect(() => {
		axios.get("http://localhost:3001/service/getpublishedadcount").then((response) => {
			console.log(response.data[0]);
			if(response.data[0] != undefined){
				setx(response.data[0].count);
				
			}
			if(response.data[1] != undefined){
				
				sety(response.data[1].count);
				
			}
			if(response.data[2] != undefined){
				
				setz(response.data[2].count);
			}
			
			

			
		  });
	  }, []);

	return (
		
		
		<div class="container-fluid">
			
			<Navbarsp/>
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary ">
					<div className="">
				< Spsidebar/>
			</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					
					<br /><br /><br /><br /><br /><br />
					<div style={{paddingLeft:1100}}>
                <a href="\addpetmartadd" className="header-topic">
									<Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E', height:40, width:275}}>
                    Add New Advertisment
                  </Button>
								</a>
								{/* <a href="\adpayment" className="header-topic">
									<Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E', height:40, width:275}}>
                    payment
                  </Button>
								</a> */}
              </div><br />
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
								<div class="col-xl-4 col-sm-6 col-12">
									<div class="card shadow border-0">
										<div class="card-body">
											<div class="row">
												<div class="col-6">
													<span class="h6 font-semibold text-muted text-sm d-block mb-2">
														Published Advertiesments
													</span>
												
												</div>
												<div className="col-4">
												<span class="h3 font-bold mb-0">{y}</span>
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
                        <span class="h3 font-bold mb-0">{x}</span>
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
                        <div class="col-4"><span class="h3 font-bold mb-0">{z}</span></div>
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
     
							<br />
							<div className="row">
								<div className="col-6">
									<div class="card shadow border-0 mb-6 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">PAYMENT PENDING ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" style={{paddingLeft:160}}>
														<a
															href="\spmyads"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
																Click here to view
															</button>
														</a>
														
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">PUBLISHED  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" style={{paddingLeft:160}}>
														<a
														
                            href="\sppublishedads"
                            role="button"
                            aria-pressed="true"
                          >
                            <button type="submit" class="btn-tra">
                            Click here to view
                            </button>
                          </a>
													
													</div>
												</div>
											</span>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div class="card shadow border-0 mb-7 bg-white" >
										<div class="card-header">
											<h5 class="mb-0 ">PENDING  ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" style={{paddingLeft:160}}>
														<a
															href="\sppendingads"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
                              								Click here to view
															</button>
														</a>
													
													</div>
												</div>
											</span>
										</div>
									</div>
									<div class="card shadow border-0 mb-7 bg-white">
										<div class="card-header">
											<h5 class="mb-0 ">REJECTED ADVERTIESMENTS</h5>
										</div>
										<div class="table-responsive"></div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm">
												<div class="btn-group-horizontal">
													<div className="d-flex" style={{paddingLeft:160}}>
                          <a
															href="\sprejectedads"
															role="button"
															aria-pressed="true"
														>
															<button type="submit" class="btn-tra">
                              Click here to view
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
