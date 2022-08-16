import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function petcategories() {
  return (
    <div class="container-fluid">
    <div className="row flex-nowrap">
       <div className='col-2 bg-dark col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
          <Sidebar />
       </div>
        <div className="col-10 py-3">
          <Navbar /><hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail">First Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Last Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Contact Number</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">NIC Number</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Upload your picture here</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
    </div>
</div>
  )
}

export default petcategories
