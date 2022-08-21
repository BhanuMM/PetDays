import React from 'react';
import '../styles/viewusers.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import birds from '../images/user 1-01.jpg';
import cat from '../images/user 6-01.jpg';
import cattle from '../images/user 3-01.jpg';
import dog from '../images/user 4-01.jpg';
import monkey from '../images/user 5-01.jpg';
import man from '../images/user 2-01.jpg';
function viewusers() {
  return (
    <div class="container-fluid ">
       <div className='row'>
        <Navbar />
       </div>
      <div className='row'>
        <div className='row flex-nowrap pt-5'>
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
                <Sidebar />
          </div> 
          <div class="cards">
          <div className='col g-4'>
            <div className='text-right select-btn d-flex'>
              <button type="button" className="add"><a href="#" role="button" className = "btn-link" aria-disabled="true">ADD</a></button>
              <button type="button" className="edit"><a href="#" role="button" className = "btn-link" aria-disabled="true">EDIT</a></button>
            </div></div>
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View User</a>
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
                  <a href="./" class="card-link">View User</a>
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
                  <a href="./" class="card-link">View User</a>
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
                  <a href="./" class="card-link">View User</a>
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
                  <a href="./" class="card-link">View User</a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={man} alt=""/>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="./" class="card-link">View User</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default viewusers
