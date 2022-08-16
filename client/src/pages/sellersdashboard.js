import React from 'react';
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function sellersdashboard() {
  return (
<div class="container-fluid">
    <div className="row flex-nowrap">
       <div className='col-2 bg-dark col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
          <Sidebar />
       </div>
        <div className="col-10 py-3">
          <Navbar /><hr />
        <div className="container overflow-hidden">
          <div className="container-lg">
            <div className="row">
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="petcategories" className="btn active btn-tile bg-light" role="button" aria-pressed="true"><span></span><h>Manage Pet Categories</h></a></div>
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="medications" className="btn active btn-tile bg-light " role="button" aria-pressed="true"><h>Moderators</h></a></div>
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="dietplans" className="btn active btn-tile bg-light" role="button" aria-pressed="true"><h>Manage Medication Details</h></a></div>
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="moderators" className="btn active btn-tile bg-light" role="button" aria-pressed="true"><h>Diet Plans</h></a></div>
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="#" className="btn active btn-tile bg-light" role="button" aria-pressed="true"><h>Generate Reports</h></a></div>
                <div className="col-xl-6 col-md-6 col-xxl-3 tile"><a href="#" className="btn active btn-tile bg-light" role="button" aria-pressed="true"><h>View Users</h></a></div>
            </div>
          </div>
       </div>
      </div>
    </div>
</div>
  )
}

export default sellersdashboard
