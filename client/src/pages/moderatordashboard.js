import React from "react";
import "../styles/footerspecial.css";
import "../styles/moderatordashboard.css";
import Sidebar from "../components/sidebar";
import Moderatorsidebar from "../components/moderatorsidebar";
import Navbar from "../components/navbarspecial";

// import med from '../images/med.jpg';

import bone from "../images/bone1.png";

function moderatordashboard() {
  return (
    <div class="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <div className="row ">
        <div className="row flex-nowrap">
          <div className="col-2 col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-color">
            <Moderatorsidebar />
          </div>
          <div className="col-10 py-3">
            <div class="overview-boxes">
              <div class="col-sm-6 col-md-3 box1">
                <div class="right-side">
                  <div class="box-topic">Posts</div>
                  <div class="indicator"></div>
                </div>
                {/* <i class="fa fa-cart-plus one" aria-hidden="true"></i> */}
              </div>
              <div class="col-sm-6 col-md-3 box2">
                <div class="right-side">
                  <div class="box-topic">Advertisments</div>
                  <div class="indicator"></div>
                </div>
                <i class="fa fa-cart-plus two" aria-hidden="true"></i>
              </div>
              <div class=" col-sm-6 col-md-3 box3">
                <div class="right-side">
                  <div class="box-topic">Medications</div>
                  <div class="indicator"></div>
                </div>
                <i class="fa fa-cart-plus three" aria-hidden="true"></i>
              </div>
              <div class="col-sm-6 col-md-3 box4">
                <div class="right-side">
                  <div class="box-topic">Diet Plans</div>
                  <div class="indicator"></div>
                </div>
                <i class="fa fa-cart-plus four" aria-hidden="true"></i>
              </div>
            </div>
            <div class="row">
              <div class="overview-boxes">
                <div className="col-sm-6 col-md-3 box1">
                  <div class="right-side">
                    <div class="box-topic">Posts</div>
                    <div class="indicator"></div>
                  </div>
                  {/* <i class="fa fa-cart-plus one" aria-hidden="true"></i> */}
                </div>
                <div className="col-sm-6 col-md-3 box2">
                  <div class="right-side">
                    <div class="box-topic">Advertisments</div>
                    <div class="indicator"></div>
                  </div>
                  {/* <i class="fa fa-cart-plus two" aria-hidden="true"></i> */}
                </div>
                <div className=" col-sm-6 col-md-3 box3">
                  <div class="right-side">
                    <div class="box-topic">Medications</div>
                    <div class="indicator"></div>
                  </div>
                  {/* <i class="fa fa-cart-plus three" aria-hidden="true"></i> */}
                </div>
                <div className="col-sm-6 col-md-3 box4">
                  <div class="right-side">
                    <div class="box-topic">Diet Plans</div>
                    <div class="indicator"></div>
                  </div>
                  {/* <i class="fa fa-cart-plus four" aria-hidden="true"></i> */}
                </div>
              </div>

              {/* <div class="col-sm-6"> */}
              {/* <div class="card card-tile">
              <div class="card-body crd-rep">
                <h3 class="card-title"><span class="badge badge-light">Pending Forum Posts</span></h3>
                <p className="lead">
                  <a href="#" className=""><img src= {bone} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div> */}
              {/* </div> */}
              {/* <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Pending Advertisments</span></h3>
                <p className="lead">
                  <a href="#" className=""><img src= {bone} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div> */}
              {/* </div><hr/> */}
              {/* <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Published Forum posts</span></h3>
                <p className="lead">
                  <a href="#" className=""><img src= {bone} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body crd-rep">
              <h3 class="card-title"><span class="badge badge-light">Published Advertisments</span></h3>
                <p className="lead">
                  <a href="#" className=""><img src= {bone} className="rounded float-start img-fluid click" alt="dog"/></a>        
                </p>
              </div>
            </div>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default moderatordashboard;
