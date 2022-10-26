import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import "../styles/petcategories.css";
import "../styles/petmart.css";
import "../styles/forum.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/petcategories.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function petmart() {
	const [listOfpendingads, setlistOfpendingads] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getpetmartads")
			.then((response) => {
				setlistOfpendingads(response.data);
			});
	}, []);

	const navigate = useNavigate();

	return (
		<div className="Petmart">
			<Navbar />
			<div class="container-fluid">
				<div className="row mt-5 pt-5">
					<div class="forum-header mb-3 mt-3">
						<div className="row mt-2">
							<div className="col-4"></div>
							<div className="col-4 text center">
								<div class="forum-search ml-5">
									<div class="input-group rounded">
										<input
											type="search"
											class="form-control rounded"
											placeholder="Search"
											aria-label="Search"
											aria-describedby="search-addon"
										/>
										<span class="input-group-text border-0" id="search-addon">
											<i class="fa fa-search" aria-hidden="true"></i>
										</span>
									</div>
								</div>
							</div>
							<div className="col-4"></div>
						</div>
						<div className="row mt-5">
							<div className="col-3 "></div>
							<div className="col-1 pt-2">
								<h5> Filter By:</h5>
							</div>
							<div className="col-2 text-center">
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
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
							</div>
							<div className="col-2 text-center">
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
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
							</div>
							<div className="col-2 text-center">
								<div class="dropdown">
									<button
										class="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
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
										<a class="dropdown-item" href="#">
											Kurunegala
										</a>
									</div>
								</div>
							</div>

							<div className="col-2"></div>
						</div>
					</div>
				</div>
				<main class="py-6 bg-surface-secondary">
					<div class="petmart-container-fluid">
						<div className="row">
							{listOfpendingads.map((value, key) => {
								return (
									<div className="col-3">
										<div class="petmart-card">
											<div class="petmart-inner-card">
												<img
													src="https://www.acs.edu.au/database/images/course_4335051.jpg"
													class="img-fluid rounded"
												/>
												<div class="d-flex justify-content-between align-items-center mt-3 px-2">
													<h4>{value.adTitle}</h4>
													<small>{value.adDate}</small>
												</div>
												<div class="mt-2 px-2">
													<small>{value.adDescr}</small>
												</div>
												<div class="px-2">
													<h3> Rs.{value.adPrice}</h3>
												</div>
												<div class="px-2 mt-3">
													<a href="#" className="header-topic">
														<button class="btn btn-primary px-3 btn-color">
															View Advertisment
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<a href="\petmartallads" className="header-topic">
						<Button
							variant="contained"
							component="label"
							style={{ backgroundColor: "#F66B0E", height: 40, width: 275 }}
						>
							View All Advertisment
						</Button>
					</a>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default petmart;
