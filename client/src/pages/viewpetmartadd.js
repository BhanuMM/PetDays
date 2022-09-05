import React from 'react'
import G1 from '../images/pw.jpg';
import G2 from '../images/pw2.jpg';
import '../styles/viewpetmartadd.css';
import Footer from '../components/footer';
// import Navbar from '../components/navbar';

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
// import G2 from '../images/g2.jpg';
// import G1 from '../images/g1.jpg';
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
import DeleteIcon from '@mui/icons-material/Delete';


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

import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import Avatar from '@mui/material/Avatar';

function viewpetmartadd() {
  return (
    // <div className='Viewpetmartadds'>
    //     <Navbar />
    //   <div className='row mt-5 mb-5 pt-5 viewadd-hedder'>
    //     <div className='col-2'></div>
    //     <div className='col-8'>
    //         <div class='title  viewadd-hedder '>
    //           <div class='content'>
    //             <div className='row'>
    //               <div className='col-10'>
    //               <h1 class=" margintop-topc"></h1><hr/>
    //             {/* <nav aria-label="breadcrumb">
    //                               <ol class="breadcrumb">
    //                                 <li class="breadcrumb-item">
    //                                   <a href="/spdashboard" className="header-topic">
    //                                     Service Provider Dashboard /
    //                                   </a>
    //                                   <a href="/pending" className="header-topic">
    //                                      Pending Ads
    //                                   </a>
    //                                 </li>
    //                               </ol>
    //                           </nav> */}
    //               {/* <h3 className=''>DOG FRIENDS </h3> */}
    //                 <p> 22 August 2022</p>
    //               </div>
    //               <div className='col-2'>
    //                 <div class='button text-end pt-3'>
    //                   <div className='row'>

    //                     <div className='col-6'> <a href='/editservice' type="submit" class=" pl-5 pr-5 btn btn-success">Aprove</a></div>

    //                     <div className='col-6'> <a href='/petmart' type="submit" class=" pl-5 btn btn-danger">Reject</a></div>
    //                   </div>
                     
                     
                     
    //                 </div>
                    
    //               </div>
    //               <hr/>
    //             </div>
                
    //           </div> 
    //         </div>
    //         <div className='row pb-5'>
    //           <div className='col-1'></div>
    //           <div className='col-5'>
    //           <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
    //           </div>
    //           <div className='col-5'>
    //           <img src={G2} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
    //           </div>
    //           <div className='col-1'></div>
    //         </div>
    //         <div className='row'>
    //           <div className='col-5'>
    //           <p className='ml-5 pl-5 text-start'>
    //         <h3>Dog Walking Service</h3>
    //         <p><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
            
           

    //         <h4>Rs 2000.00 only</h4>
           
    //         </p>
    //         <p>
    //           Keep your dog happy and in greate space with our help.
    //           Let we take care of your pet while you are away.
    //         </p>
            
    //           </div>
    //           <div className='col-2'></div>
    //           <div className='col-5'>
    //             <p><h6>Contact Us</h6>
    //             <p><i class="fa fa-envelope" aria-hidden="true"></i> www.dogfriends.lk</p>
    //             <p><i class="fa fa-phone" aria-hidden="true"></i>+94 718 956 953 </p> 
    //             <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
    //             <p><i class="fa fa-map-marker" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

    //             </p>
    //           </div>
    //         </div>
            
           
            
            
             

    //     </div>
    //     <div className='col-2'></div>
    //    </div>
    //    <Footer />
    // </div>

    <div class="container-fluid moderatordashboard">
    <div className="row  mb-5">
      <Navbar />
    </div>
    <div className="row mt-4">
      <div className="row flex-nowrap pt-5">
      <div className="col-3  mt-5">
                 

                    {/* <Card sx={{ maxWidth: 345, display: 'flex', width:400, height:790 , marginLeft:4, marginRight:1,alignContent:'center', marginTop:10}}  elevation={3}>
                         
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
                        
                     </Card>  */}
                          <Box sx={{ flexGrow: 1,  marginTop:10 }}>
                                      <Grid container spacing={50} 
                                      direction="row"
                                      alignItems="center"
                                      justify="center"
                                      style={{ minHeight: '50vh' }}>
                                          <Grid item xs={3} md={0} align = 'center'>                                                         
                                            <Card sx={{  display: 'flex', width:400, height:750 }} elevation={5} align='center' className='card-alignments'>
                                                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'auto', marginRight:'auto' }} align='center' className='card-alignments'>
                                                      <CardContent sx={{marginright:0, align:'center'}} className='card-alignments'>
                                                        
                                                      <Avatar
                                                        alt="Remy Sharp"
                                                        src="https://t4.ftcdn.net/jpg/02/47/31/89/360_F_247318925_vOUBhAtYnTIyJcVpxoOP50pWK01f6dtr.jpg"
                                                        sx={{ width: 170, height: 170, marginTop:2}} style={{alignSelf: 'center'}} className='avetar-alignment'/>

                                                        <Typography fontSize={30}  sx={{marginTop:5}}  style={{fontcolor: 'black'}} align='center'>
                                                          Devid Pearsons
                                                          <Typography fontSize={15}  color="text.secondary" align='center'>
                                                            devidperson@gmail.com
                                                            <br/>
                                                            +94 71 94 72 047
                                                            
                                                            </Typography>
                                                          </Typography>
                             
                                                          <hr/>
                                                          <Typography sx={{marginTop:6}} >
                                                          <Typography fontSize={25} sx={{marginTop:2}} color="text.secondary">
                                                            <IconButton href='/approved'>
                                                            < BookmarkAddedTwoToneIcon  sx={{ fontSize: 25 }} href ='/approved'/>
                                                            </IconButton>
                                                            Publish Ads  : 08
                                                          </Typography>
                                                          <Typography fontSize={25} sx={{marginTop:4}} color="text.secondary">
                                                          <IconButton href='/pendingads'>
                                                          <BookmarksTwoToneIcon  sx={{ fontSize: 25 }}/>
                                                            </IconButton>
                                                            Pending Ads  : 02
                                                          </Typography >
                                                          <Typography fontSize={25} sx={{marginTop:4}} color="text.secondary">
                                                        
                                                          <IconButton href='/rejected'>
                                                          <BookmarkRemoveTwoToneIcon  sx={{ fontSize: 25 }}/>
                                                            </IconButton>
                                                          Rejected Ads  : 03
                                                          </Typography>
                                                        </Typography>
                                                        <Typography fontSize={25} sx={{marginTop:8}} align='center' >
                                                          <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:50, fontSize:15}}>
                                                          <EditIcon/>EDIT PROFILE
                                                          </Button>
                               
                                                          </Typography>
                                                        
                                                      </CardContent>
                                                      
                                                      
                                                     
                                                  </Box>   
                                            </Card>
                                          
                                          </Grid>
                                         
                                        
                                          
                                      
                                      
                                          
                                          
                                      </Grid>
                                  </Box>
           
        </div>
        <div className="col-9">
          <main>
            <div class="container-fluid px-4">
              <h1 class=" margintop-topc">Dog Care</h1>
              <p> 22 August 2022</p><hr/>
              <div className='row'>
                <div className='col-6'></div>

                <div className='col-3'> <Button variant="contained" size="large" color='secondary' href='/editservice' style={{backgroundColor:'#F66B0E'}} sx={{width:180, height:50, fontSize:20}}>
                                 <ModeEditOutlineIcon sx={{marginRight:2}}/> EDIT AD
                                 </Button></div>

                <div className='col-3'>  <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#e30b0b'}} sx={{width:150, height:50, fontSize:20}}>
                                 <DeleteIcon sx={{marginRight:1}}/>DELETE
                                 </Button></div>
              </div>
               
              <div className='row pb-5  viewadd-body'>
               <div className='col-1'></div>
               <div className='col-5'>
               <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
               </div>
               <div className='col-5 mt-5'>
               <p ><h2 className='mb-3'>Contact Us</h2>
                 <p className='fs-4 mb-3'><i class="fa fa-envelope text-5" aria-hidden="true"></i> www.dogfriends.lk</p>
                 <p className='fs-4 mb-3'><i class="fa fa-phone  text-5" aria-hidden="true"></i>+94 718 956 953 </p> 
                 <p className='fs-4 mb-3'><i class="fa fa-facebook-square  text-5" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
                <p className='fs-4 mb-3'><i class="fa fa-map-marker  text-5" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

                 </p>
              </div>
               <div className='col-1'></div>
             </div>
             <div className='row'>
               <div className='col-5'>
               <p className='ml-5 pl-5 text-start'>
            <h3>Dog Walking Service</h3>
             <p  className='fs-4 mb-3' ><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
            
           

            <h2>Rs 2000.00 only</h2>
           
             </p>
             <p  className='fs-4 mb-3 mt-3'>
              Keep your dog happy and in greate space with our help.
              Let we take care of your pet while you are away.
            </p>
            
              </div>
               <div className='col-2'></div>
               <div className='col-5'>
                
               </div>
           
            
           
            
            
             

        </div>

            
              
            
            </div>
          </main>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default  viewpetmartadd
