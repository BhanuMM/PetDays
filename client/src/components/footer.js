import React from 'react';
import cat from '../images/footer.png';

function footer() {
  return (
    <div className="main-footer">
     <div className="container-fluid">
        <div className="row mx-auto">
          <div className="col-md-6 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics text-left fs-6">our services</h5>
          <ul className="list-unstyled text-left">
              <li>
                <a href="#!" className="text-white">Pet days</a>
              </li>
              <li>
                <a href="#!" className="text-white">Pet talk</a>
              </li>
              <li>
                <a href="#!" className="text-white">Pet care</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-5 pl-5">
          <h5 className="text-uppercase footer-topics fs-6 text-left">About Us</h5>
          <ul className="list-unstyled text-left">
          <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
