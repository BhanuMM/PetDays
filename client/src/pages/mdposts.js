import React from 'react';
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Moderatorsidebar from "../components/moderatorsidebar";
import Navbar from '../components/navbarspecial';
import man from '../images/man-01.png';
import cat from '../images/cat-01.png';
import food from '../images/food-01.png';
import graph from '../images/graph-01.png';
import medical from '../images/medical-01.png';
import women from '../images/woman-01.png';

function mdposts() {
  return (
<div class="container-fluid mdposts">
  <div className='row'>
    <Navbar />
  </div>
  <div className='row '>
    <div className="row flex-nowrap pt-5">
        <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
            <Moderatorsidebar />
        </div>
          <div className="col-10 py-3">
        <div class="row">
          <div class="col-sm-6">
            <div class="card card-tile">
              <div class="card-body crd-rep">
                <h3 class="card-title"><span class="badge badge-light">Pending Posts</span></h3>
                <p className="lead">
                  <a href="\petcategories" className=""><img src= {cat} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Verified Posts</span></h3>
                <p className="lead">
                  <a href="\medications" className=""><img src= {medical} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
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

export default mdposts
