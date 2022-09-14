import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forum.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';


function forum() {
  return (
    <div className='forum'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forum'>
      <div className="row mt-3">
        <div class="row  ">
          
          <main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
							<div style={{paddingLeft:20}}>
              <div style={{paddingLeft:950}}>
                <a href="\mdadddogdiet" className="header-topic">
									<Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                    Start New Disscussion
                  </Button>
								</a>
              </div>
              <br/><br/>

               
                <div class="search-line"  style={{display: "flex"}}>
                <p class="fw-semibold " style={{paddingRight:40}}>Filtery by :</p>

									<p class="fw-semibold ">  
									<div class="dropdown" style={{paddingRight:40,paddingLeft:20}}>
									<button
										class="btn btn-dark dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"

										style={{height:40 , backgroundColor: '#205375', width:200, borderColor:'#205375'}}
									>
										Recently Published
									</button>
									<div
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton"
									>
										<a class="dropdown-item" href="#">
										Recent Week
										</a>
										<a class="dropdown-item" href="#">
										Last Month
										</a>
									</div>
									</div></p>

									
									<div class="dropdown" style={{paddingRight:50}}>
									<button
										class="btn btn-dark"
										type="button"
										style={{height:40 , backgroundColor: '#205375', width:150, borderColor:'#205375'}}
									>
										Filter
									</button>
									</div>
									

									<div class="input-group" style={{width:575,paddingRight:50}}>
										<input type="search" class="form-control rounded" placeholder="Search Forum Posts" aria-label="Search" aria-describedby="search-addon" style={{height:40}}/>
										<button type="button" class="btn" style={{height:40,backgroundColor: '#205375',color:'white'}} >Search</button>
									</div>
								</div>
                                <CardContent>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Published 5 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'style={{  paddingRight:50}}>
                                        <p class="fw-semibold fs-7"><a href="#" class="link-success text-decoration-none">5 Comments</a></p>
                                    </div>
                            </div>

                                </div>
                                </Card><br/>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Posted 35 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'style={{  paddingRight:50}}>
                                        <p class="fw-semibold fs-7"><a href="#" class="link-success text-decoration-none">25 Comments</a></p>
                                    </div>
                            </div>

                                </div>
                                </Card><br/>
                                <Card sx={{ minWidth: 250, maxWidth: 1500}} style={{ padding: 10, paddingLeft:25}}>
                                <div class="card-body">
                                <div class="content">
                                    <div>
                                        <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                                        <p class="font-italic text-success fs-7">Posted 15 minutes ago.</p>
                                    </div>  
                                    <div>
                                    Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                                    </div>
                                    <div class='comment'style={{  paddingRight:50}}>
                                        <p class="fw-semibold fs-7"><a href="#" class="link-success text-decoration-none">10 Comments</a></p>
                                    </div>
                            </div>

                                </div>
                                </Card><br/>

                                </CardContent>
                            
            				</div>
	
							</div>
							
						</div>
					</main>
          
          
        </div>     
      </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default forum
