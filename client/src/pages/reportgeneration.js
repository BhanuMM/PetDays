import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function reportgeneration() {
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
          <div className='col-10'>
          </div>
          </div>
        </div>
      </div>
  )
}

export default reportgeneration
