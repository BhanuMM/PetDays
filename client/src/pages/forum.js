import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forum.css';
import Profilepic from '../images/profile.jpg';


function forum() {
  return (
    <div className='container'>
    <div className='container-fluid forum'>
      <div class="row g-0 ">
        <div class="col-sm-6 col-md-8">
          <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
          <button type="button" class="btn btn-outline-success">Latest First <i class='bx bx-chevron-down'></i></button>
          <br/><br/>      
          <div class="card border-success">
          <div class="card-body">
              <div class="prof-img">
                <img src={Profilepic}   className="col-6" alt="profilepic"/>
              </div>
              <div class="content">
                <div>
                <p class="fw-semibold fs-7">My dog's Injury</p>
                <p class="fw-normal text-success">Lastest reply is from john 5 minutes ago.</p>
                </div>  
                <div>
                  This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                </div>
                <div class='comment'>
                <p class="fw-semibold fs-6"><a href="#" class="link-success text-decoration-none">25 Comments</a></p>
                </div>
              </div>
          </div>
          </div>
          <br/>
          <div class="card border-secondary">
          <div class="card-body">
              <div class="prof-img">
                <img src={Profilepic}   className="col-6" alt="profilepic"/>
              </div>
              <div class="content">
                <div>
                <p class="fw-semibold fs-7">My dog's Injury</p>
                <p class="fw-normal text-secondary">Lastest reply is from john 5 minutes ago.</p>
                </div>  
                <div>
                  This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                </div>
                <div class='comment'>
                <p class="fw-semibold fs-6"><a href="#" class="link-secondary text-decoration-none">25 Comments</a></p>
                </div>
              </div>
          </div>
          </div>

          <br/>
        </div>
        <div class="col-6 col-md-4 text-center flex-column align-items-stretch" >
          <button type="button" class="btn btn-success btn-md col-8 col-sm-8 mx-auto fw-bold fs-5">Start New Discussion</button>
          <br/><br/>
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">All Discussions</a></p><br/>      
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">My Posts</a></p>
          <hr className='w-25 mx-auto'/><br/>
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">My Latest Posts</a></p><br/>
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">Find Answers</a></p><br/>
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">Give Solutions</a></p><br/>
          <p class="fw-semibold fs-5"><a href="#" class="link-secondary text-decoration-none">Common Issues</a></p><br/>
        </div>
      </div>     
    </div>
    </div>
  )
}

export default forum
