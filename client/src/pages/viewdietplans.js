import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function viewdietplans() {
  return (
    <div class="container-fluid">
    <div className='row'>
     <Navbar />
    </div>
   <div className='row'>
     <div className="row flex-nowrap pt-5">
       <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
           <Sidebar />
       </div>
         <div className='col-10'>
             <div class="pt-4 search-bar">
                 <div class="topnav">
                         <h7 className='topic'> Manage Dietplans</h7>
                         <button type="button" class="btn btn-light btn-search">
                         <i class="fa fa-search" aria-hidden="true"></i>
                         </button>
                     <input type="text" placeholder="Search.."/>
                 </div>
             </div>
             <div className='container'>
                 <table class="table align-middle table-responsive">
                     <thead  class="header-color">
                         <tr>
                         <th scope="col">Category ID</th>
                         <th scope="col">Category Name</th>
                         <th scope="col"></th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                         <th scope="row">1</th>
                         <td>Dogs</td>
                         <td>
                         <a href="\viewbreeds" role="button" aria-pressed="true"> <button type="submit" class="btn-res-view">View</button></a>
                         </td>
                         </tr>
                         <tr>
                         <th scope="row">2</th>
                         <td>Cats</td>
                         <td>
                         <a href="\viewbreeds" role="button" aria-pressed="true"> <button type="submit" class="btn-res-view">View</button></a>
                         </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
       </div>
       </div>
     </div>
   </div>
  )
}

export default viewdietplans
