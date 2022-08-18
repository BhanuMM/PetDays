import React from 'react'

import '../styles/nav.css';
import '../styles/footer.css';
import Pg1 from '../images/pg1.jpg';
// import Pg2 from '../images/pg2.jpg';
// import Pg3 from '../images/pg3.webp';
// import Pa1 from '../images/pa1.webp';
// import Pa2 from '../images/pa2.png';
// import Pa3 from '../images/pa3.jpg';

function petmart() {
  return (
    <div className='Petmart'>

        
            <div class="container-fluid text-center">

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="card" width="18rem">
                            <img src={Pg1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-text">We Love Your pets</h5>
                                <a href="" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" width="18rem">
                            <img src={Pg1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-text">We Love Your pets</h5>
                                <a href="" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" width="18rem">
                            <img src={Pg1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-text">We Love Your pets</h5>
                                <a href="" className="btn btn-warning start-50 end-50">Service @ just LKR 1000</a>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                
                </div>
                
        </div>
        
        

    
  )
}

export default petmart