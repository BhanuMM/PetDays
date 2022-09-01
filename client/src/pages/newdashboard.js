import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from "../components/navbarspecial";
import drug from "../images/drugs.png";
import man from "../images/man-01.png";
import cat from "../images/cat-01.png";
import diet from "../images/health.png";
import postmd from "../images/postsmd.png";
import addmd from "../images/addmd.png";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dash1 from "../images/dash1.png";
import dash2 from "../images/dash2.png";
import dash3 from "../images/dash3.png";
import dash4 from "../images/dash4.png";
import dash5 from "../images/dash5.png";

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
	  •
	</Box>
  );



function moderatordashboard() {
	return (

		<div class="container-fluid moderatordashboard">
			<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
			<div className="row">
				<Navbar />
			</div>
			<div className="row mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Moderatorsidebar />
					</div>
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-4">Moderator Dashboard</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Dashboard</a>
										</li>
									</ol>
								</nav><br/>
								<div class="row">
									<div class="col-xl-3 col-md-6">
									<Card sx={{ maxWidth: 250, minHeight: 125}}>
										<CardContent>
											<center><Typography variant="h2" component="div">
											 10
											</Typography>
											<Typography sx={{ mb: 1.5 }} color="text.secondary">
												Verified Posts
											</Typography></center>
										</CardContent>
									</Card>
										
									</div>
									<div class="col-xl-3 col-md-6">
									<Card sx={{ maxWidth: 250, minHeight: 125 }}>
										<CardContent>
										<center><Typography variant="h2" component="div">
											 10
											</Typography>
											<Typography sx={{ mb: 1.5 }} color="text.secondary">
												Verified Ads
											</Typography></center>
										</CardContent>
									</Card>
										
									</div>
									<div class="col-xl-3 col-md-6">
									<Card sx={{ maxWidth: 250, minHeight: 125 }}>
										<CardContent>
										<center><Typography variant="h2" component="div">
											 10
											</Typography>
											<Typography sx={{ mb: 1.5 }} color="text.secondary">
												Published Medications
											</Typography></center>
										</CardContent>
									</Card>
										
									</div>
									<div class="col-xl-3 col-md-6">
									<Card sx={{ maxWidth: 250, minHeight: 125 }}>
										<CardContent>
											<center><Typography variant="h2" component="div">
											 10
											</Typography>
											<Typography sx={{ mb: 1.5 }} color="text.secondary">
											Published Diet Plans
											</Typography></center>	
										</CardContent>
									</Card>
										
									</div>
								</div><br/><hr/><br/>
								<div class="row pt-3">
									<div class="col-xl-6 col-md-6">
										<Card sx={{ maxWidth: 590, minHeight: 125}}>
											<CardContent>
												<div class='dashcardcontent'>
													<div class='dashcardtitle'>
													<Typography variant="h5" component="div">
														Posts 
													</Typography>
													</div>
													<div class='dashcardimage'>
														<img
															src={dash3}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</div>
												</div>
												
												
											</CardContent>
										</Card>
									</div>
									<div class="col-xl-6 col-md-6">
									<Card sx={{ maxWidth: 590, minHeight: 125 }}>
										<CardContent>
										<div class='dashcardcontent'>
													<div class='dashcardtitle'>
													<Typography variant="h5" component="div">
														Advertisments 
													</Typography>
													</div>
													<div class='dashcardimage'>
														<img
															src={dash5}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</div>
												</div>
										</CardContent>
									</Card>
									</div>
								</div>
								<div class="row pt-3">
									<div class="col-xl-6 col-md-6">
									<Card sx={{ maxWidth: 590, minHeight: 125 }}>
										<CardContent>
										<div class='dashcardcontent'>
													<div class='dashcardtitle'>
													<Typography variant="h5" component="div">
														Medications 
													</Typography>
													</div>
													<div class='dashcardimage'>
														<img
															src={dash2}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</div>
												</div>	
										</CardContent>	
									</Card>
									</div>
									<div class="col-xl-6 col-md-6">
									<Card sx={{ maxWidth: 590, minHeight: 125 }}>
										<CardContent>
										<div class='dashcardcontent'>
													<div class='dashcardtitle'>
													<Typography variant="h5" component="div">
														Diet Plans 
													</Typography>
													</div>
													<div class='dashcardimage'>
														<img
															src={dash4}
															className="rounded img-fluid icon-image"
															alt="dog"
														/>
													</div>
												</div>	
										</CardContent>
									</Card>
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}

export default moderatordashboard;
