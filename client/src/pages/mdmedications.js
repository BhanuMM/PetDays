import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from '../components/navbarspecial';
import cat from '../images/medicine 2-01.jpg';
import cattle from '../images/medicine 3-01.jpg';
import dog from '../images/medicine 4-01.jpg';
function medications() {
  return (
    <div class="container-fluid">
       <div className='row'>
        <Navbar />
       </div>
      <div className='row mt-5'>
        <div className="row flex-nowrap pt-5">
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
              <Moderatorsidebar />
          </div>
          <div class="container-fluid px-4">
          <h1 class="mt-4">Medications</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Medications</a>
										</li>
									</ol>
								</nav>
          <div class="cards">
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    Medicines
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewmedications" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cat} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                    Vaccines
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewmedications" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cattle} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                    Vitamins
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewmedications" class="card-link">View Details</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default medications
