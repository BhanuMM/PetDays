import React from 'react'
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/petmart.css';
import A1 from '../images/a1.jpg';
import A2 from '../images/a2.jpg';
import A3 from '../images/a3.jpg';
import A4 from '../images/a4.jpg';
import G3 from '../images/g3.jpg';
import G2 from '../images/g2.jpg';
import G1 from '../images/g1.jpg';
import G4 from '../images/g4.jpg';
import Footer from '../components/footer';
// import Navbar from '../components/navbar';
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field ,ErrorMessage } from "formik";
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
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
import Avatar from '@mui/material/Avatar';

import '../styles/spdashboard.css';

function addpetmartadd() {
  return (
//     <div className='Addpetmartadd'>
//          <Navbar />

// {/* <header className="header"/>  */}
// <div class="container-fluid text-center  pemart-page">
//     <div class="row mb-5 pb-5">
//         <h1 className=''>GROOMING <hr/></h1>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize">
//                 <img src={G1} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
                    
//                     <h5 className="card-text petmart-cardtext pr-5">We Love Your pets</h5>
                    
//                     <button href="" className="btn btn-warning">LKR 1000</button>
//                     <button class="round-button">+</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize">
//                 <img src={G4} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext  pr-5">We Love Your pets</h5>
//                     <button href="" className="btn btn-warning">LKR 1000</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize" >
//                 <img src={G2} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext ">Pet care</h5>
//                     <button href="" className="btn btn-warning  ">LKR 1000</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize" >
//                 <img src={G3} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body text-center">
//                     <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
                    
//                     <button href="" className="btn btn-warning  ">LKR 1000</button>

//                 </div>
//             </div>
//         </div>
        
//     </div>
//     <div class="row pt-5">
//         <h1>ACCESSORIES <hr/></h1>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize" >
//                 <img src={A1} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
//                     <button href="" className="btn btn-warning ">LKR 1000</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize" >
//                 <img src={A4} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
//                     <button href="" className="btn btn-warning ">LKR 1000</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize" >
//                 <img src={A2} className="card-img-top petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
//                     <button href="" className="btn btn-warning ">LKR 1000</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-3 mt-5">
//             <div class="card petmart-cardsize">
//                 <img src={A3} className="card-img-top  petmart-image" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-text petmart-cardtext">To All Dog Lovers Outthere</h5>
//                     <button href="" className="btn btn-warning ">LKR 1000</button>

//                 </div>
//             </div>
//         </div>
        
//     </div>
        
        
// </div>

// <Footer />

     
//     </div>
<div class="container-fluid">
<div className="row">
    <Navbar />
</div>
<div className="row pt-0 mt-5">
    <div className="row flex-nowrap pt-0">
        {/* <div className="col-3  col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4"> */}
            {/* <Sidebar /> */}
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
                       <div className="col-3  mt-5  ">
                   

                   {/* <Card sx={{ maxWidth: 345, display: 'flex', width:400, height:790 , marginLeft:2, marginRight:2,alignContent:'center', marginTop:20}}  elevation={3}>
                        
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
        {/* </div> */}
        <div className="col-9 g-5 ml-5 mt-5">
        <h1 class="margintop-topc">Create New Advertiesment</h1><hr/>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#" className="header-topic">Service Provider Dashboard / Create Add</a>
                            </li>
                        </ol>
                    </nav>
            
        {/* <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:450, padding: 10, paddingLeft:75}}>
        <CardContent> */}
        {/* <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={Schema}
            > */}

            <form><br/><br/><br/>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField id="ad-name" label="Name of advertiesment" /><br/>
                    <TextField id="sp-name" label="Name of supplier"/>
                    <TextField id="descrip" label="Description"/>
                    <TextField id="Price" label="Price Rs:"/>
                    <TextField id="image" label="Image (Change the input type)"/>
                    <TextField id="contact" label="Contact Number"/>
                    <TextField id="address" label="Address"/>
                    <TextField id="email" label="Email"/>
                    <TextField id="fb" label="Facebook"/>
                </Box>

                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 mb-5 mt-5">
                        {" "}
                        <Button variant="contained" component="label" sx={{margin:1}}  style={{backgroundColor: '#F66B0E'}}>
                           Submit
                        </Button>
                        <Button variant="contained" component="label" sx={{margin:1}}  style={{backgroundColor: '#e30b0b'}}>
                           Delete
                        </Button>
                    </div>
                    {/* <div className='col-3'></div> */}
                </div>
            </form>
            {/* </Formik> */}
            {/* </CardContent>
      
    </Card> */}
        </div>
        
    </div>
</div>
</div>
  );
}

export default addpetmartadd