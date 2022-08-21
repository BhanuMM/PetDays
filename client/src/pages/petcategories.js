import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import '../styles/petcategories.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import birds from '../images/birds.jpg';
import cat from '../images/cat-02.jpg';
import cattle from '../images/cattle.jpg';
import dog from '../images/dog-01.jpg';
import monkey from '../images/monkey.jpg';
function petcategories() {
  return (
    <div class="container-fluid">
       <div className='row'>
        <Navbar />
       </div>
      <div className='row'>
        <div className="row flex-nowrap">
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
              <Sidebar />
          </div>
          <div className='col-10 g-4'>
            <div className='col-md-12 text-right select-btn d-flex'>
              <button type="button" className="add"><a href="#" role="button" className = "btn-link" aria-disabled="true">ADD</a></button>
              <button type="button" className="edit"><a href="#" role="button" className = "btn-link" aria-disabled="true">EDIT</a></button>
            </div>
          <div class="row row-cols-1 row-cols-md-2 g-4 ">
              <div class="col-sm-1 card-wrp">
                <div class="card crd-tiles">
                <img src= {dog} className="rounded float-start img-fluid" alt="dog"/>
                  <div class="card-body">
                    <h5 class="card-title">Dogs</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-1 card-wrp">
                <div class="card crd-tiles">
                <img src= {cat} className="rounded float-start img-fluid" alt="dog"/>
                  <div class="card-body">
                    <h5 class="card-title">Cats</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-1 card-wrp">
                <div class="card crd-tiles">
                <img src= {birds} className="rounded float-start img-fluid" alt="dog"/>
                  <div class="card-body">
                    <h5 class="card-title">Birds</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-1 card-wrp">
                <div class="card crd-tiles">
                <img src= {cattle} className="rounded float-start img-fluid" alt="dog"/>
                  <div class="card-body">
                    <h5 class="card-title">Cattles</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-1 card-wrp">
                <div class="card crd-tiles">
                <img src= {monkey} className="rounded float-start img-fluid" alt="dog"/>
                  <div class="card-body">
                    <h5 class="card-title">Monkeys</h5>
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

export default petcategories
