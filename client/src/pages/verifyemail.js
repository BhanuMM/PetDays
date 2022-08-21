import React from 'react'
import '../styles/verifyemail.css';
import Bgimage from '../images/bkimage.webp';

function verifyemail() {
  return (
    <div className='Verifyemail' style={{ 
        backgroundImage:`url(${Bgimage})`  
      }}>
       <section className="vh-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 ">
                        <div className="card verify-cardsize flex-center verify-cardmargins" border-radius="2rem; ">
                            <div className="row g-0">
                               
                                <div className="col-md-6 col-lg-12 d-flex align-items-center ">
                                    <div className="card-body p-4 p-lg-5 text-black text-center mt-3 ml-5 mr-3">

                                        <form>

                                        
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">Thank you for signing in</p>
                                        <h3 className="fw-normal mb-3 pb-3 text-center text-bold login.caption" letter-spacing="1px;">VERIFY YOUR EMAIL ARDDRESS</h3>
                                        
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">Please confirm that you want to use this as your email adress</p>

                                        <div className="pt-1 mb-4 mt-3 text-center">
                                            <button className ="verify.loginbuttonsize btn btn-success "  type="button">RESET PASSWORD</button>
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

export default verifyemail
