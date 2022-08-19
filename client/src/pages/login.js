import React from 'react'
import signin from '../images/login.png';
import Bgimage from '../images/bkimage.webp';

import '../styles/login.css';


function login() {
  return (
    <div className="Login login-bgimagesize" style={{ 
        backgroundImage:`url(${Bgimage})`  
      }}>
        <section className="vh-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 ">
                        <div className="card login-cardsize flex-center login-cardmargins" border-radius="2rem; ">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block ">
                                    <img src={signin}
                                    alt="login form" className="img-fluid mt-5 pt-5 login-imagesize" border-radius="1rem 0 0 1rem;" />
                                    <div className='mt-3' >
                                        <h5 className='text-center'>Welcome to </h5>
                                        <h2 className='text-center login.caption'>PET DAYS</h2>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                        

                                        <h3 className="fw-normal mb-3 pb-3 text-center text-bold login.caption" letter-spacing="1px;">LOGIN</h3>
                                        <p className="pb-lg-2" letter-spacing="#393f81;">Don't have an account? <a href="#!"
                                            color="#393f81;">SignUP</a></p>

                                        <div class="form-outline mb-4">
                                            <label className="form-label" for="">E-mail </label>
                                            <input type="email" id="form2Example17" className=" login-inputfieldwidth form-control form-control-lg" />
                                            
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example27">Password</label>
                                            <input type="password" id="form2Example27" class=" login-inputfieldwidth form-control form-control-lg" />
                                           
                                        </div>
{/* 
                                        <div class="pt-1 mb-4">
                                            <button className ="btn btn-success btn-lg btn-block text-center" type="button">Login</button>
                                        </div> */}
                                        <div className='row'>
                                            {/* <div className='col'>
                                            <input type="checkbox" id="topping" name="topping" value="" />Remembr Me
                                           
                                            </div> */}

                                            
                                            <div className='col'>
                                                <a className="small text-muted  ml-5" href="#!">Forgot password?</a>

                                            </div>
                                        </div>
                                        <div class="pt-1 mb-4 mt-3 login.buttonmargin text-center">
                                            <button className ="login.loginbuttonsize login.buttonmargin btn btn-success "  type="button">LOGIN   </button>
                                        </div>
                                        

                                       
                                        
                                        {/* <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a> */}
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

export default login