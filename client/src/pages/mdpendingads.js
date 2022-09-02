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
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function mdpendingads() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<nav
					class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
					id="navbarVertical"
				>
					<div class="container-fluid">
						<button
							class="navbar-toggler ms-n2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#sidebarCollapse"
							aria-controls="sidebarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
							<img class="dashboard-image" src={dog} alt="" />
						</a>
						<div class="navbar-user d-lg-none">
							<div class="dropdown">
								<a
									href="#"
									id="sidebarAvatar"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div class="avatar-parent-child">
										<img
											alt="Image Placeholder"
											src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
											class="avatar avatar- rounded-circle"
										/>
										<span class="avatar-child avatar-badge bg-success"></span>
									</div>
								</a>
							</div>
						</div>
						<div class="collapse navbar-collapse" id="sidebarCollapse">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-house"></i> Home
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-bar-chart"></i> Dashboard
									</a>
								</li>
								<li class="nav-item">
									<div class="panel-group" id="accordion">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse1"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-egg"></i> Diet Plans<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:120}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse1" class="panel-collapse collapse in">
												<div class="panel-body">
													<a class="nav-link "style={{paddingLeft:70}} href="#">
														Diet Plans-Cats
													</a>
												</div>
												<div class="panel-footer">
													<a class="nav-link" style={{paddingLeft:70}} href="#">
														Diet Plans-Dogs
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse2"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-bag-plus"></i> Medications<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:105}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse2" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link "style={{paddingLeft:70}} href="#">
														Medicines
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" style={{paddingLeft:70}}href="#">
														Vaccines
													</a>
												</div>
												<div class="panel-footer">
													<a class="nav-link" style={{paddingLeft:70}} href="#">
														Vitamins
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse3"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-bookmarks"></i>Posts<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:88}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse3" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Pending Posts
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Verified Posts
													</a>
												</div>
											</div>
										</div>
										<div class="panel panel-default">
											<div class="panel-heading">
												<h4 class="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapse4"
													>
														<a class="nav-link" href="#">
															<i class="bi bi-people"></i>Advertisments<i class="fa fa-caret-down" aria-hidden="true" style={{paddingLeft:62}}></i>
														</a>
													</a>
												</h4>
											</div>
											<div id="collapse4" class="panel-collapse collapse">
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Pending Advertisments
													</a>
												</div>
												<div class="panel-body">
													<a class="nav-link" href="#" style={{paddingLeft:70}}>
														Verified Advertisments
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<hr class="navbar-divider my-5 opacity-20" />
							<div class="mt-auto"></div>
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-person-square"></i> Account
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<i class="bi bi-box-arrow-left"></i> Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Pending Advertisments</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Moderator Dashboard/
													</a>
													<a href="/mdpostsection" className="header-topic">
														 Pending Advertisments
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
							<div style={{paddingLeft:200}}>
                           
                    <CardContent>
                    <Card sx={{ display: 'flex', width:900, height: 250 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={Profilepic}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{ flex: '1 0 auto',paddingTop:3 }}>
                        <Typography component="div" variant="h5">
                          Pet Grooming
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" class="font-italic">
                        <p class="font-italic text-success fs-7">Posted 5 minutes ago.</p>
                        </Typography><br/>
                        
                        Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs<br/><br/>
                        
                        <a href="/mdviewad" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                          View
                        </Button></a>
                      </CardContent>
                    </Box>
                    
                    </Card><br/>

                    <Card sx={{ display: 'flex', width:900, height: 250 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={Profilepic}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{ flex: '1 0 auto',paddingTop:3 }}>
                        <Typography component="div" variant="h5">
                          Pet Grooming
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" class="font-italic">
                        <p class="font-italic text-success fs-7">Posted 5 minutes ago.</p>
                        </Typography><br/>
                        
                        Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs<br/><br/>
                        
                        <a href="" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                          View
                        </Button></a>
                      </CardContent>
                    </Box>
                    
                    </Card><br/>

                    <Card sx={{ display: 'flex', width:900, height: 250 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={Profilepic}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{ flex: '1 0 auto',paddingTop:3 }}>
                        <Typography component="div" variant="h5">
                          Pet Grooming
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" class="font-italic">
                        <p class="font-italic text-success fs-7">Posted 5 minutes ago.</p>
                        </Typography><br/>
                        
                        Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs<br/><br/>
                        
                        <a href="" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                          View
                        </Button></a>
                      </CardContent>
                    </Box>
                    
                    </Card><br/>

                    <Card sx={{ display: 'flex', width:900, height: 250 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={Profilepic}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                      <CardContent sx={{ flex: '1 0 auto',paddingTop:3 }}>
                        <Typography component="div" variant="h5">
                          Pet Grooming
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" class="font-italic">
                        <p class="font-italic text-success fs-7">Posted 5 minutes ago.</p>
                        </Typography><br/>
                        
                        Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs<br/><br/>
                        
                        <a href="/mdviewad" role="button" aria-pressed="true"> <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                          View
                        </Button></a>
                      </CardContent>
                    </Box>
                    
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

export default mdpendingads;
