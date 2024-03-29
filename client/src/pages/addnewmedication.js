import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import Navbar from '../components/navbarspecial';
import Sidebar from '../components/moderatorsidebar';
function addnewmedication() {
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
            <h3 className='mb-5'> + Add New Medication <hr/></h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Drug Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Drug Type</label>
                    <select className="form-select" aria-label="Disabled select example">
                        <option selected>Select From Here</option>
                        <option value="1">A</option>
                        <option value="2">B</option>      
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Symptoms</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Insstructions To Following (Change of dosage)</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Add Image (optional)</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                

                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5'> <button type="submit" class=" pl-5 btn btn-success">Add Medication</button></div>
                    {/* <div className='col-3'></div> */}
                </div>
               
            </form>

    </div>
      </div></div></div>
  )
}

export default addnewmedication