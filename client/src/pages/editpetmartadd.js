import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/editdietplan.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function editpetmart() {
  return (
    <div className='Editpetmart'>
      <Navbar/>
       <div className='row mt-5 pt-5'>
        <div className='col-2'></div>
        <div className='col-8'>
        <div class='title'>
              <div class='content'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <h3 className='mb-5'> <i class='bx bxs-edit-alt' ></i> Edit Advertiesment<hr/></h3>
              </div>
              <div class='button'>
                <button type="submit" class=" pl-5 btn btn-danger">Remove</button>
              </div>
              
            </div>
            
            
            <form>
                <div class="mb-3">
                    
                  <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">Select Category</label>
                    <select className="form-select" aria-label="Disabled select example">
                        <option selected>Select From Here</option>
                        <option value="1">Grroming</option>
                        
                    </select>
                  </div>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Number Of Words</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Message</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Add Keywords</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
               
                <div class="mb-3">
                    {/* <label for="exampleInputPassword1" class="form-label">Add Image</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/> */}
                    <label className="form-label" for="customFile">Add Image</label>
                    <input type="file" className="form-control" id="customFile" />
                </div>
                <div class="mb-3">
                    <p>Display Time Duration</p>
                    <label for="exampleInputPassword1" class="form-label">Add Image</label>
                    <input type="date" class="form-control" id="exampleInputPassword1"/>
                    <label for="exampleInputPassword1" class="form-label">Add Image</label>
                    <input type="date" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Save Changes</button></div>
                    {/* <div className='col-3'></div> */}
                </div>
               
            </form>

        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default editpetmart
