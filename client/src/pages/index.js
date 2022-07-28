import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav.css';
import '../styles/footer.css';
import mew from '../images/mew.png';
import cat from '../images/cat.png';
import paw from '../images/paw.png';

function index() {
  return (
    <div className='index'>
      
      {/* <Navbar/> */}

      <header className="header"/> 
      <div className="container" id="para">
            <div className="row">
                <div className="col-sm-5">
                    <div className="jumbotron">
                        <h1 className="display-4">PetDays</h1>
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
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
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
                    <img src= {paw} className="rounded float-start img-fluid btn-image" alt="dog"/>
                    </p>
                    </div>
                </div>
                <div className="col-sm-7">
                  <img src= "./images/dog.png" className="rounded float-start img-fluid" alt="dog"/>
                </div>
            </div>
        </div><hr
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
                <div className="col-sm-7">
                  <img src= {cat} className="rounded float-start img-fluid" alt="dog"/>
                  
                </div>
                <div className="col-sm-5">
                    <div className="jumbotron">
                        <h1 className="display-4">About Us</h1>
                        <hr
                      style={{
                        background: '#fff',
                        color: '#D3D3D3',
                        borderColor: '#D3D3D3',
                        height: '0.5px',
                        padding: '10px'
                      }}
                    />
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.It uses utility classNamees for typography and spacing to space content out within the larger container.</p> 
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
                      <a className="btn btn-md" id ="learn" href="#" role="button"><img src= {paw} className="rounded float-start img-fluid btn-image" alt="dog"/></a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <hr
        style={{
          background: '#fff',
          color: '#D3D3D3',
          borderColor: '#D3D3D3',
          height: '0.5px',
          padding: '20px'
        }}
      />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
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
                <div className="col-sm-5">
                    <div className="jumbotron">
                        <h1 className="display-4">Pet Mart</h1>
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
                      <a className="btn btn-md" id ="learn" href="#" role="button"><img src= {paw} className="rounded float-start img-fluid btn-image" alt="dog"/></a>
                    </p>
                    </div>
                </div>
                <div className="col-sm-7">
                  <img src= "../images/new.png" className="rounded float-start img-fluid" alt="dog"/>  
                </div>
            </div>
        </div>
        
         {/* <Footer/> */}

    </div>
  )
}

export default index