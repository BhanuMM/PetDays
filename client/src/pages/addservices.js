import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
function addservices() {
  return (
    <div class="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className='row mt-5 pt-5 viewadd-hedder '>
      <div className='col-2'></div>
      <div className='col-8'>
      <div className="row container">
        <div className="row flex-nowrap pt-5">
          <div className="col-10 g-5">
            <h3 className="mb-5">
              {" "}
              +Add New Service <hr />
            </h3>
            <form>
              <div class="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Select add category
                </label>
                <select
                  className="form-select"
                  aria-label="Disabled select example"
                >
                  <option selected>Select From Here</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Number of words
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Drug Type
                </label>
                <select
                  className="form-select"
                  aria-label="Disabled select example"
                >
                  <option selected>Select From Here</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Add key words
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Add Image (optional)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="row">
                <div className="col-9"></div>
                <div className="col-3 mb-5 mt-5">
                  {" "}
                  <button type="submit" class=" pl-5 btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


      </div>
      <div className='col-2'></div>
      </div>
      
    </div>
  );
}

export default addservices;
