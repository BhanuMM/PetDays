import React from 'react'

import '../styles/nav.css';
import '../styles/footer.css';
import Pg1 from '../images/pg1.jpg';
import Pg2 from '../images/pg2.jpg';
import Pg3 from '../images/pg3.webp';
import Pa1 from '../images/pa1.webp';
import Pa2 from '../images/pa2.png';
import Pa3 from '../images/pa3.jpg';

function petmart() {
  return (
    <div className='Petmart'>
        <header className="header"/> 
        <div class="container text-center">
            <div class="row">
                <h3>GROOMING</h3>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pg1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pg2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pg3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h3>ACCESSORIES</h3>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pa1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pa2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" width="18rem">
                        <img src={Pa3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">We Love Your pets</h5>
                            <a href="#" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
  )
}

export default petmart