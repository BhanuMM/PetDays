import React from "react";
import Sidebar from "../components/sidebar";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function myprofileadmin() {
	return (
		<div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Sidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Profile Settings</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/myprofile" className="header-topic">
														Profile Settings
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
										style={{ padding: 10, paddingLeft: 75 }}
									>
										<CardContent>
											<div class="col-md-3 border-right">
												<div
													class="d-flex flex-column align-items-center text-center p-3 py-5 "
													style={{ float: "right" }}
												>
													<img
														class="rounded-circle mt-5"
														width="150px"
														src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
													/>
													<span class="font-weight-bold">Edogaru</span>
													<span class="text-black-50">edogaru@mail.com.my</span>
													<span> </span>
												</div>
											</div>
											<form>
												<br />
												<br />

												<Box
													component="form"
													sx={{
														"& .MuiTextField-root": { m: 1, width: "100ch" },
													}}
													noValidate
													autoComplete="off"
												>
													<TextField
														id="outlined-required"
														label="User Name"
														defaultValue="user name"
													/>

													<TextField
														id="outlined-required"
														label="E-mail"
														defaultValue="E-mail"
														type="Dropdown"
													/>

													<TextField
														id="outlined-required"
														label="Password"
														defaultValue="Password"
														type="Dropdown"
													/>
													<TextField
														id="outlined-required"
														label="Confirm Password"
														defaultValue="Confirm Password"
														type="Dropdown"
													/>
												</Box>

												<div className="row">
													<div className="col-9"></div>
													<div className="col-3 mb-5 mt-5">
														{" "}
														<Button
															variant="contained"
															component="label"
															style={{ backgroundColor: "#F66B0E" }}
														>
															Update profile
														</Button>
													</div>
												</div>
											</form>
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

export default myprofileadmin;
