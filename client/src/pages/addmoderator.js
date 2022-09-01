import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
	>
	  •
	</Box>
);


function addmoderator() {
	return (
		<div class="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row pt-0 mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Sidebar />
					</div>
					<div className="col-7 g-5">
					<h1 class="mt-4">Add Moderator</h1><hr/>
							<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Medications / Vitamins </a>
										</li>
									</ol>
							</nav><br/><br/>

						<Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:670, padding: 10, paddingLeft:75}}>
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
                                <TextField id="mod-fname" label="First Name" /><br/>
                                <TextField id="mod-lname" label=" Last Name"/>
								<TextField id="mod-contact" label=" Contact Number"/>
								<TextField id="mod-email" label=" E mail"/>
								<TextField id="mod-nic" label=" NIC Number"/>
								<TextField id="mod-image" label=" Add Image" type="file" />
                        </Box>
							{/* <div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									First Name
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Last Name
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Contact Number
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Email
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									NIC Number
								</label>
								<input
									type="text"
									class="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<div class="mb-3">
								<label className="form-label" for="customFile">
									Add Image
								</label>
								<input type="file" className="form-control" id="customFile" />
							</div> */}
							

							<div className="row">
								<div className="col-9"></div>
								<div className="col-3 mb-5 mt-5">
									{" "}
									<Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                        Add Moderator
                                    </Button>
								</div>
								{/* <div className='col-3'></div> */}
							</div>
						</form>
					</CardContent>
                </Card>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		</div>
	);
}

export default addmoderator;
