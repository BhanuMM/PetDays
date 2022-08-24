import React from 'react'
import '../styles/verifyemail.css';
import Bgimage from '../images/bkimage.jpg';

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
                               
                                <div className="col-md-6 col-lg-12 d-flex align-items-center p-5  ">
                                    <div className="card-body text-black text-center ml-2 pb-3 mb-3 ">

                                        <form>

                                        
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">Thank you for signing in</p>
                                        <h3 className="fw-normal mb-3 pb-3 text-center text-bold login.caption" letter-spacing="1px;">VERIFY YOUR EMAIL ADDRESS</h3>
                                        
                                        <p className="pb-lg-2 text-center" letter-spacing="#393f81;">Please confirm that you want to use this as your email adress</p>

                                        <div className="pt-1 mb-5 mt-3 text-center">
                                        <a  href="signin"><button className ="verify.loginbuttonsize btn btn-success mb-5 "  type="button">Login</button></a>
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
