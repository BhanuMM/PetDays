import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import birds from '../images/medicine 1-01.jpg';
import cat from '../images/medicine 2-01.jpg';
import cattle from '../images/medicine 3-01.jpg';
import dog from '../images/medicine 4-01.jpg';
import monkey from '../images/medicine 5-01.jpg';
import med from '../images/medicine 6-01.jpg';
function medications() {
  return (
    <div class="container-fluid pt-5">
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
                  <a href="./" class="card-link">View Details</a>
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
                  <a href="./" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={birds} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cattle} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={monkey} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Details</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={med} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View Details</a>
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
