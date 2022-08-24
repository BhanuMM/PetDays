import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forum.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function mdverifyposts() {
  return (
    <div className='forum'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forum'>
        <div class="row g-0 ">
          <div class="col-sm-6 col-md-8"><br/><br/>
            <div class='forum-header'>
              <div class='forum-btn'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <p class="fw-semibold "><button type="button" class="btn btn-outline-success">Latest First <i class='bx bx-chevron-down'></i></button></p>
              </div>
              
            </div>
            <br/><br/>      
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="font-italic text-success fs-7">Approved 2 days ago</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-7"><a href="#" class="link-success text-decoration-none">25 Comments</a></p>
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
                    <p class="fw-normal text-secondary">Approved 2 days ago</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-secondary text-decoration-none">25 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/>
            <div class="card border-secondary">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="fw-normal text-secondary">Approved 2 days ago</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-secondary text-decoration-none">25 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-secondary">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="fw-normal text-secondary">Approved 2 days ago</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-secondary text-decoration-none">25 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-secondary">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="fw-normal text-secondary">Approved 2 days ago</p>
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
          <div className="col-6 col-md-4 text-center flex-column align-items-stretch" > <br/> <br/>
              <div class='forumverifiedposts-sidebar'>
                <br/><br/>
                <p class="fw-semibold "><a href="\mdposts" class="link-secondary text-decoration-none">All Discussions</a></p><br/>      
                <p class="fw-semibold "><a href="\moderatordashboard" class="link-secondary text-decoration-none">Dashboard</a></p>
                <hr className='w-25 mx-auto'/><br/>
                <p class="fw-semibold "><a href="\mdpendingposts" class="link-secondary text-decoration-none">Pending Posts</a></p><br/>
                <p class="fw-semibold "><a href="\forumpendingposts" class="link-secondary text-decoration-none">Verified Posts</a></p><br/>
                {/* <p class="fw-semibold "><a href="\forumverifiedposts" class="link-secondary text-decoration-none">Verified Posts</a></p><br/>
                <p class="fw-semibold "><a href="\forumcommonissues" class="link-secondary text-decoration-none">Common Issues</a></p><br/> */}
            </div>
          </div>
        </div>     
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default mdverifyposts
