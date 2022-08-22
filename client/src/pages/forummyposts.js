import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forummyposts.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function forummyposts() {
  return (
    <div className='forummypostsmyposts'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forummyposts'>
        <div class="row g-0 ">
          <div class="col-sm-6 col-md-8">
            <div class='forummyposts-header'>
              <div class='forummyposts-btn'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <p class="fw-semibold "><button type="button" class="btn btn-outline-success">Latest First <i class='bx bx-chevron-down'></i></button></p>
              </div>
              <div class='forummyposts-search'>  
                <div class="input-group rounded">
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                </div>
              </div>
              
            </div>
            <br/><br/>      
            <div class="card border-secondary">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="font-italic text-secondary fs-7">Latest reply is from john 5 minutes ago.</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-7"><a href="#" class="link-secondary text-decoration-none">25 Comments</a></p>
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
                    <p class="fw-normal text-secondary">Latest reply is from john 5 minutes ago.</p>
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
                    <p class="fw-normal text-secondary">Latest reply is from john 5 minutes ago.</p>
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
                    <p class="fw-normal text-secondary">Latest reply is from john 5 minutes ago.</p>
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
                    <p class="fw-normal text-secondary">Latest reply is from john 5 minutes ago.</p>
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
                <button type="button" className="btn btn-success btn-md col-8 col-sm-8 mx-auto fw-bold " id='new-btn'>Start New Discussion</button>
                <br/><br/>
                <p class="fw-semibold "><a href="\forum" class="link-secondary text-decoration-none">All Discussions</a></p><br/>      
                <p class="fw-semibold "><a href="\forummyposts" class="link-secondary text-decoration-none">My Posts</a></p>
                <hr className='w-25 mx-auto'/><br/>
                <p class="fw-semibold "><a href="\forummylatestposts" class="link-secondary text-decoration-none">My Latest Posts</a></p><br/>
                <p class="fw-semibold "><a href="\forumpendingposts" class="link-secondary text-decoration-none">Pending Posts</a></p><br/>
                <p class="fw-semibold "><a href="\forumverifiedposts" class="link-secondary text-decoration-none">Verified Posts</a></p><br/>
                <p class="fw-semibold "><a href="\forumcommonissues" class="link-secondary text-decoration-none">Common Issues</a></p><br/>
            </div>
          </div>
        </div>     
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default forummyposts
