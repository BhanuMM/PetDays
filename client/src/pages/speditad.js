import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Spsidebar from "../components/spsidebar";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

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

function speditad() {
	const [SingleAd, setSingleAd] = useState([]);
	const location = useLocation();

	useEffect(() => {
		axios
			.get("http://localhost:3001/service/getad" + location.state)
			.then((response) => {
				setSingleAd(response.data);
				console.log(SingleAd.adId);
			});
	}, []);

	const initialValues = {
		adId: SingleAd.adId,
		adTitle: SingleAd.adTitle,
		adDescr: SingleAd.adDescr,
		adPrice: SingleAd.adPrice,
		adContact: SingleAd.adContact,
		adEmail: SingleAd.adEmail,
		adAddress: SingleAd.adAddress,
		adProvince: SingleAd.adProvince,
		adDistrict: SingleAd.adDistrict,
        adStatus: SingleAd.adStatus,
		adDate: SingleAd.adDate,
		adTime: SingleAd.adTime,
	};

	const navigate = useNavigate();

	const onSubmit = (data) => {
		axios
			.post("http://localhost:3001/service/spupdatead", data)
			.then((response) => {
				if (response.data.error) {
					alert(response.data.error);
				} else {
					navigate("/spmyads");
				}
			});
	};

	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Spsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Add Medicine</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/spdashboard">Serviceprovider Dashboard /</a>
													<a href="/spviewad">Advertisments /</a>
													<a href="/speditad">Edit Advertisments</a>
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
									<Formik
										enableReinitialize={true}
										initialValues={initialValues}
										onSubmit={onSubmit}
									>
										<Form>
											<br />
											<br />

											<label className="form-label">
												Title of the Advertisment
											</label>
											<Field
												className="form-control"
												id="adId"
												autocomplete="off"
												type="hidden"
												name="adId"
												// value ={SingleMed.medID}
											/>
											<Field
												className="form-control"
												id="adTitle"
												autocomplete="off"
												name="adTitle"
												// value ={SingleMed.adTitle}
											/>
											<label className="form-label">
												Description of the Advertisment
											</label>
											<Field
												className="form-control"
												id=" adDescr"
												autocomplete="off"
												name="adDescr"
											/>
											<label className="form-label">
												Price of the Advertisment
											</label>

											<Field
												className="form-control"
												id="adPrice"
												autocomplete="off"
												name="adPrice"
												// value ={SingleMed.adPrice}
											/>
											<label className="form-label">Contact</label>
											<Field
												className="form-control"
												id="adContact"
												autocomplete="off"
												name="adContact"
												// value ={SingleMed.adContact}
											/>
											<label className="form-label">Email</label>
											<Field
												className="form-control"
												id="adEmail"
												autocomplete="off"
												name="adEmail"
												// value ={SingleMed.adEmail}
											/>
											<label className="form-label">Address</label>
											<Field
												className="form-control"
												id="adAddress"
												autocomplete="off"
												name="adAddress"
												// value ={SingleMed.adAddress}
											/>
											<label className="form-label">Province</label>
											<Field
												className="form-control"
												id="adProvince"
												autocomplete="off"
												name="adProvince"
												// value ={SingleMed.adProvince}
											/>
											<label className="form-label">District</label>
											<Field
												className="form-control"
												id="adDistrict"
												autocomplete="off"
												name="adDistrict"
												// value ={SingleMed.adDistrict}
											/>
                                           
											<div className="row">
												<div className="col-9"></div>
												<div className="col-3 mb-5 mt-5">
													<button
														className="register.loginbuttonsize btn btn-success "
														type="submit"
														style={{ backgroundColor: "#F66B0E" }}
													>
														Update Advertisments
													</button>
												</div>
											</div>
										</Form>
									</Formik>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default speditad;
