import React from 'react';
import cat from '../images/footer.png';

function footer() {
  return (
    <div className="main-footer">
     <div className="container-fluid" style={{ paddingLeft: 200 }}><br/>
        <div className="row mx-auto">
          <div className="col-md-5 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics text-center fs-6 paratitle pb-3">our services</h5>
          <ul className="list-unstyled text-center ">
              <li>
                <a href="home" className="text-black ">Home</a>
              </li>
              <li>
                <a href="forum" className="text-black">Pet Talk</a>
              </li>
              <li>
                <a href="petmart" className="text-black">Pet Mart</a>
              </li>
              
            </ul>
          </div>
          <div className="col-md-7 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics fs-6 text-left paratitle pb-3">About Us</h5>
          <ul className="list-unstyled text-left">
          <p className='para'>Pet Days is a web and mobile application that centralizes all the needs of a pet owner <br/> living in Sri Lanka.Pet Days provide the necessary health care details and help <br/> you keep track of all the
  medication, vaccines, and dietary needs of your pet. <br/> <b>Simply ALL IN ONE !</b></p>
            </ul>
          </div>
        </div>
      </div><br/>
      <div className='row-fluid'>
        <img src= {cat} className="mx-auto footer-image" alt="dog"/>
      </div>
      <div className="text-center p-3">
       <h1 className="footer-text"> © 2022 Copyright: Petdays</h1>
      </div>
    </div>
    
  );
}

export default footer
