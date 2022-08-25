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
function pendingads() {
	return (
		<div class="container-fluid moderatordashboard">
			<div className="row">
				<Navbar />
			</div>
			<div className="row mt-4">
				<div className="row flex-nowrap pt-5" >
					<div className="col-2  side-color  col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Serviceprovidersidebar />
					</div>
					<div className="col-10">
						<main>
							<div class="container-fluid px-4">
								<h1 class="mt-5">Approved Ads</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											{/* <a href="#" className="header-topic">Dashboard</a> */}
										</li>
									</ol>
								</nav>
                
                <div class="cards mb-5">
              
           
            <div class="card">
              <img class="card-image" src={A3} alt=""/>
              <div class="card-content">
              <p>
                <p> 21 August 2022</p>
                  <h4>
                  Pet Daycare
                  </h4>
                  <p className=""><i class="fa fa-circle" aria-hidden="true"></i> Approved</p>
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

            <div class="card">
              <img class="card-image" src={A3} alt=""/>
              <div class="card-content">
              <p>
                <p> 21 August 2022</p>
                  <h4>
                  DOG FRIENDS
                  </h4>
                  <p className=""><i class="fa fa-circle" aria-hidden="true"></i> Approved</p>
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
