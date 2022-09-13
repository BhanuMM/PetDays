import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Moderatorsidebar from "../components/moderatorsidebar";


const bull = (
    	<Box
    	  component="span"
    	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
    	>
    	  •
    	</Box>
    );



function mdeditdogdiet() {
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
										<h1 class="h2 mb-0 ls-tight">Edit Diet Plan</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard">
														Moderator Dashboard /
													</a>
													<a href="/mddogdiet">
														 Diet Plans / 
													</a>
                                                    <a href="/mdeditdiet">
														 Edit Diet Plan
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
                            <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:630, padding: 10, paddingLeft:75}}>
                        <CardContent>
                        <form><br/><br/>

                       <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField  id="outlined-required"label="Name of the diet"defaultValue="Hello World" />
                                <TextField  id="outlined-required"label="Breed / Category"defaultValue="Hello World" type="Dropdown"/>
                                <TextField  id="outlined-required"label="Description about the Diet Plan"defaultValue="Hello World" />
                                <TextField  id="outlined-required"label="Age Range of the Dog"defaultValue="Hello World" />
                                <TextField  id="outlined-required"label="Weight Range of the Dog"defaultValue="Hello World" />
                                <TextField  id="outlined-required"label="Add items"defaultValue="Hello World" />
                        </Box>

                            
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mb-5 mt-5">
                                    {" "}
                                    <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                        Update Diet Plan
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

export default mdeditdogdiet;