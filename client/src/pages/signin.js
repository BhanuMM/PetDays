import React from 'react'
import '../styles/nav.css';
import '../styles/footer.css';
import Signinimage from '../images/signin.png';


function signin() {
  return (
    <div className='Signin'>
      <header className="header"/> 
      <div className="Signinform">
         <div class="container mt-5">
            <div class="row ">
              
              <div class="col-6 ">
              <img src={Signinimage} className="rounded float-start img-fluid" alt="signin"/>
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