import React from 'react'
import signin from '../images/petlv.png';
import '../styles/forgorpasssword.css';
import Bgimage from '../images/bkimage.webp';

function forgotpasword() {
  return (
    <div className='Forgotpassword' style={{ 
        backgroundImage:`url(${Bgimage})`  
      }}>
        <section className="vh-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 ">
                        <div className="card forgot-cardsize flex-center forgot-cardmargins" border-radius="2rem; ">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block ">
                                    <img src={signin}
                                    alt="login form" className="img-fluid mt-5 pt-5" border-radius="1rem 0 0 1rem;" />
                                    <div >
                                        <h5 className='text-center'>Welcome to </h5>
                                        <h2 className='text-center forgot.caption'>PET DAYS</h2>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center mt-5">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>

                                        

                                        <h3 className="fw-normal mb-3 pb-3 text-center text-bold login.caption" letter-spacing="1px;">FORGOT PASSWORD</h3>
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">Don't worry</p>
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">We will send you an email with a reset link</p>

                                        <div class="form-outline mb-4 text-center">
                                            <label className="form-label text-center " for="">E-mail </label>
                                            <input type="email" id="form2Example17" className=" forgot-inputfieldwidth form-control form-control-lg" />
                                            
                                        </div>


                                       
                                        <div className="pt-1 mb-4 mt-5 text-center">
                                            <button className ="forgot.loginbuttonsize btn btn-success "  type="button">RESET PASSWORD</button>
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

export default forgotpasword