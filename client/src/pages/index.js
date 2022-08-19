import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import mew from '../images/mew.png';
import cat from '../images/cat.png';
import paw from '../images/paw.png';
import '../styles/index.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
function index() {
  return (
    <div className='index'>
      <Navbar />
      <header className="header"/> 
      <div className="container" id="para">
            <div className="row">
                <div className="col-sm-5">
                    <div className="jumbotron">
                          <h1 className="display-4 mt-5">Pet Days</h1>

                      {/* <p className="lead">loremEnim culpa irure ex minim ad labore ad pariatur qui do laboris ad quis. Id in in incididunt ex pariatur proident. </p> */}
                      <br/>
                      <p className="lead">Pet Days is a web and mobile application that <br/>centralizes all the needs of a pet owner living in
  Sri Lanka.<br/> Pet Days provide the necessary health care details and help you keep track of all the
  medication, vaccines, and dietary needs of your pet.</p>

                      <hr
                        style={{
                          background: '#fff',
                          color: '#D3D3D3',
                          borderColor: '#D3D3D3',
                          height: '0.5px',
                          padding: '10px'
                        }}
                      />
                      <p class="fw-bolder fs-5">Download the mobile app now to access the pet diary feature</p>
                      <p className="lead">
                      <div className="buttons justify-content-center mt-5 d-sm-flex">
                        <div className="col">
                          <button className="btn btn-dark app-button"><i className="fa fa-apple fa-3x"></i><span className="text-uppercase ml-3">Apple store</span></button>
                        </div>
                        <div className="col" class='dow-buttons'>
                          <button className="btn btn-dark app-button"><i className="fa fa-play fa-3x"></i><span className="text-uppercase ml-3">Google store</span></button>   
                        </div>  
                      </div>
                      </p>
                    </div>
                </div>
                <div className="col-sm-6">
                  <img src= "./images/dog.png" className="rounded float-start img-fluid" alt="dog" />
                </div>
            </div>
        </div>
        {/* <hr
        style={{
          background: '#fff',
          color: '#D3D3D3',
          borderColor: '#D3D3D3',
          height: '0.5px',
          padding: '20px'
        }}
      /> */}
      {/* <div className="container" class='petmart-sec'> */}

      {/* <p class="display-5 fw-bolder">Are you looking for pet services</p> */}

        {/* <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="text-center">
              <h2 className="text-uppercase ">Download App</h2>
              <div className="buttons justify-content-center mt-5 d-sm-flex">
                <div className="col">
                  <button className="btn btn-dark app-button"><i className="fa fa-apple fa-3x"></i><span className="text-uppercase ml-3">Apple store</span></button>
                </div>
                <div className="col">
                  <button className="btn btn-dark app-button"><i className="fa fa-play fa-3x"></i><span className="text-uppercase ml-3">Google store</span></button>   
                </div>  
              </div>   
            </div>
          </div>
          <div className="col-md-6">  
            <div className="text-center">
            <img src= {mew} className="rounded float-start img-fluid" alt="dog"/>  
            </div>
          </div>
          
        </div> */}
      {/* </div> */}
      <hr
        style={{
          background: '#fff',
          color: '#D3D3D3',
          borderColor: '#D3D3D3',
          height: '0.5px',
          padding: '20px'
        }}
      />
        <div className="container" id="para">
            <div className="row">
                <div className="col-sm-3">
                  <img src= {cat} className="rounded float-start img-fluid" alt="dog"/>
                  
                </div>
                <div className="col-sm-5">
                    <div className="jumbotron">
                      <p class="display-5 fw-bolder">Are you looking for Pet Services ?</p>
                        <hr
                      style={{
                        background: '#fff',
                        color: '#D3D3D3',
                        borderColor: '#D3D3D3',
                        height: '0.5px',
                        padding: '10px'
                      }}
                    />
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> 
                    <hr
                      style={{
                        background: '#fff',
                        color: '#D3D3D3',
                        borderColor: '#D3D3D3',
                        height: '0.5px',
                        padding: '10px'
                      }}
                    />
                    <p className="lead">
                      <a className="btn btn-md" id ="learn" href="signup" role="button"><img src= {paw} className="rounded float-start img-fluid btn-image" alt="dog"/></a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
      

        <hr
        style={{
          background: '#D3D3D3',
          color: '#D3D3D3',
          borderColor: '#D3D3D3',
          height: '0.5px',
        }}
      />

        <div className="container" id="para">
            <div className="row">
                <div className="col-sm-7">
                  <img src= {cat} className="rounded float-start img-fluid" alt="dog"/>
                  
                </div>
                <div className="col-sm-5">
                    <div className="jumbotron">
                        <h1 className="display-4">Pet Talk</h1>
                        <hr
                      style={{
                        background: '#fff',
                        color: '#D3D3D3',
                        borderColor: '#D3D3D3',
                        height: '0.5px',
                        padding: '10px'
                      }}
                    />
                    <p className="lead">The pet care forum provides a platform to interact with the community and resolve your pet
needs with the help of other pet lovers. With the pet forum, users can post any question about
pets in the forum and other users with experience in the field will have the opportunity to answer
the questions.</p> 
                    <hr
                      style={{
                        background: '#fff',
                        color: '#D3D3D3',
                        borderColor: '#D3D3D3',
                        height: '0.5px',
                        padding: '10px'
                      }}
                    />
                    <p className="lead">
                      <a className="btn btn-md" id ="learn" href="signup"  role="button" style={{                       
                        color: 'Black',
                      }}>Visit Pet Talk</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        
         <Footer />
    </div>
  )
}

export default index