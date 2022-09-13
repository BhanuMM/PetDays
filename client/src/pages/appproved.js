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

import Sellersidebar from "../components/serviceprovidersidebar";

import '../styles/spdashboard.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

import Avatar from '@mui/material/Avatar';
function pendingads() {
	return (
// 		<div class="container-fluid moderatordashboard">
// 			<div className="row  mb-5">
// 				< Sellersidebar/>
// 			</div>
// 			<div className="row mt-4">
// 				<div className="row flex-nowrap pt-5" >
//         <div className="col-3  mt-5">
//                     {/* <Card sx={{ display: 'flex', width:300, height:550 , marginLeft:8, marginRight:8}} elevation={5}>
                               
//                                {card}
//                            </Card> */}

//                           {/* <Card sx={{ maxWidth: 345, display: 'flex', width:400, height:790 , marginLeft:2, marginRight:2,alignContent:'center', marginTop:10}}  elevation={3}>
                           
//                            <CardContent sx={{alignContent:'center'}}>
                          
//                              <Avatar
//                                alt="Remy Sharp"
//                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLkybiP3I5YBAAE11TvQBCRNXt-00rlnEi9k8G5kQJDJ1zdG49ZZqdVFeRR3MqOlyXfM&usqp=CAU"
//                                sx={{ width: 150, height: 150, marginLeft:8,marginright:6,marginBottom:4, marginTop:6 }}
//                                />
//                                <Typography gutterBottom variant="h4" component="div"  sx={{marginTop:2, marginLeft:3}} >
//                               Devid Person
//                                <Typography fontSize={15} sx={{marginTop:2, marginLeft:3}} color="text.secondary">
//                                  devidperson@gmail.com
//                                  <br/>
//                                  +94 71 94 72 047
//                                  </Typography>
//                                </Typography>
//                                <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
//                                  <IconButton href='/approved'>
//                                  < BookmarkAddedTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }} href ='/approved'/>
//                                  </IconButton>
//                                  Published Ads : 08
//                                </Typography>
//                                <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
//                                <IconButton href='/pendingads'>
//                                <BookmarksTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }}/>
//                                  </IconButton>
//                                  Pending Ads : 02
//                                </Typography >
//                                <Typography fontSize={25} sx={{marginTop:2, marginLeft:2}} color="text.secondary">
                              
//                                <IconButton href='/rejected'>
//                                <BookmarkRemoveTwoToneIcon  sx={{ fontSize: 25, marginRight:2 }}/>
//                                  </IconButton>
//                                Rejected Ads : 03
//                                </Typography>
//                                <Typography fontSize={25} sx={{marginTop:5, marginLeft:4}} >
//                                  <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
//                                  <EditIcon/>EDIT PROFILE
//                                  </Button>
                              
//                                </Typography>
//                                <Typography fontSize={25} sx={{marginTop:5, marginLeft:4}} >
//                                  <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
//                                  <PersonIcon/>LOG OUT
//                                  </Button>
                              
//                                </Typography>
//                            </CardContent>
                          
//                        </Card>  */}

// {/* <Box sx={{ flexGrow: 1,  marginTop:10 }}>
//                                       <Grid container spacing={50} 
//                                       direction="row"
//                                       alignItems="center"
//                                       justify="center"
//                                       style={{ minHeight: '50vh' }}>
//                                           <Grid item xs={3} md={0} align = 'center'>                                                         
//                                             <Card sx={{  display: 'flex', width:400, height:750 }} elevation={5} align='center' className='card-alignments'>
//                                                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'auto', marginRight:'auto' }} align='center' className='card-alignments'>
//                                                       <CardContent sx={{marginright:0, align:'center'}} className='card-alignments'>
                                                        
//                                                       <Avatar
//                                                         alt="Remy Sharp"
//                                                         src="https://t4.ftcdn.net/jpg/02/47/31/89/360_F_247318925_vOUBhAtYnTIyJcVpxoOP50pWK01f6dtr.jpg"
//                                                         sx={{ width: 170, height: 170, marginTop:2}} style={{alignSelf: 'center'}} className='avetar-alignment'/>

//                                                         <Typography fontSize={30}  sx={{marginTop:5}}  style={{fontcolor: 'black'}} align='center'>
//                                                           Devid Pearsons
//                                                           <Typography fontSize={15}  color="text.secondary" align='center'>
//                                                             devidperson@gmail.com
//                                                             <br/>
//                                                             +94 71 94 72 047
                                                            
//                                                             </Typography>
//                                                           </Typography>
                             
//                                                           <hr/>
//                                                           <Typography sx={{marginTop:6}} >
//                                                           <Typography fontSize={25} sx={{marginTop:2}} color="text.secondary">
//                                                             <IconButton href='/approved'>
//                                                             < BookmarkAddedTwoToneIcon  sx={{ fontSize: 25 }} href ='/approved'/>
//                                                             </IconButton>
//                                                             Publish Ads  : 08
//                                                           </Typography>
//                                                           <Typography fontSize={25} sx={{marginTop:4}} color="text.secondary">
//                                                           <IconButton href='/pendingads'>
//                                                           <BookmarksTwoToneIcon  sx={{ fontSize: 25 }}/>
//                                                             </IconButton>
//                                                             Pending Ads  : 02
//                                                           </Typography >
//                                                           <Typography fontSize={25} sx={{marginTop:4}} color="text.secondary">
                                                        
//                                                           <IconButton href='/rejected'>
//                                                           <BookmarkRemoveTwoToneIcon  sx={{ fontSize: 25 }}/>
//                                                             </IconButton>
//                                                           Rejected Ads  : 03
//                                                           </Typography>
//                                                         </Typography>
//                                                         <Typography fontSize={25} sx={{marginTop:8}} align='center' >
//                                                           <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
//                                                           <EditIcon/>EDIT PROFILE
//                                                           </Button>
                               
//                                                           </Typography>
                                                        
//                                                       </CardContent>
                                                      
                                                      
                                                     
//                                                   </Box>   
//                                             </Card>
                                          
//                                           </Grid>
                                         
                                        
                                          
                                      
                                      
                                          
                                          
//                                       </Grid>
//                                   </Box> */}
						 
// 					</div>
// 					<div className="col-9 mt-5">
// 						<main className="mt-5">
// 							<div class="container-fluid  mt-5">
// 								<h1 class=" margintop-topc">Published Advertiesments</h1><hr/>
// 								<nav aria-label="breadcrumb">
//                                   <ol class="breadcrumb">
//                                     <li class="breadcrumb-item">
//                                       <a href="/spdashboard" className="header-topic">
//                                         Service Provider Dashboard /
//                                       </a>
//                                       <a href="/approved" className="header-topic">
//                                         Published Ads
//                                       </a>
//                                     </li>
//                                   </ol>
//                               </nav>
                
//                 <div class="cards mb-5">
              
           
//             <div class="card">
//               <img class="card-image" src={A3} alt=""/>
//               <div class="card-content">
//               <p>
//                 <p> 21 August 2022</p>
//                   <h4>
//                   Pet Daycare
//                   </h4>
//                   <p className=""><i class="fa fa-circle" aria-hidden="true"></i> Approved</p>
//                   Pet Grooming Service.<br/>
//                   Keep your dog cool....
//                 </p>
//               </div>
//               <div class="card-info">
//                 <div>
//                 <a href="\viewpetmartadd" class="card-link">View More Details <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
//                 </div>
//               </div>
//             </div>

//             <div class="card">
//               <img class="card-image" src={A3} alt=""/>
//               <div class="card-content">
//               <p>
//                 <p> 21 August 2022</p>
//                   <h4>
//                   DOG FRIENDS
//                   </h4>
//                   <p className=""><i class="fa fa-circle" aria-hidden="true"></i> Approved</p>
//                   Pet Grooming Service.<br/>
//                   Keep your dog cool....
//                 </p>
//               </div>
//               <div class="card-info">
//                 <div>
//                 <a href="\viewpets" class="card-link">View More Details <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
//                 </div>
//               </div>
//             </div>
          
          
                  
//                 </div>
								
								
							
// 							</div>
// 						</main>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
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
              <h1 class="h2 mb-0 ls-tight">Publised Advertiesments</h1>
              <hr />
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/spdashboard" className="header-topic">
                      Service Provider Dashboard / 
                    </a>
                    <a href="/pendingads" className="header-topic">
                       Published Ads
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
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color"  href="\pendingads">View Ad</button>  <button class="btn btn-outline-danger px-3">Edit Ad</button> </div>
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
