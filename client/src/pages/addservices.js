import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Serviceprovidersidebar from "../components/serviceprovidersidebar";
function addservices() {
  return (
    <div class="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      
      <div className='row mt-4'>
        
        

          <div className="row flex-nowrap pt-5 pl-5 ml-5">
            <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
                <Serviceprovidersidebar />
            </div>
            <div className='col-9 g-5'>
            <h3 className='mb-5'> + Create New Advertiesment <hr/></h3>


                <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Advertiesment Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Service Type</label>
                            <select className="form-select" aria-label="Disabled select example">
                                <option selected>Select From Here</option>
                                <option value="1">Dog Walking</option>
                                <option value="2">Dog Excercising</option> 
                                <option value="3">Dog Training</option>
                                <option value="3">Pet Grooming</option> 
                                <option value="3">Pet Daycare</option>     
                            </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Location</label>
                    <select className="form-select" aria-label="Disabled select example">
                                <option selected>Select From Here</option>
                                <option value="1">Colomo</option>
                                <option value="2">Galle</option> 
                                <option value="3">Hambantota</option>
                                <option value="3">Matara</option> 
                                <option value="3">Gampaha</option>
                                <option value="3">Jffna</option>
                                <option value="3">Kaluthara</option>
                                <option value="3">Kurunagala</option>
                                <option value="3">Matale</option>     
                            </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputPassword1" class="form-label">Add Image</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/> */}
                    <label className="form-label" for="customFile">Add Image</label>
                    <input type="file" className="form-control" id="customFile" />
                </div>
                <p>Contact Details<hr/></p>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contact number</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Facebook Link</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
              

                <div className='row'>
                    <div className='col-10'></div>
                    <div className='col-1 mb-5 mt-5 text-center'>
                       <button type="submit" class="btn btn-success ">Submit</button>
                       
                    </div>
                    <div className='col-1 mb-5 mt-5 text-center'>
                      
                       <button type="submit" class="  btn btn-danger  ">Delete</button>
                    </div>
                    {/* <div className='col-3'></div> */}
                </div>
            
            </form>

      </div>
      <div className="col-1"></div>
      </div>
    
      
      </div>
      
    </div>
  );
}

export default addservices;
