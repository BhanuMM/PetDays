import React from 'react';
// import "./styles/landing.css";
// import Footer from './footer';
// import Navbar from './navbar';


function landing() {
  return (
    <div className='landing'>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      
      {/* <Navbar/> */}

      <header class="header"/>
     
      <div class="container" id="para">
            <div class="row">
                <div class="col-sm-5">
                    <div class="jumbotron">
                        <h1 class="display-4">PetDays</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                      <a class="btn btn-lg" id ="learn" href="#" role="button">Learn more</a>
                    </p>
                    </div>
                </div>
                <div class="col-sm-7">
                  <img src= "./images/dog.png" class="rounded float-start img-fluid" alt="dog"/>
                </div>
            </div>
        </div>

        <hr class="my-4"/>
        <div class="container" id="para">
            <div class="row">
                <div class="col-sm-7">
                  <img src= "./images/p.png" class="rounded float-start img-fluid" alt="dog"/>
                  
                </div>
                <div class="col-sm-5">
                    <div class="jumbotron">
                        <h1 class="display-4">About Us</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.It uses utility classes for typography and spacing to space content out within the larger container.</p> 
                    <p class="lead">
                      <a class="btn btn-lg" id ="learn" href="#" role="button">Read more</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-4"/>

        <h1 class="display-4">Download the App</h1><br/><br/>
        <a class="btn btn-lg" id ="learn" href="#" role="button">Download here</a><br/><br/>

        <hr class="my-4"/>
        <div class="container" id="para">
            <div class="row">
                <div class="col-sm-5">
                    <div class="jumbotron">
                        <h1 class="display-4">Pet Mart</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p class="lead">
                      <a class="btn btn-lg" id ="learn" href="#" role="button">Visit Pet Mart</a>
                    </p>
                    </div>
                </div>
                <div class="col-sm-7">
                  <img src= "./images/new.png" class="rounded float-start img-fluid" alt="dog"/>
                  
                </div>
            </div>
        </div>
        
         {/* <Footer/> */}

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </div>
  )
}

export default landing