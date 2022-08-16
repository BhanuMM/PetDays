import React from 'react'
import '../styles/footerspecial.css';
import '../styles/sellerdashboard.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
function medications() {
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
              <label for="exampleInputEmail">Drug Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Drug Name"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Select Drug Type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Symptoms</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Symptoms"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Instructions to follow</label>
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

export default medications
