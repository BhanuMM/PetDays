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

import '../styles/spdashboard.css';

import Avatar from '@mui/material/Avatar';
function pendingads() {
	return (
		<div class="container-fluid moderatordashboard">
			<div className="row  mb-5">
				<Navbar />
			</div>
			<div className="row mt-4">
				<div className="row flex-nowrap pt-5">
        <div className="col-3  mt-5">
                   

                      <Card sx={{ maxWidth: 345, display: 'flex', width:400, height:790 , marginLeft:4, marginRight:1,alignContent:'center', marginTop:10}}  elevation={3}>
                           
                           <CardContent sx={{alignContent:'center'}}>
                          
                             <Avatar
                               alt="Remy Sharp"
                               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLkybiP3I5YBAAE11TvQBCRNXt-00rlnEi9k8G5kQJDJ1zdG49ZZqdVFeRR3MqOlyXfM&usqp=CAU"
                               sx={{ width: 150, height: 150, marginLeft:8,marginright:6,marginBottom:4, marginTop:6 }}
                               />
                               <Typography gutterBottom variant="h4" component="div"  sx={{marginTop:2, marginLeft:3}} >
                              Devid Person
                               <Typography fontSize={15} sx={{marginTop:2, marginLeft:3}} color="text.secondary">
                                 devidperson@gmail.com
                                 <br/>
                                 +94 71 94 72 047
                                 </Typography>
                               </Typography>
                               <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
                                 <IconButton href='/approved'>
                                 < BookmarkAddedTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }} href ='/approved'/>
                                 </IconButton>
                                 Published Ads : 08
                               </Typography>
                               <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
                               <IconButton href='/pendingads'>
                               <BookmarksTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }}/>
                                 </IconButton>
                                 Pending Ads : 02
                               </Typography >
                               <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
                              
                               <IconButton href='/rejected'>
                               <BookmarkRemoveTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }}/>
                                 </IconButton>
                               Rejected Ads : 03
                               </Typography>
                               <Typography fontSize={25} sx={{marginTop:5, marginLeft:4}} >
                                 <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
                                 <EditIcon/>EDIT PROFILE
                                 </Button>
                              
                               </Typography>
                               <Typography fontSize={25} sx={{marginTop:5, marginLeft:4}} >
                                 <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
                                 <PersonIcon/>LOG OUT
                                 </Button>
                              
                               </Typography>
                           </CardContent>
                          
                       </Card> 
						 
					</div>
					<div className="col-9">
						<main>
							<div class="container-fluid px-4">
								<h1 class=" margintop-topc">Pending Advertiesments</h1><hr/>
                <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                      <a href="/spdashboard" className="header-topic">
                                        Service Provider Dashboard /
                                      </a>
                                      <a href="/pending" className="header-topic">
                                         Pending Ads
                                      </a>
                                    </li>
                                  </ol>
                              </nav>
                
                <div class="cards mb-5">
                <div class="card">
              <img class="card-image" src={A1} alt=""/>
              <div class="card-content">
                <p>
                <p> 22 August 2022</p>
                  <h4>
                    DOG FRIENDS
                  </h4>
                  <p className="serviceproviderdashboard-cancledtextcolor"><i class="fa fa-circle" aria-hidden="true"></i> Pending</p>
                  Dog Walking Service.<br/>
                  Keep your dog happy....
                </p>
              </div>
              <div class="card-info">
                <div>
                <a href="\viewpetmartadd" class="card-link">View More Details <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
           
            <div class="card">
              <img class="card-image" src={A3} alt=""/>
              <div class="card-content">
              <p>
                <p> 21 August 2022</p>
                  <h4>
                  DOG FRIENDS
                  </h4>
                  <p className="serviceproviderdashboard-cancledtextcolor"><i class="fa fa-circle" aria-hidden="true"></i> Pending</p>
                  Pet Grooming Service.<br/>
                  Keep your dog cool....
                </p>
              </div>
              <div class="card-info">
                <div>
                <a href="\viewpets" class="card-link">View More Details <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
              </div>
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

export default pendingads;
