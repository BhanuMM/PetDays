import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import { useNavigate } from "react-router-dom";
import "../styles/petmart.css";
import "../styles/forum.css";
import "../styles/petcategories.css";
import "../styles/serviceproviderdashboard.css";
import Spsidebar from "../components/spsidebar";
import Navbarsp from "../components/navsp";
import "../styles/spdashboard.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

function pendingads() {
	const [listOfallads, setlistOfallads] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getalladsuser")
			.then((response) => {
				setlistOfallads(response.data);
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
					<br />
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<h1 class="h2 mb-0 ls-tight">My Advertisments</h1>
							<hr />
							<br />
							<div className="row">
								{listOfallads.map((value, key) => {
									return (
										<div className="col-4">
											<div class="petmart-card" style={{ width: 400 }}>
												<div class="petmart-inner-card">
													{" "}
													<img
														src="https://www.acs.edu.au/database/images/course_4335051.jpg"
														class="img-fluid rounded"
													/>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>{value.adTitle}</h4>
														<small>
															{value.adDate} at {value.adTime}{" "}
														</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small>{value.adDescr}</small>{" "}
													</div>
													<div class="px-2">
														<h3>{value.adPrice}</h3>
													</div>
													<div class="px-2 mt-3">
														<div
															class="comment"
															style={{ display: "flex", paddingLeft: 10 }}
														>
															<br />
															<br />
															<div style={{ paddingRight: 20 }}>
																<a
														
																	role="button"
																	aria-pressed="true"
																>
																	<Button
																	style={{
																		backgroundColor: "#205375",
																		width: 100,
																	}}
																		variant="contained"
																		component="label"
																		onClick={() => {
																		navigate('/spviewad',{state: value.adId});
																			  }}
																	>
																		View
																	</Button>
																</a>
															</div>

															<div>
																<a  role="button" aria-pressed="true">
																	<Button
																		variant="contained"
																		component="label"
																		style={{
																			backgroundColor: "#112b3c",
																			width: 100,
																		}}
																		onClick={() => {
																			navigate('/speditad',{state: value.adId});
																			  }}
																	>
																		Edit
																	</Button>
																</a>
															</div>
															<div style={{
																		paddingLeft: 20
																	}}>
															<a role="button" aria-pressed="true">
																<Button
																	variant="contained"
																	component="label"
																	style={{
																		backgroundColor: "#F66B0E",
																		width: 100,
																	}}
																>
																	Remove
																</Button>
															</a>
														</div>
															<br />
														</div>
														
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default pendingads;
