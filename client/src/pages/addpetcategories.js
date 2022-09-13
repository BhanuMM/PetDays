import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

function addpetcategories() {
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
										<h1 class="h2 mb-0 ls-tight">Add Pet Category</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/addpetcategories" className="header-topic">
														addpetcategory
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
						<div className="row pt-0 mt-5">
							<div className="row flex-nowrap pt-0">
								<div className="col-7 g-5">
									<Card
										sx={{
											minWidth: 275,
											maxWidth: 1500,
											width: 1100,
											marginLeft: 15,
										}}
										style={{ height: 450, padding: 10, paddingLeft: 75 }}
									>
										<CardContent>
											<form>
												<br />
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
														id="med-name"
														label="Name of the Category"
													/>
													<br />
													<TextField
														id="med-desc"
														label="Description about the Category"
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
															Add Pet Category
														</Button>
													</div>
													{/* <div className='col-3'></div> */}
												</div>
											</form>
											{/* </Formik> */}
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

export default addpetcategories;
