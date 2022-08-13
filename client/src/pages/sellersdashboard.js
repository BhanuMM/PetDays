import React from 'react';
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function sellersdashboard() {
  return (
<div class="container-fluid">
    <div class="row flex-nowrap">
       <div className='col-2 bg-dark col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
          <Sidebar />
       </div>
        <div className="col-10 py-3">
          <Navbar /><hr />
        <div class="container overflow-hidden">
          <div class="container-lg">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
                <div class="col-xl-6 col-md-6 col-xxl-3"><p><a href="#" class="btn btn-primary active btn-tile " role="button" aria-pressed="true">Primary link</a></p></div>
            </div>
          </div>
       </div>
      </div>
    </div>
</div>
  )
}

export default sellersdashboard
