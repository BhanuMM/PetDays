import React from 'react'
import '../styles/verifyemail.css';
import Bgimage from '../images/bkimage.jpg';

function usertype() {
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
                                    <div className="card-body text-center ">

                                    <div className="row text-center ">

                                        
                                        {/* <p className="pb-lg-2 text-center" letter-spacing="#393f81;">P</p> */}
                                        <h3 className=" login.caption" >Are you a</h3>
                                        

                                         <div className="pt-1 mb-4 mt-3 text-center">
                                        <a href="signup" color="#393f81;"> <button className ="verify.loginbuttonsize btn btn-success "  type="button">USER</button></a>
                                        </div>
                                        <div className="pt-1 mb-4 mt-3 text-center">
                                        <a href="sellersignup" color="#393f81;"> <button className ="verify.loginbuttonsize btn btn-success "  type="button">Service</button></a>
                                        </div>
</div>
                                       
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

export default usertype
