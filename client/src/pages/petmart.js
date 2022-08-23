import React from 'react'

import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/petmart.css';
import A1 from '../images/a1.jpg';
import A2 from '../images/a2.jpg';
import A3 from '../images/a3.jpg';
import A4 from '../images/a4.jpg';
import G3 from '../images/g3.jpg';
import G2 from '../images/g2.jpg';
import G1 from '../images/g1.jpg';
import G4 from '../images/g4.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function petmart() {
  return (
    <div className='Petmart'>
          <Navbar />

        {/* <header className="header"/>  */}
        <div class="container-fluid text-center  pemart-page">
            <div class="row mb-5 pb-5">
                <h1 className=''>GROOMING <hr/></h1>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize">
                        <img src={G1} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            
                            <h5 className="card-text petmart-cardtext pr-5">We Love Your pets</h5>
                            
                            <button href="" className="btn btn-warning">LKR 1000</button>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize">
                        <img src={G4} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext  pr-5">We Love Your pets</h5>
                            <button href="" className="btn btn-warning">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize" >
                        <img src={G2} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext ">Pet care</h5>
                            <button href="" className="btn btn-warning  ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize" >
                        <img src={G3} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
                            
                            <button href="" className="btn btn-warning  ">LKR 1000</button>

                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row pt-5">
                <h1>ACCESSORIES <hr/></h1>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize" >
                        <img src={A1} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize" >
                        <img src={A4} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize" >
                        <img src={A2} className="card-img-top petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mt-5">
                    <div class="card petmart-cardsize">
                        <img src={A3} className="card-img-top  petmart-image" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text petmart-cardtext">To All Dog Lovers Outthere</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>

                        </div>
                    </div>
                </div>
                
            </div>
                
                
        </div>
        
        <Footer />


      </div>  
        

    
  )
}

export default petmart