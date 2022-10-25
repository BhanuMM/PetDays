import React from 'react'
import Forgot from '../images/forgot.png';
import '../styles/forgorpasssword.css';
import '../styles/usertype.css';
import Bgimage from "../images/bkimage.jpg";
import Service from '../images/user 4-01.jpg';
import User from '../images/user 6-01.jpg';

function usertype() {
  return (
    <div className='Forgotpassword' style={{ 
        backgroundImage:`url(${Bgimage})`  
      }}>
        <section className="vh-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100"  style={{ padding: 80 }}>
                    <div className="col col-xl-10 ">
                        <div className="card usertype-largecardsize flex-center forgot-cardmargins" border-radius="2rem; ">
                            <div className="row g-0 text-center">
                                <h1 className='pt-4 ml-5 pl-5'>  Are you a?</h1>
                                <div className="col-md-6 col-lg-6 d-none d-md-block ">
                                    <a href='/register'>
                                        <div className="card usertype-cardsize mt-3  ml-5 pl-5" >
                                            <img src={User} className="card-img-top usertype-imagesize mt-3 " alt="..."/>
                                            <div className="card-body">
                                                <h5 className=" usertype-hedder ">Pet Owner</h5>
                                                
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 col-lg-6 d-none d-md-block ">
                                    <a href='/sellersignup'>
                                        <div className="card usertype-cardsize mt-2  ml-5 pl-5" >
                                            <img src={Service} className="card-img-top usertype-imagesize mt-3  " alt="..."/>
                                            <div className="card-body">
                                                <h5 className=" usertype-hedder ">Service Provider</h5>
                                                
                                            </div>
                                        </div>
                                    </a>
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