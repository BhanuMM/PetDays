import React from 'react'
import '../styles/spdashboard.css';
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
import Navbar from "../components/dashnavbar";

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

import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';





// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';




import IconButton from '@mui/material/IconButton';
// import Serviceprovidersidebar from "../components/serviceprovidersidebar";


const createbutton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const seemorebutton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    '&:hover': {
      backgroundColor: brown[700],
    },
  }));



  const card = (
    <React.Fragment>
      <CardContent>
        <Typography >
        <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="300"
                image="https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6"
                            />
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" color='secondary' sx={{width:200, height:30, fontSize:15}}>
           See More
        </Button>
      </CardActions>
    </React.Fragment>
  );





function spdashboard() {
  return (
    <div className='Spdashboard'>
        <div class="container-fluid moderatordashboard">
			<div className="row mb-5">
				<Navbar />
			</div>
			<div className="row mt-5">
				<div className="row flex-nowrap pt-5 mt-5">
					<div className="col-3  mt-5">
                   

                        <Card sx={{display: 'flex', width:400, height:790 , marginLeft:1, marginRight:0,alignContent:'center', marginTop:10}}  elevation={3}>
                           
                            <CardContent sx={{alignContent:'center',alignItems:'center'}}>
                           
                              <Avatar
                                alt="Remy Sharp"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLkybiP3I5YBAAE11TvQBCRNXt-00rlnEi9k8G5kQJDJ1zdG49ZZqdVFeRR3MqOlyXfM&usqp=CAU"
                                sx={{ width: 150, height: 150, alignItems:'center' }}
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
                    <div className='col-9 mt-5'>
                        <main className='mt-5'>
                          <div class="container-fluid p mt-5">
                              <h1 class=" margintop-topc">Service Provider Dashboard</h1><hr/>
                                <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                      <a href="/spdashboard" className="header-topic">
                                        Service Provider Dashboard
                                      </a>
                                      {/* <a href="/mdpostsection" className="header-topic">
                                        Forum Posts
                                      </a> */}
                                    </li>
                                  </ol>
                              </nav>

                                  <div className='text-end mt-4 mb-5'>
                                      <Button variant="contained" size="large" color='secondary' href='addpetmartadd' style={{backgroundColor:'#F66B0E'}} sx={{width:380, height:70, fontSize:23, marginRight:4}}>
                                          <AddBoxIcon  sx={{ fontSize: 30, marginRight:2 }}/>CREATE NEW ADD
                                      </Button>
                                  </div>
                                  <Box sx={{ flexGrow: 1,  marginTop:10 }}>
                                      <Grid container spacing={50} 
                                      direction="row"
                                      alignItems="center"
                                      justify="center"
                                      style={{ minHeight: '50vh' }}>
                                          <Grid item xs={3} md={0} align = 'center'>                                                         
                                            <Card sx={{  display: 'flex', width:300, height:450 }} elevation={5} align='center' className='card-alignments'>
                                                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'auto', marginRight:'auto' }} align='center' className='card-alignments'>
                                                      <CardContent sx={{marginright:0, align:'center'}} className='card-alignments'>
                                                        
                                                          <Typography  component="">
                                                              < BookmarkAddedTwoToneIcon  sx={{ fontSize: 150}}/>
                                                          </Typography>
                                                                  
                                                          <Typography variant="h5" component=""  sx={{ marginTop:3}}>
                                                            PUBLISH 
                                                          </Typography>
                                                            
                                                          <Typography sx={{ mb: 1.5, fontSize: 45, align:'center'}}  color='#d50000' align='center' >
                                                              08 
                                                          </Typography>
                                                        
                                                      </CardContent>
                                                      
                                                      <Button href='/approved' variant="contained" size="medium" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:40, fontSize:15, align:'center'}}>
                                                              VIEW ADS  < KeyboardDoubleArrowRightOutlinedIcon sx={{ margin:1} }/>
                                                      </Button>
                                                  </Box>   
                                            </Card>
                                          
                                          </Grid>
                                          <Grid item xs={3} md={0} align = 'center'>                                                         
                                            <Card sx={{  display: 'flex', width:300, height:450 }} elevation={5} align='center' className='card-alignments'>
                                                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'auto', marginRight:'auto' }} align='center' className='card-alignments'>
                                                      <CardContent sx={{marginright:0, align:'center'}} className='card-alignments'>
                                                        
                                                          <Typography  component="">
                                                              < BookmarksTwoToneIcon  sx={{ fontSize: 150}}/>
                                                          </Typography>
                                                                  
                                                          <Typography variant="h5" component=""  sx={{ marginTop:3}}>
                                                          PENDING ADS 
                                                          </Typography>
                                                            
                                                          <Typography sx={{ mb: 1.5, fontSize: 45, align:'center'}}  color='#d50000' align='center' >
                                                            	01  
                                                          </Typography>
                                                        
                                                      </CardContent>
                                                      
                                                      <Button href='/approved' variant="contained" size="medium" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:40, fontSize:15, align:'center'}}>
                                                              VIEW ADS  < KeyboardDoubleArrowRightOutlinedIcon sx={{ margin:1} }/>
                                                      </Button>
                                                  </Box>   
                                            </Card>
                                          
                                          </Grid>
                                          <Grid item xs={3} md={0} align = 'center'>                                                         
                                            <Card sx={{  display: 'flex', width:300, height:450 }} elevation={5} align='center' className='card-alignments'>
                                                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'auto', marginRight:'auto' }} align='center' className='card-alignments'>
                                                      <CardContent sx={{marginright:0, align:'center'}} className='card-alignments'>
                                                        
                                                          <Typography  component="">
                                                              < BookmarkRemoveTwoToneIcon  sx={{ fontSize: 150}}/>
                                                          </Typography>
                                                                  
                                                          <Typography variant="h5" component=""  sx={{ marginTop:3}}>
                                                            REJECTED    
                                                          </Typography>
                                                            
                                                          <Typography sx={{ mb: 1.5, fontSize: 45, align:'center'}}  color='#d50000' align='center' >
                                                            03 
                                                          </Typography>
                                                        
                                                      </CardContent>
                                                      
                                                      <Button href='/approved' variant="contained" size="medium" color='secondary' style={{backgroundColor:'#F66B0E'}} sx={{width:200, height:40, fontSize:15, align:'center'}}>
                                                              VIEW ADS  < KeyboardDoubleArrowRightOutlinedIcon sx={{ margin:1} }/>
                                                      </Button>
                                                  </Box>   
                                            </Card>
                                          
                                          </Grid>
                                          
                                      
                                      
                                          
                                          
                                      </Grid>
                                  </Box>
                          </div>
                        </main>
                      </div>
                      
                </div>
            </div>
      
   
        </div>
        

  


     
    </div>
  )
}

export default spdashboard