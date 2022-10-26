import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import "../styles/forum.css";
import Moderatorsidebar from "../components/moderatorsidebar";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";

function mdverifyposts() {
	const [SinglePosts, setSinglePosts] = useState([]);
	const location = useLocation();

	useEffect((data) => {
		axios
			.get("http://localhost:3001/service/getpostview/"+location.state)
			.then((response) => {
				setSinglePosts(response.data);
			});
	}, []);

	const navigate = useNavigate();
	return (
		<div>
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Moderatorsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Pending Posts</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a
														href="/moderatordashboard"
														className="header-topic"
													>
														Moderator Dashboard/
													</a>
													<a href="/mdviewad" className="header-topic">
														Pending Posts
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
												<h3 className="">{SinglePosts.postTitle} </h3>
												<p>
													{" "}
													Posted on {SinglePosts.postDscr}{" "}
													{/* {SinglePosts.postTime} */}
												</p>
												<hr />
											</div>
											<div className="row" style={{ paddingLeft: 250 }}>
												{/* <img
													src={`http://localhost:3001/service/static/${SinglePosts.adImage}`}
													className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5"
													alt="dog"
												/> */}
											</div>
											<br />

											<div style={{ display: "flex", paddingLeft: 170 }}>
												<div style={{ width: 400, paddingRight: 100 }}>
													<h3>{SinglePosts.postTitle}</h3>
													<p>
														<i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
														{/* {SinglePosts.adDistrict},{SinglePosts.adProvince} */}
													</p>
													<br />
													{/* <h4>Rs {SinglePosts.adPrice} only</h4> */}
													{/* <p>{SinglePosts.adDescr}</p> */}
												</div>
												<div>
													<p>
														<h5>Contact Us</h5>
														<p>
															<i class="fa fa-envelope" aria-hidden="true"></i>{" "}
															{/* {SinglePosts.adEmail} */}
														</p>
														<p>
															<i class="fa fa-phone" aria-hidden="true"></i>
															{/* {SinglePosts.adContact}{" "} */}
														</p>
														{/* <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p> */}
														<p>
															<i
																class="fa fa-map-marker"
																aria-hidden="true"
															></i>{" "}
															{/* {SinglePosts.adAddress} */}
														</p>
													</p>
												</div>
											</div>
											<br />
											<br />
											<div
												class="comment"
												style={{ paddingLeft: 600, display: "flex" }}
											>
												<br />
												<br />
												<div style={{ paddingLeft: 100, paddingRight: 20 }}>
													<Button
														variant="contained"
														component="label"
														style={{ backgroundColor: "#205375", width: 100 }}
														onClick={() => {
															Swal.fire({
																title: "Are you sure?",
																text: "Do you want to approve this Post?",
																icon: "warning",
																showCancelButton: true,
																confirmButtonColor: "#3085d6",
																cancelButtonColor: "#d33",
																confirmButtonText: "Approve Post",
															}).then((result) => {
																if (result.isConfirmed) {
																	axios.post(
																			"http://localhost:3001/mod/updateapprovedpost/", {
                                        postId: SinglePosts.postId
                                      }).then((response) => {
																			if (response.data.error) {
																				alert(response.data.error);
																			} else {
																				navigate("/mdnewpendingposts");
																			}
																		});
																	Swal.fire(
																		"Approved!",
																		"Post Has been Approved.",
																		"success"
																	);
																}
															});
														}}
													>
														Approve
													</Button>
												</div>

												<div style={{ paddingLeft: 100, paddingRight: 20 }}>
													<Button
														variant="contained"
														component="label"
														style={{ backgroundColor: "#F66B0E", width: 100 }}
														onClick={() => {
															Swal.fire({
																title: "Are you sure?",
																text: "Do you want to reject this Post?",
																icon: "warning",
																showCancelButton: true,
																confirmButtonColor: "#3085d6",
																cancelButtonColor: "#d33",
																confirmButtonText: "Approve Post",
															}).then((result) => {
																if (result.isConfirmed) {
																	axios.post(
																			"http://localhost:3001/mod/updaterejectepost/",
                                      {
                                        postId: SinglePosts.postId
                                      }
																		)
																		.then((response) => {
																			if (response.data.error) {
																				alert(response.data.error);
																			} else {
																				navigate("/mdnewpendingposts");
																			}
																		});
																	Swal.fire(
																		"Rejected!",
																		"Post has been rejected.",
																		"success"
																	);
																}
															});
														}}
													>
														Reject
													</Button>
												</div>
											</div>
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

export default mdverifyposts;
