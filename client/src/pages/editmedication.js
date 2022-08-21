import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/editmedication.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function editmedication() {
  return (
    <div className='editmedication'>
      <Navbar/>
       <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
            <div class='title'>
              <div class='content'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <h3 className='mb-5'> <i class='bx bxs-edit-alt' ></i> Edit Medication Details<hr/></h3>
              </div>
              <div class='button'>
                <button type="submit" class=" pl-5 btn btn-danger">Remove</button>
              </div>
              
            </div>
            
            
            <form>
                <div class="mb-3">
                    <label for="drugname" class="form-label">Drug Name</label>
                    <input type="text" class="form-control" id="drugname" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="type" class="form-label">Type of Drug</label>
                    <select className="form-select" aria-label="Disabled select example">
                        <option selected>Select Type From Here</option>
                        <option value="1">Tablets</option>
                        <option value="2">Syrup</option>      
                    </select>  
                </div>
                <div class="mb-3">
                    <label for="symptoms" class="form-label">Symptoms</label>
                    <input type="text" class="form-control" id="symptoms" aria-describedby="emailHelp"/>  
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity of Dosage</label>
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
                    <div className='col-3 mb-5 mt-5'> <button type="submit" style={{width:"6cm"}} class=" pl-5 btn btn-success">Save Changes</button></div>
                </div>
            </form>

        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default editmedication
