import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from '../components/navbarspecial';
import cat from '../images/medicine 2-01.jpg';
import cattle from '../images/medicine 3-01.jpg';
import dog from '../images/medicine 4-01.jpg';
import dogD from '../images/animals-01.jpg';
import catD from '../images/cat-01.jpg';
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

          <div class="container-fluid px-4"><br/>
          <h1 class="mt-4">Diet Plans</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Diet Plans</a>
										</li>
									</ol>
								</nav>

          <div class="cards">
          <div class="card">
              <img class="card-image" src={dogD} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    Diet Plans for Dogs
                  </h4>
                  
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\mddogdiet" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Details</button></a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={catD} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                Diet Plans for Cats
                  </h4>
                  
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\mdcatdiet" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Details</button></a>
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
