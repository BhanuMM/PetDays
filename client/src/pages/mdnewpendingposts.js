import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container, Typography}  from '@mui/material';
import Moderatorsidebar from "../components/moderatorsidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function mdnewpendingposts() {

	const [listOfpendingposts, setlistOfpendingposts] = useState([]);
	// let history = useHistory();
  
	useEffect(() => {
	  axios.get("http://localhost:3001/mod/getpendingposts").then((response) => {
		setlistOfpendingposts(response.data);
	  });
	}, []);
  
	const navigate = useNavigate();

	return (
		<div class="container-fluid">
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
										<h1 class="h2 mb-0 ls-tight">Pending Forum Posts</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard" className="header-topic">
														Moderator Dashboard/
													</a>
													<a href="/mdnewpendingposts" className="header-topic">
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
						<div class="container-fluid" >
							<div class="row g-6 mb-6">
							<div style={{paddingLeft:20}}>
                            <p class="fw-semibold " style={{paddingRight:40}}>Filtery by :</p>

                            <div class="search-line"  style={{display: "flex"}}>
									

									<p class="fw-semibold ">  
									<div class="dropdown" style={{paddingRight:40,paddingLeft:20}}>
									<button
										class="btn btn-dark dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"

										style={{height:40 , backgroundColor: '#205375', width:150, borderColor:'#205375'}}
									>
										Latest
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
									</div></p>

									
									<div class="dropdown" style={{paddingRight:40}}>
									<button
										class="btn btn-dark"
										type="button"
										style={{height:40 , backgroundColor: '#205375', width:150, borderColor:'#205375'}}
									>
										Filter
									</button>
									</div>
									

									<div class="input-group" style={{width:575,marginLeft:320}}>
										<input type="search" class="form-control rounded" placeholder="Search Forum Posts" aria-label="Search" aria-describedby="search-addon" style={{height:40}}/>
										<button type="button" class="btn" style={{height:40,backgroundColor: '#205375',color:'white'}} >Search</button>
									</div>
								</div>

								
                                <CardContent>
								{listOfpendingposts.map((value, key) => {
                            return (
								<div>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <Typography class="fw-semibold fs-7">{value.postTitle}</Typography>
                                        <Typography class="font-italic text-success fs-7">{value.postDate}</Typography>
                                    </div>  
                                    <div>
										<Typography>{value.postDescr}</Typography>
                                    </div>
                                    <div class='comment' style={{paddingRight:50}}><br/>
                                            <a href="" role="button" aria-pressed="true">  
                                                <button variant="contained" component="label"  style={{backgroundColor: '#205375'}}>
                                                    Approve
                                                </button>
                                            </a>
                                            <a href="" role="button" aria-pressed="true"> 
												<button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
														Reject
												</button></a>
                                    </div>
                            </div>

                                </div>
                                </Card><br/>
                                
								</div>	
								);
							})}
                                </CardContent>
                            	
            				</div>
	
							</div>
							
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default mdnewpendingposts;
