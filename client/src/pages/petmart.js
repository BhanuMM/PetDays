import React from 'react'

import '../styles/nav.css';
import '../styles/footer.css';
import Pg1 from '../images/pg1.jpg';
import '../styles/petmart.css';
import A1 from '../images/a1.jpg';
import A2 from '../images/a2.jpg';
import A3 from '../images/a3.jpg';
import G3 from '../images/g3.jpg';
import G2 from '../images/g2.jpg';
import G1 from '../images/g1.jpg';

function petmart() {
  return (
    <div className='Petmart'>

        <header className="header"/> 
        <div class="container-fluid text-center">
            <div class="row">
                <h1>GROOMING <hr/></h1>
                <div class="col-md-4">
                    <div class="card petmart-cardsize">
                        <img src={G1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card petmart-cardsize" >
                        <img src={G2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card petmart-cardsize" >
                        <img src={G3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            
                            <button href="" className="btn btn-warning ">LKR 1000</button>

                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row pt-5">
                <h1>ACCESSORIES <hr/></h1>
                <div class="col-md-4">
                    <div class="card petmart-cardsize" >
                        <img src={A1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card petmart-cardsize" >
                        <img src={A2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card petmart-cardsize">
                        <img src={A3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">To All Dog Lovers Outthere</h5>
                            <button href="" className="btn btn-warning ">LKR 1000</button>

                        </div>
                    </div>
                </div>
                
            </div>
                
                
        </div>


      </div>  
        

    
  )
}

export default petmart