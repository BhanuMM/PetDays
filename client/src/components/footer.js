import React from 'react';
import cat from '../images/footer.png';

function footer() {
  return (
    <div className="main-footer">
     <div className="container-fluid">
        <div className="row mx-auto">
          <div className="col-md-6 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics text-center fs-6 paratitle">our services</h5>
          <ul className="list-unstyled text-center ">
              <li>
                <a href="registertype" className="text-black ">Register</a>
              </li>
              <li>
                <a href="forum" className="text-black">Pet Talk</a>
              </li>
              <li>
                <a href="petmart" className="text-black">Pet Mart</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics fs-6 text-left paratitle">About Us</h5>
          <ul className="list-unstyled text-left">
          <p className='para'>Pet Days is a web and mobile application that centralizes all the needs of a pet owner living in Sri Lanka. Pet Days provide the necessary health care details and help you keep track of all the
  medication, vaccines, and dietary needs of your pet.</p>
            </ul>
          </div>
        </div>
      </div>
      <div className='row-fluid'>
        <img src= {cat} className="mx-auto footer-image" alt="dog"/>
      </div>
      <div className="text-center p-3">
       <h1 className="footer-text"> © 2022 Copyright:</h1>
      </div>
    </div>
    
  );
}

export default footer
