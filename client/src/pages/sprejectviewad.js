import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Swal from 'sweetalert2';
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Spsidebar from "../components/spsidebar";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";

import "../styles/petmart.css";
import "../styles/forum.css";
import "../styles/petcategories.css";
import "../styles/serviceproviderdashboard.css";


import "../styles/spdashboard.css";
import Button from "@mui/material/Button";



function sprejectviewad() {
	const [SingleAd, setSingleAd] = useState([]);
  const location = useLocation();
	// let history = useHistory();
	useEffect(() => {
		axios
		  .get("http://localhost:3001/service/getrejectedadview/"+location.state)
		  .then((response) => {
			setSingleAd(response.data);
			
			
		  });
		  
	  }, []);

	const navigate = useNavigate();
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
									<h1 class="h2 mb-0 ls-tight">View Advertisment</h1>
									<hr />
								

									<br />
								</div>
							</div>
						</div>
					</div>
				</header>
				<main class="py-6 bg-surface-secondary">
					<div class="container-fluid">
						<div class="row g-6 mb-6">
						<div style={{paddingLeft:20}}>
						<Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} >
						{SingleAd.map((value, key) => {
									return (
					<CardContent style={{paddingLeft:50}}>
						<div>
							<h3 className=''>{value.Publishedad.adTitle} </h3>
							<p> Posted on {value.Publishedad.adDate} {value.Publishedad.adTime}</p>
							<hr/>
						</div>
						<div className="row" style={{paddingLeft:250}}>
							<img src={`http://localhost:3001/service/static/${value.Publishedad.adImage}`} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
						</div><br/>
						<div style={{display:"flex", paddingLeft:170 , color:'red'}}><p>xsfre{value.rejReason}</p></div>
						<div style={{display:"flex", paddingLeft:170}}>
							
							<div style={{width:400, paddingRight:100}}>
								<h3>{value.Publishedad.adTitle}</h3>
								<p><i class="fa fa-map-marker" aria-hidden="true"></i> {value.Publishedad.adDistrict},{value.Publishedad.adProvince}</p><br/>
								<h4>Rs.{value.Publishedad.adPrice}/=</h4>
								<p>
								{value.Publishedad.adDescr}
								</p>
							</div>
							<div>
							<p><h5>Contact Us</h5>
								<p><i class="fa fa-envelope" aria-hidden="true"></i> {value.Publishedad.adEmail}</p>
								<p><i class="fa fa-phone" aria-hidden="true"></i>{value.Publishedad.adContact} </p> 
								{/* <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p> */}
								<p><i class="fa fa-map-marker" aria-hidden="true"></i> {value.Publishedad.adAddress}</p>

								</p>
							</div>

						</div><br/><br/>
						<div class='comment'  style={{paddingLeft:600, display:"flex"}}><br/><br/>
							<div style={{paddingLeft:100,paddingRight:20}}>
								
								
							</div>

							<div>
									
							<div class="comment" style={{ display: "flex", paddingLeft: 10 }}>
															<br />
															<br />
															

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
																			navigate('/speditad',{state: value.Publishedad.adId});
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
																	// type="button"
																	// class="btn btn-sm btn-square btn-neutral text-danger-hover"
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

																		
																		axios.delete("http://localhost:3001/service/deletead/"+value. Publishedad.adId).then((response) => {
																			if (response.data.error) {
																			alert(response.data.error);
																			} else {
																			axios.get("http://localhost:3001/service/getalladsuser").then((response) => {
																				setSingleAd(response.data);});
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
					
					   
	</CardContent>
	);
})}
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

export default sprejectviewad;
