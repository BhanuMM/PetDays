import React from 'react'
import signin from '../images/petlv.png';
import '../styles/register.css';

function register() {
  return (
    <div className='Register'>
         <section className="vh-100 color">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" border-radius="2rem; ">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={signin}
                                    alt="login form" className="img-fluid mt-5 pt-5" border-radius="1rem 0 0 1rem;" />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                        <img src= "../images/PetDays.png" className="logo" alt="dog"/>
                                           
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3" letter-spacing="1px;">Sign into your account</h5>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                            <label className="form-label" for="">User Name</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                            <label className="form-label" for="">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example27" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example27">Password</label>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example27" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example27">Confirm Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button className ="btn btn-success btn-lg btn-block" type="button">Register</button>
                                        </div>

                                        {/* <a className="small text-muted" href="#!">Forgot password?</a>
                                        <p className="mb-5 pb-lg-2" letter-spacing="#393f81;">Don't have an account? <a href="#!"
                                            color="#393f81;">Register here</a></p>
                                        <a href="#!" className="small text-muted">Terms of use.</a>
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

export default register