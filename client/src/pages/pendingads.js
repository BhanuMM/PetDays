import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
// import "../styles/card.css";
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from "../components/navbarspecial";
import drug from "../images/drugs.png";
import man from "../images/man-01.png";
import cat from "../images/cat-01.png";
import diet from "../images/health.png";
import postmd from "../images/postsmd.png";
import addmd from "../images/addmd.png";
import Serviceprovidersidebar from "../components/serviceprovidersidebar";
import "../styles/moderatordashboard.css";
import '../styles/petmart.css';
import '../styles/forum.css';
import A1 from '../images/pw2.jpg';
import A2 from '../images/a2.jpg';
import A3 from '../images/a3.jpg';
import A4 from '../images/a4.jpg';
import G3 from '../images/g3.jpg';
import G2 from '../images/g2.jpg';
import G1 from '../images/g1.jpg';
import G4 from '../images/g4.jpg';
import '../styles/petcategories.css';
import '../styles/serviceproviderdashboard.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Cancle from '../images/forgot.png';
import { useTheme } from '@mui/material/styles';


import Stack from '@mui/material/Stack';
import { brown, purple } from '@mui/material/colors';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//icons
import BookmarkRemoveTwoToneIcon from '@mui/icons-material/BookmarkRemoveTwoTone';
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Sellersidebar from "../components/serviceprovidersidebar";

import '../styles/spdashboard.css';

import Avatar from '@mui/material/Avatar';
function pendingads() {
	return (
	
    <div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Sellersidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Pending Advertiesments</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/spdashboard" className="header-topic">
														Service Provider Dashboard / 
													</a>
													<a href="/pendingads" className="header-topic">
														 Pending Ads
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
              <div className="row">
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://www.acs.edu.au/database/images/course_4335051.jpg" class="img-fluid rounded"/>
                      <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button>  <button class="btn btn-outline-danger px-3">Edit Ad</button> </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://cdn.cdnparenting.com/articles/2018/12/196619114-H.jpg" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button>  <button class="btn btn-outline-danger px-3">Edit Ad</button> </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://www.thedoghouseps.com/wp-content/uploads/2020/01/combing-the-head-of-yorkshire-terrier-picjumbo-com-1-1024x683.jpg" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button>  <button class="btn btn-outline-danger px-3">Edit Ad</button> </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2019/01/BonnieArbittier_lucys_doggy_daycare_dog_pet_boarding_1604_new_location_grooming_1-16-2019-8.jpg?fit=1170%2C780&ssl=1" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button>  <button class="btn btn-outline-danger px-3">Edit Ad</button> </div>
                  </div>
              </div>
                </div>
              </div>
             
              
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default pendingads;
