import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import '../styles/petcategories.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import cat from '../images/cat-01.jpg';
import dog from '../images/dog-01.jpg';
function petcategories() {
  return (
    <div class="container-fluid">
       <div className='row'>
        <Navbar />
       </div>
      <div className='row'>
        <div className="row flex-nowrap pt-5">
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
              <Sidebar />
          </div>
          <div class="cards">
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    DOGS
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewpets" class="card-link">View Pet Category</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cat} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                    CATS
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewpets" class="card-link">View Category</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default petcategories
