import React from 'react'

import signin from '../images/login.png';
import Bgimage from '../images/bkimage.webp';
import '../styles/register.css';


function register() {
  return (
    <div className='Register' style={{ 
        backgroundImage:`url(${Bgimage})`  
      }}>
         <section className="vh-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 ">
                        <div className="card register-cardsize flex-center register-cardmargins" border-radius="2rem; ">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                                    <img src={signin}
                                    alt="login form" className="img-fluid mt-5 pt-5 imagesize" border-radius="1rem 0 0 1rem;" />
                                    <div >
                                        <h5 className='text-center'>Welcome to </h5>
                                        <h2 className='text-center register.caption'>PET DAYS</h2>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                        

                                        <h3 className="fw-normal mb-3 pb-3 text-center text-bold register.caption" letter-spacing="1px;">CREATE YOUR ACCOUNT</h3>
                                        <p className="pb-lg-2" letter-spacing="#393f81;">Alredy have an account? <a href="#!"
                                            color="#393f81;">Signin</a></p>

                                        <div class="form-outline mb-4">
                                            <label className="form-label" for="">User Name </label>
                                            <input type="text" id="form2Example17" className=" register-inputfieldwidth form-control form-control-lg" />
                                            
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example27">E-mail</label>
                                            <input type="email" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" />
                                           
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example27">Password</label>
                                            <input type="password" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" />
                                           
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example27">Confirm Password</label>
                                            <input type="password" id="form2Example27" class=" register-inputfieldwidth form-control form-control-lg" />
                                           
                                        </div>

                                        <div class="pt-1 mb-4 mt-5 text-center">
                                            <button className ="register.loginbuttonsize btn btn-success "  type="button">REGISTER</button>
                                        </div>
                                        

                                       
                                        
                                      
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default register