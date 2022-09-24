import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Spsidebar from "../components/spsidebar";
import Navbarsp from "../components/navsp";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function spviewad() {
	const [listOfAds, setlistOfAds] = useState([]);
	const location = useLocation();
	// let history = useHistory();
	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getpendingadsuser" + location.state)
			.then((response) => {
				setlistOfAds(response.data);
				console.log(listOfAds);
			});
	}, []);

	const navigate = useNavigate();
	return (
		<div class="container-fluid">
			<Navbarsp />
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Spsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<br />
					<br />
					<br />
					<br />
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
								<div style={{ paddingLeft: 20 }}>
									
											<Card
												sx={{
													minWidth: 275,
													maxWidth: 1500,
													width: 1100,
													marginLeft: 15,
												}}
											>
												<CardContent style={{ paddingLeft: 50 }}>
													<div>
														<h3 className="">{listOfAds.adTitle} </h3>
														<p> Posted on {listOfAds.adDate}</p>
														<hr />
													</div>
													<div className="row" style={{ paddingLeft: 250 }}>
														<img
															src="https://www.acs.edu.au/database/images/course_4335051.jpg"
															class="img-fluid rounded"
														/>
													</div>
													<br />

													<div style={{ display: "flex", paddingLeft: 170 }}>
														<div style={{ width: 400, paddingRight: 100 }}>
															{/* <h3>Dog Walking Service</h3> */}
															<p>
																<i
																	class="fa fa-map-marker"
																	aria-hidden="true"
																></i>{listOfAds.adProvince},{listOfAds.adDistrict},
																Sri Lanka
															</p>
															<br />
															<h4>Rs{listOfAds.adPrice}</h4>
															<p>
																{listOfAds. adDescr}
																
															</p>
														</div>
														<div>
															<p>
																<h5>Contact Us</h5>
																<p>
																	<i
																		class="fa fa-envelope"
																		aria-hidden="true"
																	></i>{listOfAds. adEmail}
																	
																</p>
																<p>
																	<i class="fa fa-phone" aria-hidden="true"></i>
																	{listOfAds.adContact}
																</p>
																
																<p>
																	<i
																		class="fa fa-map-marker"
																		aria-hidden="true"
																	></i>{listOfAds.adAddress}
																	
																</p>
															</p>
														</div>
													</div>
													<br />
													<br />
												</CardContent>
											</Card>
										
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
		
	);
}

export default spviewad;
