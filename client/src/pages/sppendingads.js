import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import { useNavigate } from "react-router-dom";
import "../styles/petmart.css";
import "../styles/forum.css";
import "../styles/petcategories.css";
import Spsidebar from "../components/spsidebar";
import Navbarsp from "../components/navsp";
import "../styles/spdashboard.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Swal from 'sweetalert2';

function pendingads() {
	const [listOfpendingads, setlistOfpendingads] = useState([]);
	// let history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getpendingadsuser")
			.then((response) => {
				setlistOfpendingads(response.data);
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
							<h1 class="h2 mb-0 ls-tight">Pending Advertisments</h1>
							<hr />
							<br />
							<div className="row">
								{listOfpendingads.map((value, key) => {
									return (
										<div className="col-4 mt-5">
											<div class="petmart-card" style={{ width: 400 }}>
												<div class="petmart-inner-card">
													{" "}
													{/* <img
														src="https://www.acs.edu.au/database/images/course_4335051.jpg"
														class="img-fluid rounded"
													/> */}
													<img src={`http://localhost:3001/service/static/${value.adImage}`}
											class="img-fluid rounded" ></img>
													<div class="d-flex justify-content-between align-items-center mt-3 px-2">
														<h4>{value.adTitle}</h4>
														<small>
															{value.adDate} at {value.adTime}{" "}
														</small>
													</div>
													<div class="mt-2 px-2">
														{" "}
														<small><i class="fa fa-map-marker" aria-hidden="true"></i> {value. adDistrict},Sri Lanka</small>{" "}
													</div>
													<div class="px-2">
														<h3>Rs.{value.adPrice}/=</h3>
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
{/* 
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
																			navigate('/getpendingadsuser',{state: value.adId});
																			  }}
																	>
																		Edit
																	</Button>
																</a>
															</div> */}
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
																	onClick={() => {

																		Swal.fire({
																			title: 'Are you sure?',
																			text: "You won't be able to revert this!",
																			icon: 'warning',
																			showCancelButton: true,
																			confirmButtonColor: '#3085d6',
																			cancelButtonColor: '#d33',
																			confirmButtonText: 'Yes, delete it!'
																		}).then((result) => {
																			if (result.isConfirmed) {
	
																			
																			axios.delete("http://localhost:3001/service/deletead/"+value. adId).then((response) => {
																				if (response.data.error) {
																				alert(response.data.error);
																				} else {
																				axios.get("http://localhost:3001/service/getpendingadsuser").then((response) => {
																					setlistOfpendingads(response.data);});
																				} 
																			});
																				Swal.fire(
																				'Deleted!',
																				'Advertiesment has been deleted.',
																				'success'
																				)
																			
																			
																			}
																		})
																		
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
