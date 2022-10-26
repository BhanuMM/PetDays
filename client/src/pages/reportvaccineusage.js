import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import { saveAs } from 'file-saver';

function viewmedications() {
	
	const [vaccinereport, setvaccinereport] = useState([]);
	var vaccinereport2 = [];
	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/report/getvaccinereport").then((response) => {
			setvaccinereport(response.data);
		});
	}, []);

	
	   function createAndDownloadPdf (){
		axios.get('http://localhost:3001/report/createvacpdf')
		  .then(() => axios.get('http://localhost:3001/report/fetchvacpdf', { responseType: 'blob' }))
		  .then((res) => {
			const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
	
			saveAs(pdfBlob, 'PetDays-Report.pdf');
		  })
		// axios.post("http://localhost:3001/report/createpdf").then((response) => {
			//   if (response.data.error) {
			// 	alert(response.data.error);
			//   } else {
			// 	// navigate("/admindashboard");
			//   }
			// });
	  }
	
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
										<h1 class="h2 mb-0 ls-tight">Vaccine Usage Report</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Report Dashboard /
													</a>
                                                    
													<a href="/reportvaccine" className="header-topic">
														Vaccine Usage Report
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
									{/* <div
										class="input-group"
										style={{ width: 575, float: "right" }}
									>
										<p
											class="fw-semibold "
											style={{ paddingRight: 10, paddingTop: 10 }}
										>
											Search Medicine
										</p>
										<input
											type="search"
											class="form-control rounded"
											placeholder="Enter Medicine Name"
											aria-label="Search"
											aria-describedby="search-addon"
											style={{ height: 40 }}
											onChange={(event) => {
												setSearchTerm(event.target.value);
											}}
										/> */}
									{/* </div> */}
									<br />
									<br />
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Vaccine Usage Report</h5>
											<button onClick={createAndDownloadPdf}>Download PDF</button>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Vaccine Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Total Usage</strong>
															</b>
														</th>
														
													</tr>
												</thead>
												<tbody>
												
													{
													vaccinereport.map((value, key) => {
														return (
															<tr>
																<td>{value.vacName}</td>
																<td>{value.vaccount}</td>
																
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

export default viewmedications;
