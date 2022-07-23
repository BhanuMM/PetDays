import React from 'react'
// import Signinform from '../components/signinform';


function signin() {
  return (
    <div className='Signin'>
      <div className="Signinform">
         <div class="container mt-5">
            <div class="row ">
              
              <div class="col-6 ">
                <img src="https://img.freepik.com/free-vector/cute-cat-dog-cartoon_138676-3018.jpg?t=st=1658050339~exp=1658050939~hmac=a9a863f9e060b519e5d41888e63db171a90c569e04ed3de7b5c807e00e006c2b&w=740" class="rounded float-start img-fluid " alt="..."/>
              </div>
              <div class="col-6  mt-5 ">
                
                <div class="mb-3">
                  
                    <h1 class=" mt-5">Wellcome To PetDays</h1>
                    <div class="mt-5">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exmailaddress" placeholder="name@example.com"/>
                    </div>
                </div>
                  <div class="mb-3">
                    <label for="inputPassword5" class="form-label">Password</label>
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                    <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    
                  </div>
                  <div class="col pl-3 pt-5">
                    <button type="submit" class="btn btn-warning start-50 end-50" >Sign in</button>
                  </div>
                  
            
              </div>
              
              
            </div>
          </div>
      </div>

    </div>
  )
}

export default signin