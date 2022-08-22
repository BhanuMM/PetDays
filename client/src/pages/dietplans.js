import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
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
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
              <Sidebar />
          </div>
          <div class="cards">
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Diet Plans</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cat} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Diet Plans</a>
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
