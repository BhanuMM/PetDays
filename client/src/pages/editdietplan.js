import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/editdietplan.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function editdietplan() {
  return (
    <div className='editdietplan'>
      <Navbar/>
       <div className='row mt-5 pt-5'>
        <div className='col-2'></div>
        <div className='col-8'>
            <div class='title'>
              <div class='content'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <h3 className='mb-5'> <i class='bx bxs-edit-alt' ></i> Edit Diet Plan<hr/></h3>
              </div>
              <div class='button'>
                <button type="submit" class=" pl-5 btn btn-danger">Remove</button>
              </div>
              
            </div>
            
            
            <form>
                <div class="mb-3">
                    <label for="fooditem" class="form-label">Food Items</label>
                    <input type="text" class="form-control" id="fooditem" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="processed" class="form-label">How to processed?</label>
                    <input type="text" class="form-control" id="processed" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="feed" class="form-label">How to feed?</label>
                    <input type="text" class="form-control" id="feed" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Alterations in quantity based on weight</label>
                    <input type="text" class="form-control" id="quantity" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="instructions" class="form-label">Instructions to follow</label>
                    <input type="text" class="form-control" id="instructions" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="notes" class="form-label">Special notes</label>
                    <input type="text" class="form-control" id="notes" aria-describedby="emailHelp"/>  
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

export default editdietplan
