import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Box from '@mui/material/Box';

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
	>
	  •
	</Box>
);
function viewvaccines() {
	return (
		<div class="container-fluid">
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
										<h1 class="h2 mb-0 ls-tight">Vaccines</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
														 Vaccines
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
							<div style={{paddingLeft:20}}>
								<div class="col col-xs-6 text-right">
								</div>
								<br />

								<div class="card shadow border-0 mb-7">
								<div class="card-header">
									<h5 class="mb-0">Available Vaccines</h5>
								</div>
								<div class="table-responsive">
									<table class="table table-hover table-nowrap text-center">
									<thead class="thead-light">
										<tr>
										<th scope="col" >Vaccine ID</th>
										<th scope="col">Vaccine Name</th>
										<th scope="col">Description</th>
										<th scope="col">Next Iteration</th>
										<th></th>
                    
										</tr>
									</thead>
									<tbody>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
										<tr>
										<td>001</td>
										<td>Feb 15, 2021</td>
										<td>zdsdsf sfsd dsfsdgsdfs g gadadfgdf f dsgd fsgd</td>
										<td>Feb 15, 2021</td>
										</tr>
									</tbody>
									</table>
								</div>
								<div class="card-footer border-0 py-5">
									<span class="text-muted text-sm">
									Showing 10 items of Vaccines
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

export default viewvaccines;
