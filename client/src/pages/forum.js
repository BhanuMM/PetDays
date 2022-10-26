import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import "../styles/forum.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function forum() {
	const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        role : "",
        status: false,
      });
    
      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/authuser", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                role: response.data.role,
                status: true,
              });
            }
          });
      }, []);

	const [searchTerm, setSearchTerm] = useState([]);
	const location = useLocation();
	const initialValues = {
		postTitle: "",
		postDescr: "",
		pcatID: "1",
		userId: authState.id
	};

	const navigate = useNavigate();
	const onSubmit = (data) => {
		console.log(data);

		axios.post("http://localhost:3001/user/addpost",data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				navigate(0);
			}
		});
	};

	const [listOfPosts, setListOfPosts] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/user/getposts").then((response) => {
			setListOfPosts(response.data);
		});
	}, []);

	return (
		<div className="forum">
			<Navbar />
			<br />
			<br />
			<br />
			<br /><br />
			<div className="container">
				<div className="container-fluid forum">
					<div className="row mt-3">
						<div class="row  ">
							<main class="py-6 bg-surface-secondary">
								<div class="container-fluid">
									<div class="row g-6 mb-6">
										<div>
											<div style={{ paddingLeft: 950 }}>
												<Button
													variant="contained"
													component="label"
													style={{ backgroundColor: "#F66B0E" }}
													data-toggle="modal"
													data-target="#exampleModalCenter"
												>
													Start New Disscussion
												</Button>
											</div>
											<br />
											<br />

											<div class="search-line" style={{ display: "flex",paddingLeft:100}}>
												<p class="fw-semibold " style={{ paddingRight: 20, width:100, paddingTop:10 }}>
													Filter by :
												</p>

												<p class="fw-semibold ">
													<div
														class="dropdown"
														style={{ paddingRight: 40, paddingLeft: 20 }}
													>
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
																width: 200,
																borderColor: "#205375",
															}}
														>
															Recently Published
														</button>
														<div
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButton"
														>
															<a class="dropdown-item" href="#">
																Recent Week
															</a>
															<a class="dropdown-item" href="#">
																Last Month
															</a>
														</div>
													</div>
												</p>

											

												<div
													
													style={{ width: 690, float: "right",display:"flex",paddingTop:10,paddingLeft:100}}
												>
													<p
														class="fw-semibold "
														style={{ paddingRight: 10, paddingTop: 10,width:300 }}
													>
														Search Forum Posts
													</p>
													<input
														type="search"
														class="form-control rounded input-group"
														placeholder="Enter Forum Posts"
														aria-label="Search"
														aria-describedby="search-addon"
														style={{ height: 40 }}
														onChange={(event) => {
															setSearchTerm(event.target.value);
														}}
													/>
												</div>
											</div>
											
												{listOfPosts
												.filter((value) => {
													if (searchTerm == "") {
														return value;
													} else if (
														value.postTitle
															.toLowerCase()
															.includes(searchTerm.toLowerCase())
													) {
														return value;
													}
												})
												.map((value, key) => {
													return (
														<CardContent style={{paddingLeft: 100 }}>
														<Card
															sx={{ minWidth: 250, maxWidth: 1500 }}
															style={{ padding: 10, paddingLeft:150 }}
														>
															<div class="card-body">
																<div class="content">
																	<div>
																		<p class="fw-semibold fs-7" style={{ fontSize:20}}>
																		{value.postTitle}
																		</p>
																		<p class="fw-semibold fs-7"></p>
																		<p class="font-italic text-success fs-7">
																		Published date {value.postDate}
																		</p>
																	</div>
																	<div>{value.postDescr}</div>
																	<br/>
																	<div
																		class="comment"
																		style={{ paddingRight: 50, display:"flex", float:"right"}}
																	>
																		<Button
																			variant="contained"
																			component="label"
																			style={{ backgroundColor: "#F66B0E" }}
																			onClick={() => {
																				navigate("/comments", {
																					state: value.postId,
																				});
																			}}
																		>
																			View Comments
																		</Button>
																	</div>
																</div>
															</div>
														</Card>
														</CardContent>
													);
												})}
											
															
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>

				<div
					class="modal fade"
					id="exampleModalCenter"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h3 class="modal-title" id="exampleModalLongTitle" style={{paddingLeft:100}}>
									Start New Disscussion
								</h3>
								
							</div>
							<div class="modal-body">
								<Formik initialValues={initialValues} enableReinitialize={true} onSubmit={onSubmit}>
									<Form>
										<div class="form-group">
											<label for="recipient-name" class="col-form-label">
												Title
											</label>
											<Field
												className="form-control"
												id="postTitle"
												autocomplete="off"
												name="postTitle"
												placeholder=""
											/>
										</div>
										<div className="form-group">
											<label for="message-text" className="col-form-label">
												Message
											</label>
											<Field
												className="form-control"
												type="hidden"
												id="userId"
												autocomplete="off"
												name="userId"
											/>
											<Field
												className="form-control"
												id="postDescr"
												autocomplete="off"
												name="postDescr"
												placeholder=""
											/>
										</div>
										<div className="form-group">
											<label for="message-text" className="col-form-label">
												Pet Category
											</label>
											<Field as="select" name="pcatID" className="form-select">
												<option value="1">Dogs </option>
												<option value="2">Cats</option>
											</Field>
										</div><br/>
										<div >
											<div style={{ paddingRight: 15, display:"flex",paddingLeft:100 }}>
												<button
													variant="contained"
													type="submit"
													component="label"
													style={{ backgroundColor: "#205375", width:100}}
													
												>
													Submit
												</button>
												<button
													variant="contained"
													component="label"
													style={{ backgroundColor: "#F66B0E", width:100 }}
													data-dismiss="modal"
													width="50"
												>
													Close
												</button>
											</div>
										</div>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default forum;
