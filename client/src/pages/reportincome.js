import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import BarChart from "../components/BarChart";
  
 
function viewmedications() {
	
	const [ListOfIncome, setListOfIncome] = useState([]);
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	

	useEffect(() => {
		axios.get("http://localhost:3001/report/getincomereport").then((response) => {
			setListOfIncome(response.data);
		});
	}, []);
	let x ={
		labels: ListOfIncome.map((data) => month[data.umonth-1]),
		datasets: [
		  {
			label: "Total Income (Rs.)",
			data: ListOfIncome.map((data) => (data.adcount)*1000),
			backgroundColor: ["#d0c8c8","#fff5c7"],
			borderColor: "black",
			borderWidth: 1,
		  },
		],
	  };
	  console.log(x);
	// const [userData, setUserData] = useState([]);
	// setUserData(x);
	let i =1;
	
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
										<h1 class="h2 mb-0 ls-tight">Income Statement</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Report Dashboard /
													</a>
													<a href="/reportgenarationdashboard" className="header-topic">
														Report generation/
													</a>
													<a href="/Reportincome" className="header-topic">
														Income Statement
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
											<h5 class="mb-0">Advertiesment Income Report</h5>
										</div>
										<BarChart chartData={x} />
										<br/>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Month</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Total Income ($.)</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Month to Month growth</strong>
															</b>
														</th>
													</tr>
												</thead>
												<tbody>
													{ListOfIncome.map((value, key , arr ) => {
														
														let j = 0;
														if(i==1){

														}else{
														j= 	((value.adcount*1000)-i)/i *100
														}
														
														{i=value.adcount*1000}
														return (
															<tr>
																<td>{month[value.umonth-1]} 2022</td>
																<td>{value.adcount*1000}</td>
																<td> {j} % </td>
																
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
