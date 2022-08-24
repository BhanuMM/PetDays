import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import '../styles/petcategories.css';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from '../components/navbarspecial';
import cat from '../images/cat-01.jpg';
import dog from '../images/dog-01.jpg';
function dietplans() {
  return (
    <div class="container-fluid">
       <div className='row'>
        <Navbar />
       </div>
      <div className='row'>
        <div className="row flex-nowrap pt-5">
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
              <Moderatorsidebar />
          </div>
          <div class="cards">
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    Diet Plan-1
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewdietplans" class="card-link">View diet plan</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cat} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                Diet Plan-2
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewdietplans" class="card-link">View diet plan</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default dietplans
