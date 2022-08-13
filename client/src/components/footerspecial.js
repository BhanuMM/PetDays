import React from 'react';
import cat from '../images/footer.png';

function footer() {
  return (
    <div className="main-footer">
     <div className="container-fluid">
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
