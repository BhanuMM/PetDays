import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import Navbar from '../components/navbarspecial';
import Sidebar from '../components/moderatorsidebar';

function addpetcategories() {
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
                <div className='col-10 g-5'>
            <h3 className='mb-5'> +Add New Pet Category <hr/></h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pet category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Add</button></div>
                    {/* <div className='col-3'></div> */}
                </div>
              
            </form>

        </div>
    </div>
      </div></div>
  )
}

export default addpetcategories