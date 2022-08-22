import React from 'react';
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import man from '../images/man-01.png';
import cat from '../images/cat-01.png';
import food from '../images/food-01.png';
import graph from '../images/graph-01.png';
import medical from '../images/medical-01.png';
import women from '../images/woman-01.png';

function sellersdashboard() {
  return (
<div class="container-fluid">
  <div className='row'>
    <Navbar />
  </div>
  <div className='row '>
    <div className="row flex-nowrap pt-5">
        <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
            <Sidebar />
        </div>
          <div className="col-10 py-3">
            <div class="overview-boxes">
              <div class="col-sm-6 col-md-3 box1">
                <div class="right-side">
                  <div class="box-topic">Total Order</div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 box2">
                <div class="right-side">
                  <div class="box-topic">Total Cancel</div>
                </div>
              </div>
              <div class=" col-sm-6 col-md-3 box3">
                <div class="right-side">
                  <div class="box-topic">Total Profit</div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 box4">
                <div class="right-side">
                  <div class="box-topic">Total Return</div>
                </div>
              </div> 
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card card-tile">
              <div class="card-body crd-rep">
                <h3 class="card-title"><span class="badge badge-light">Pet Categories</span></h3>
                <p className="lead">
                  <a href="\petcategories" className=""><img src= {cat} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Medications</span></h3>
                <p className="lead">
                  <a href="\medications" className=""><img src= {medical} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
        </div><hr/>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Diet Plans</span></h3>
                <p className="lead">
                  <a href="\dietplans" className=""><img src= {food} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Moderators</span></h3>
                <p className="lead">
                  <a href="\moderators" className=""><img src= {women} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
        </div><hr/>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Generate Reports</span></h3>
                <p className="lead">
                  <a href="\reportgeneration" className=""><img src= {graph} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">View Users</span></h3>
                <p className="lead">
                  <a href="\viewusers" className=""><img src= {man} className="rounded float-start img-fluid click" alt="dog"/></a>        
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

export default sellersdashboard
