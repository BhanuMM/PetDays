import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
import Sidebar from "../components/sidebar";

function viewdietplans() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [filterItems, setFilterItems] = useState([]);
	const [listOfDietplans, setListOfDietplans] = useState([]);
	const [listOfCatagories, setListOfCatagories] = useState([]);
	const [listOfBreeds, setListOfBreeds] = useState([]);
	// const [catName, setCatName] = useState('All');
	// const [breedName, setBreedName] = useState('All');
	var catName = "All";
	var breedName = "All";

	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getdietplans").then((response) => {
			setListOfDietplans(response.data);
			setFilterItems(response.data);
		});
		axios
			.get("http://localhost:3001/admin/getpetcategories")
			.then((response) => {
				setListOfCatagories(response.data);
			});
	}, []);

	//   Search Diet Plan by Name function
	const searchResult = (searchName) => {
		const result = listOfDietplans.filter((val) => {
			if (searchName == "") {
				return val;
			} else if (
				val.planName.toLowerCase().includes(searchName.toLowerCase())
			) {
				return val;
			}
		});
		setFilterItems(result);
	};


	const filterResult = (catagory, breed) => {
		console.log("catagory ", catagory);
		console.log("breed ", breed);
		if (catagory == "All") {
			setFilterItems(listOfDietplans);
		} else if (breed == "All") {
			const result = listOfDietplans.filter((val) => {
				return val.Breed.Petcatagory.pcatID === parseInt(catagory);
			});
			setFilterItems(result);
		} else {
			console.log("ado ", breed);
			console.log("ado ", catagory);
			const result = listOfDietplans.filter((val) => {
				return val.Breed.Petcatagory.pcatID === parseInt(catagory);
			});

			const result2 = result.filter((val) => {
				return val.Breed.breedName === breed;
			});

			setFilterItems(result2);
		}
	};

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
										<h1 class="h2 mb-0 ls-tight">Diet Plans</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard//
													</a>
													<a href="/viewdietplans" className="header-topic">
														Diet Plans
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
									<div class="col col-xs-6 text-right">

										<br />
										<br />
										<div style={{ display: "flex" }}>
										<p class="fw-semibold " style={{ paddingRight: 40,width:150, paddingTop:10 }}>
											Filtery by :
										</p>
										<div class="search-line" style={{ display: "flex" }}>
											<p class="fw-semibold ">
												<select
													id="select"
													class="btn btn-dark dropdown-toggle"
													style={{ paddingRight: 40, marginRight: 20,width:160 }}
													onChange={(event) => {
														document.getElementById("select1").value = "All";

														axios
															.get(
																"http://localhost:3001/admin/getpetbreeds/" +
																	event.target.value
															)
															.then((response) => {
																setListOfBreeds(response.data);
															});
														filterResult(
															event.target.value,
															document.getElementById("select1").value
														);
													}}
												>
													<option value="All">All</option>
													
													{listOfCatagories.map((value, key) => {
														return (
															<option value={value.pcatID}>
																{value.pcatName}
															</option>
														);
													})}
												</select>
											</p>

											<p class="fw-semibold ">
												<select
													id="select1"
													class="btn btn-dark dropdown-toggle"
													style={{ paddingRight: 40, marginRight: 20,width:160 }}
													onChange={(event) => {
														filterResult(
															document.getElementById("select").value,
															event.target.value
														);
													}}
												>
													<option value="All">All Breeds</option>
													{listOfBreeds.map((value, key) => {
														return (
															<option value={value.breedName}>
																{value.breedName}
															</option>
														);
													})}
												</select>
											</p>
											</div>
											<div
												
												style={{ width: 575, marginLeft: 420 ,display:"flex",paddingTop:10}}
											>
												<p
													class="fw-semibold "
													style={{ paddingRight: 10, paddingTop: 10,width:250 }}
												>
													Search Dietplans
												</p>
												<input
													type="search"
													class="form-control rounded input-group"
													placeholder="Enter Dietplan Name"
													aria-label="Search"
													aria-describedby="search-addon"
													style={{ height: 40 }}
													onChange={(event) => {
														setSearchTerm(event.target.value);
													}}
												/>
											</div>
										</div>
									</div>
									<br />
									<br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Diet Plans</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Diet Plan ID</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Pet Category</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Diet Plan Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Description</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Breed</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Age Range</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Weight Range</strong>
															</b>
														</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{filterItems
														.filter((val) => {
															if (searchTerm == "") {
																return val;
															} else if (
																val.planName
																	.toLowerCase()
																	.includes(searchTerm.toLowerCase())
															) {
																return val;
															}
														})
														.map((value, key) => {
															return (
																<tr>
																	<td>{value.dietplanID}</td>
																	<td>{value.Breed.Petcatagory.pcatName}</td>
																	<td>{value.planName}</td>
																	<td>{value.planDescr}</td>
																	<td>{value.Breed.breedName}</td>
																	<td>
																		{value.ageRangeFrom} -{value.ageRangeTo} Yrs
																	</td>
																	<td>
																		{value.weightRangeFrom} -
																		{value.weightRangeTo} kg
																	</td>
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

export default viewdietplans;
