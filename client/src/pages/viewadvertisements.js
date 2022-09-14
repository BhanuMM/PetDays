import React from "react";
import Sidebar from "../components/sidebar";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function viewadvertisements() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">View Advertisements</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard">Admin Dashboard /</a>
													<a href="/viewadvertisements">View Advertisements</a>
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
									<p class="fw-semibold " style={{ paddingRight: 40 }}>
										Filtery by :
									</p>
									<div class="search-line" style={{ display: "flex" }}>
										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
												<button
													class="btn btn-dark dropdown-toggle"
													type="button"
													id="dropdownMenuButton"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
														height: 40,
														backgroundColor: "#205375",
														width: 150,
														borderColor: "#205375",
													}}
												>
													Pet Category
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Cats
													</a>
													<a class="dropdown-item" href="#">
														Dogs
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
												<button
													class="btn btn-dark dropdown-toggle"
													type="button"
													id="dropdownMenuButton"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
														height: 40,
														backgroundColor: "#205375",
														width: 150,
														borderColor: "#205375",
													}}
												>
													Pet Breed
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Bullmastiff
													</a>
													<a class="dropdown-item" href="#">
														Golden Retriever
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
												<button
													class="btn btn-dark dropdown-toggle"
													type="button"
													id="dropdownMenuButton"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
														height: 40,
														backgroundColor: "#205375",
														width: 150,
														borderColor: "#205375",
													}}
												>
													Service Category
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Pet Walking
													</a>
													<a class="dropdown-item" href="#">
														Pet Daycare
													</a>
													<a class="dropdown-item" href="#">
														Pet Grooming
													</a>
												</div>
											</div>
										</p>

										<p class="fw-semibold ">
											<div class="dropdown" style={{ paddingRight: 40 }}>
												<button
													class="btn btn-dark dropdown-toggle"
													type="button"
													id="dropdownMenuButton"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
													style={{
														height: 40,
														backgroundColor: "#205375",
														width: 150,
														borderColor: "#205375",
													}}
												>
													District
												</button>
												<div
													class="dropdown-menu"
													aria-labelledby="dropdownMenuButton"
												>
													<a class="dropdown-item" href="#">
														Colombo
													</a>
													<a class="dropdown-item" href="#">
														Galle
													</a>
													<a class="dropdown-item" href="#">
														Kandy
													</a>
													<a class="dropdown-item" href="#">
														Matara
													</a>
												</div>
											</div>
										</p>
										<div class="dropdown" style={{ paddingRight: 40 }}>
											<button
												class="btn btn-dark"
												type="button"
												style={{
													height: 40,
													backgroundColor: "#205375",
													width: 150,
													borderColor: "#205375",
												}}
											>
												Filter
											</button>
										</div>

										<div class="input-group" style={{ width: 430}}>
											<input
												type="search"
												class="form-control rounded"
												placeholder="Search advertisements"
												aria-label="Search"
												aria-describedby="search-addon"
												style={{ height: 40 }}
											/>
											<button
												type="button"
												class="btn"
												style={{
													height: 40,
													backgroundColor: "#205375",
													color: "white",
												}}
											>
												Search
											</button>
										</div>
									</div>
									<br />

									<div className="row">
										<div className="col-3">
											<div class="petmart-card">
												<div class="petmart-inner-card">
													{" "}
													<img
														src="https://www.acs.edu.au/database/images/course_4335051.jpg"
														class="img-fluid rounded"
													/>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>Pet Day Care</h4>
														<small>21 Aug 2022</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small>
															Best care has qualified team of doctors and
															professionally trained team of Veterinary
															Assistants and Dog Handlers to offer you the best
															service.
														</small>{" "}
													</div>
													<div class="px-2">
														<h3>Rs.500/=</h3>
													</div>
													<div class="px-2 mt-3">
														{" "}
														<button class="btn btn-primary px-3 butn-color">
															View Ad
														</button>{" "}
													</div>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div class="petmart-card">
												<div class="petmart-inner-card">
													{" "}
													<img
														src="https://cdn.cdnparenting.com/articles/2018/12/196619114-H.jpg"
														class="img-fluid rounded"
													/>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>Pet Day Care</h4>
														<small>21 Aug 2022</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small>
															Best care has qualified team of doctors and
															professionally trained team of Veterinary
															Assistants and Dog Handlers to offer you the best
															service.
														</small>{" "}
													</div>
													<div class="px-2">
														<h3>Rs.500/=</h3>
													</div>
													<div class="px-2 mt-3">
														{" "}
														<button class="btn btn-primary px-3 butn-color">
															View Ad
														</button>{" "}
													</div>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div class="petmart-card">
												<div class="petmart-inner-card">
													{" "}
													<img
														src="https://www.thedoghouseps.com/wp-content/uploads/2020/01/combing-the-head-of-yorkshire-terrier-picjumbo-com-1-1024x683.jpg"
														class="img-fluid rounded"
													/>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>Pet Day Care</h4>
														<small>21 Aug 2022</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small>
															Best care has qualified team of doctors and
															professionally trained team of Veterinary
															Assistants and Dog Handlers to offer you the best
															service.
														</small>{" "}
													</div>
													<div class="px-2">
														<h3>Rs.500/=</h3>
													</div>
													<div class="px-2 mt-3">
														{" "}
														<button class="btn btn-primary px-3 butn-color">
															View Ad
														</button>{" "}
													</div>
												</div>
											</div>
										</div>
										<div className="col-3">
											<div class="petmart-card">
												<div class="petmart-inner-card">
													{" "}
													<img
														src="https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2019/01/BonnieArbittier_lucys_doggy_daycare_dog_pet_boarding_1604_new_location_grooming_1-16-2019-8.jpg?fit=1170%2C780&ssl=1"
														class="img-fluid rounded"
													/>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>Pet Day Care</h4>
														<small>21 Aug 2022</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small>
															Best care has qualified team of doctors and
															professionally trained team of Veterinary
															Assistants and Dog Handlers to offer you the best
															service.
														</small>{" "}
													</div>
													<div class="px-2">
														<h3>Rs.500/=</h3>
													</div>
													<div class="px-2 mt-3">
														{" "}
														<button class="btn btn-primary px-3 butn-color">
															View Ad
														</button>{" "}
													</div>
												</div>
											</div>
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

export default viewadvertisements;
