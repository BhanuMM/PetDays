import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";

const bull = (
	<Box
		component="span"
		sx={{
			display: "inline-block",
			mx: "2px",
			transform: "scale(0.8)",
			maxHeight: "1000",
		}}
	>
		•
	</Box>
);
function viewvaccines() {
	const [listOfVaccines, setListOfVaccines] = useState([]);
  // let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/mod/getvaccines").then((response) => {
      setListOfVaccines(response.data);
    });
  }, []);

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
								<div style={{ paddingLeft: 20 }}>
									<div class="col col-xs-6 text-right"></div>
									<br />

									<div class="card shadow border-0 mb-7">
								<div class="card-header">
									<h5 class="mb-0">Available Vaccines</h5>
								</div>
								<div class="table-responsive">
									<table class="table table-hover table-nowrap text-center">
									<thead class="thead-light">
										<tr>
										<th scope="col" ><b><strong>Vaccine ID</strong></b></th>
										<th scope="col"><b><strong>Vaccine Name</strong></b></th>
										<th scope="col"><b><strong>Description</strong></b></th>
										<th scope="col"><b><strong>Next Iteration</strong></b></th>
                    
										</tr>
									</thead>
									<tbody>
									{listOfVaccines.map((value, key) => {
                            return (
										<tr>
										<td>{value.vacID}</td>
										<td>{value.vacName}</td>
										<td>{value.descr}</td>
										<td>{value.vacNextIter} Months</td>
										
										
										</tr>
										);
									})}
									</tbody>
									</table>
								</div>
								<div class="card-footer border-0 py-5">
									<span class="text-muted text-sm">
									
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
