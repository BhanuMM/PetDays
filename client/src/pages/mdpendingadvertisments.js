import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/mdadvertisments.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function mdadvertisments() {
  return (
    <div className='forum' class='mdadvertisments'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forum'>
        <div class="row g-0 ">
          <div class="col-sm-6 col-md-8">
            <div class='forum-header'>
              <div class='forum-btn'>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link> 
                <p class="fw-semibold "><button type="button" class="btn btn-outline-success">Latest First <i class='bx bx-chevron-down'></i></button></p>
              </div>
              
              
            </div>
            <br/><br/>      
            <div class="card border-success">
            <div class="card-body">
                <div class="add-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Nimal Perera</p>
                  </div>  
                  <div class='des'>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                    <br/><br/><p class="font-italic text-success fs-7">Posted 30 minutes ago</p>
                  </div>
                  <div class='comment'>
                  <a href="" role="button" aria-pressed="true"><button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">View Add</button></a>
                  </div>
                </div>
            </div>
            </div>
            <br/>
            <div class="card border-secondary">
            <div class="card-body">
                <div class="add-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Nimal Perera</p>
                  </div>  
                  <div class='des'>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                    <br/><br/><p class="font-italic text-success fs-7">Posted 30 minutes ago</p>
                  </div>
                  <div class='comment'>
                  <a href="" role="button" aria-pressed="true"><button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">View Add</button></a>
                  </div>
                </div>
            </div>
            </div><br/>
            <div class="card border-secondary">
            <div class="card-body">
                <div class="add-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Nimal Perera</p>
                  </div>  
                  <div class='des'>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                    <br/><br/><p class="font-italic text-success fs-7">Posted 30 minutes ago</p>
                  </div>
                  <div class='comment'>
                  <a href="" role="button" aria-pressed="true"><button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">View Add</button></a>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-secondary">
            <div class="card-body">
                <div class="add-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Nimal Perera</p>
                  </div>  
                  <div class='des'>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                    <br/><br/><p class="font-italic text-success fs-7">Posted 30 minutes ago</p>
                  </div>
                  <div class='comment'>
                  <a href="" role="button" aria-pressed="true"><button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">View Add</button></a>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-secondary">
            <div class="card-body">
                <div class="add-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Nimal Perera</p>
                  </div>  
                  <div class='des'>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.
                    <br/><br/><p class="font-italic text-success fs-7">Posted 30 minutes ago</p>
                  </div>
                  <div class='comment'>
                  <a href="" role="button" aria-pressed="true"><button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">View Add</button></a>
                  </div>
                </div>
            </div>
            </div>
            <br/>
          </div>
          <div className="col-6 col-md-4 text-center flex-column align-items-stretch" > <br/> <br/>
              <div class='forumverifiedposts-sidebar'>
                <br/><br/>
                <p class="fw-semibold "><a href="\mdadvertisments" class="link-secondary text-decoration-none">All Advertisments</a></p><br/>      
                <p class="fw-semibold "><a href="\moderatordashboard" class="link-secondary text-decoration-none">Dashboard</a></p>
                <hr className='w-25 mx-auto'/><br/>
                <p class="fw-semibold "><a href="\mdpendingposts" class="link-secondary text-decoration-none">Pending Advertisments</a></p><br/>
                <p class="fw-semibold "><a href="\forumpendingposts" class="link-secondary text-decoration-none">Verified Advertisments</a></p><br/>
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

export default mdadvertisments
