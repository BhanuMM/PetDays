import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import G1 from '../images/pw.jpg';
import G2 from '../images/pw2.jpg';
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Moderatorsidebar from "../components/moderatorsidebar";
import Spsidebar from "../components/spsidebar";
import Navbarsp from "../components/navsp";

function mdviewad() {
	return (
		<div class="container-fluid">
            <Navbarsp/>
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
			<div className="">
					<Spsidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
                <br/><br/><br/><br/>
					<main class="py-6 bg-surface-secondary">
						<div class="container-fluid">
							<div class="row g-6 mb-6">
							<div style={{paddingLeft:20}}>
                            <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} >
                        <CardContent style={{paddingLeft:50}}>
							<div>
								<h3 className=''>DOG FRIENDS </h3>
								<p> Posted on 22 August 2022</p>
								<hr/>
							</div>
							<div className="row" style={{paddingLeft:250}}>
								<img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
							</div><br/>
							
							<div style={{display:"flex", paddingLeft:170}}>
								<div style={{width:400, paddingRight:100}}>
									<h3>Dog Walking Service</h3>
									<p><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p><br/>
									<h4>Rs 2000.00 only</h4>
									<p>
									Keep your dog happy and in great space with our help.
									Let we take care of your pet while you are away.
									</p>
								</div>
								<div>
								<p><h5>Contact Us</h5>
                                    <p><i class="fa fa-envelope" aria-hidden="true"></i> www.dogfriends.lk</p>
                                    <p><i class="fa fa-phone" aria-hidden="true"></i>+94 718 956 953 </p> 
                                    <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

                                    </p>
								</div>

							</div><br/><br/>
							
						
                           
        </CardContent>
                    </Card>
            				</div>
	
							</div>
							
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default mdviewad;
