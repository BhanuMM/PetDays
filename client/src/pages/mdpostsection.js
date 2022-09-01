import * as React from 'react';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import '../styles/mdpostsection.css';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from '../components/navbarspecial';
import cat from '../images/medicine 2-01.jpg';
import cattle from '../images/medicine 3-01.jpg';
import dog from '../images/medicine 4-01.jpg';
import dogD from '../images/animals-01.jpg';
import catD from '../images/cat-01.jpg';
import Ad1 from '../images/post-1.png';
import Ad2 from '../images/post-3.jpg';
import Box from '@mui/material/Box';
import post1 from '../images/adv1.jpg';
import post2 from '../images/adv2.jpg';

import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
  >
    •
  </Box>
);

function moderatordashboard() {
	return (
		<div class="container-fluid moderatordashboard">
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
								<h1 class="mt-4">Forum Posts</h1><hr/>

								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="/moderatordashboard" className="header-topic">Moderator Dashboard</a> / <a href="mdpostsection" className="header-topic">Forum Posts</a>
                      <br/><br/><br/>
										</li>
									</ol>
								</nav>
                <Card sx={{ minWidth: 275, maxWidth: 1100, marginLeft: 15}} style={{height:450}}>
                  <CardContent>
                  
                    <Grid
                      container
                      spacing={3}
                      justifyContent="center"
                      alignItems="stretch"
                    >
                    <Grid item xs={12} sm={6}>
                    <a href="\mdnewpendingposts" role="button" aria-pressed="true">
                    <Card sx={{ maxWidth: 345 }} style={{margin: 50, marginTop :55, marginLeft: 103, textAlign: 'center', height:300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="230"
                        image={post1}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Pending Posts
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography> */}
                      </CardContent>
                    </CardActionArea>
                  </Card></a>
                  </Grid>
            <Grid item xs={12} sm={6}>
                <a href="\mdnewverifyposts" role="button" aria-pressed="true">
                <Card sx={{ maxWidth: 345 }} style={{margin: 50, marginTop : 55, textAlign: 'center', height:300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="230"
                      image={post2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Verified Posts
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card></a>
                </Grid>
              </Grid>
          
            
                  </CardContent>
                  
                </Card>
          {/* <div class="cards"> */}
          {/* <div class="card">
              <img class="card-image" src={Ad1} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    Pending Posts
                  </h4>
                  
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\mdnewpendingposts" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Details</button></a>
                </div>
              </div>
            </div> */}

            {/* <Card style={cardStyle} sx={{ maxWidth: 1000 }}>
            <Container>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
              </Grid>
          </Container>
            </Card> */}

                

            {/* <div class="card">
              <img class="card-image" src={Ad2} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                Verified Posts
                  </h4>
                  
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\mdnewverifyposts" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Details</button></a>
                </div>
              </div>
            </div> */}
            
          {/* </div> */}
          </div>
          </main>
          </div>
        </div>
      </div>
      </div>
  )

}

export default moderatordashboard
