import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Profilepic from '../images/profile.jpg';
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Moderatorsidebar from "../components/moderatorsidebar";

function mdnewpendingposts() {
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
													<a href="/admindashboard" className="header-topic">
														Moderator Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
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
							<div style={{paddingLeft:20}}>
                           
                                <CardContent>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Posted 5 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'><br/>
                                            <a href="" role="button" aria-pressed="true">  
                                                <Button variant="contained" component="label"  style={{backgroundColor: '#205375'}}>
                                                    Approve
                                                </Button>
                                            </a>
                                                            <a href="" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                                            Reject
                                                        </Button></a>
                                        </div>
                            </div>

                                </div>
                                </Card><br/>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Posted 35 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'><br/>
                                            <a href="" role="button" aria-pressed="true">  
                                                <Button variant="contained" component="label"  style={{backgroundColor: '#205375'}}>
                                                    Approve
                                                </Button>
                                            </a>
                                                            <a href="" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                                            Reject
                                                        </Button></a>
                                        </div>
                            </div>

                                </div>
                                </Card><br/>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Posted 15 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'><br/>
                                            <a href="" role="button" aria-pressed="true">  
                                                <Button variant="contained" component="label"  style={{backgroundColor: '#205375'}}>
                                                    Approve
                                                </Button>
                                            </a>
                                                            <a href="" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                                            Reject
                                                        </Button></a>
                                        </div>
                            </div>

                                </div>
                                </Card><br/>

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
