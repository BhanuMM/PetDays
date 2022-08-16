import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/editpetcategory.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function editpetcategory() {
  return (
    <div className='editpetcategory'>
      <Navbar/>
       <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
            <div class='title'>
              <div class='content'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <h3 className='mb-5'> <i class='bx bxs-edit-alt' ></i> Edit Pet Category<hr/></h3>
              </div>
              <div class='button'>
                <button type="submit" class=" pl-5 btn btn-danger">Remove</button>
              </div>
              
            </div>
            
            
            <form>
                <div class="mb-3">
                    <label for="petcategory" class="form-label">Pet category</label>
                    <input type="text" class="form-control" id="petcategory" aria-describedby="petcategory"/>  
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Save Changes</button></div>
                </div>
            </form>

        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default editpetcategory