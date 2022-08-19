import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function medications() {
  return (
    <div class="container-fluid">
    <div className="row flex-nowrap">
       <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0'>
          <Sidebar />
       </div>
        <div className="col-10 py-3">
          <Navbar /><hr />
          <div className='col-8 form-class'>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail">Drug Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Drug Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlSelect1">Select Drug Type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword">Symptoms</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Symptoms"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1">Instructions to follow</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlFile1">Upload picture here</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
            <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Submit</button></div>
            </div>
          </form>
          </div>
          
      </div>
    </div>
</div>
  )
}

export default medications
