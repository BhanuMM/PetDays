import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Sidebar from "../components/sidebar";

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

function addseller() {
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
										<h1 class="h2 mb-0 ls-tight">Add Service Providers</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard" className="header-topic">
														Admin Dashboard/
													</a>
													<a href="/addsellers" className="header-topic">
													Add Service Providers
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
										style={{ height: 630, padding: 10, paddingLeft: 75 }}
									>
										<CardContent>
                                        <form>
                <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField id="sell-fname" label="First Name" /><br/>
                                <TextField id="sell-lname" label=" Last Name"/>
								<TextField id="sell-contact" label=" Contact Number"/>
								<TextField id="sell-email" label=" E mail"/>
								<TextField id="sell-nic" label=" NIC Number"/>
                                <TextField id="sell-nic" label=" Service"/>
                                <TextField id="sell-nic" label=" Description About the Service"/>
								<TextField id="sell-image" label=" Add Image" type="file" />
                        </Box>

                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3 mb-5 mt-5">
                            {" "}
                            <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                    Add service Provider
                            </Button>
                        </div>
                        {/* <div className='col-3'></div> */}
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
  )
}

export default addseller;
