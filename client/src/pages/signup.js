import React from 'react'

function signup() {
  return (
    <div className='Signup'>
         <div className="container mt-5 ">
            <div className="col-6 align-self-center">
                <h1>Okay,Lets Register</h1>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Full Name</label>
                    <div class="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                    </div>
                </div>
                 

                  <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Password</label>
                    <div class="row">
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Password" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Last name"/>
                        </div>
                    </div>
                  </div>
                 
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                  </div>
                  <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">Province</label>
                    <select className="form-select" aria-label="Disabled select example">
                        <option selected>Select From Here</option>
                        <option value="1">North</option>
                        <option value="2">Southern</option>
                        <option value="3">Western</option>
                        <option value="4">Eastern</option>
                        <option value="5">North Western</option>
                        <option value="6">Central</option>
                        <option value="7">Uwa</option>
                        <option value="8">Sabaragamuwa</option>
                        <option value="9">North Western</option>
                    </select>
                  </div>
                  <div classNam="col pl-3 pt-5">
                    <button type="submit" className="btn btn-warning start-50 end-50" >Register</button>
                  </div>
            </div>
              <div className="col-6">
                 <img className="image-petrounded float-start img-fluid"  src="https://img.freepik.com/free-vector/cute-cat-playing-hand-phone-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4231.jpg?t=st=1658073104~exp=1658073704~hmac=806ac1bf6b177f402049c9d368ef654bedfa7ccbbb6e3843cc0bf51a6bdd851a&w=740"  alt="..."/>

                {/* <!-- <img class="rounded float-start img-fluid" src="https://img.freepik.com/free-vector/cute-cat-playing-hand-phone-cartoon-vector-icon-illustration-animal-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4231.jpg?t=st=1658073104~exp=1658073704~hmac=806ac1bf6b177f402049c9d368ef654bedfa7ccbbb6e3843cc0bf51a6bdd851a&w=740"  alt="..."> --> */}
              </div>
            </div>
          </div>
    </div>
  )
}

export default signup