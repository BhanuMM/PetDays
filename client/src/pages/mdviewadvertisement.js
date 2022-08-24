import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forum.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import G1 from '../images/pw.jpg';
import G2 from '../images/pw2.jpg';


function mdviewadvertisement() {
  return (
    <div className='forum'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forum'>
        <div class="row g-0 ">
          <div class="col-sm-6 col-md-8">
            <div class='forum-header'>  
            </div>
            <br/><br/>      
            <div>
            <div class='title'>
              <div class='content'>
                
                <p className=''>
                <h3 className=''>DOG FRIENDS </h3>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
                <hr/>
                
                </p>   
               
              </div> 
            </div>
            <div className='row pb-3'>
              <div className='col-1'></div>
              <div className='col-5'>
                <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
              </div>
              <div className='col-5'>
                <img src={G2} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-4'>
              <p className='ml-5 pl-5 text-start'>
            <h3>Dog Walking Service</h3>
            <p> 22 August 2022</p>
           

            <h4>Rs 2000.00 only</h4>
           
            </p>
            <p>
              Keep your dog happy and in greate space with our help.
              Let we take care of your pet while you are away.
            </p>
            
              </div>
              <div className='col-4'></div>
              <div className='col-4'>
                <p><h6>Contact Us</h6>
                <p><i class="fa fa-envelope" aria-hidden="true"></i> wwww.dogfriends.lk</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i>+94 718 956 953 </p> 
                <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>

                </p>
              </div>
            </div>

            
        </div>
            <br/>

            <div class='comment'>
                <a href="" role="button" aria-pressed="true">  <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success approve-btn">Approve</button></a>
                <a href="" role="button" aria-pressed="true"> <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-danger">Reject</button></a>
            </div><br/><br/>
          </div>

          
          <div className="col-6 col-md-4 text-center flex-column align-items-stretch" > <br/> <br/>
              <div class='forumverifiedposts-sidebar'>
              <p class="fw-semibold "><a href="\mdposts" class="link-secondary text-decoration-none">All Discussions</a></p><br/>      
                <p class="fw-semibold "><a href="\moderatordashboard" class="link-secondary text-decoration-none">Dashboard</a></p>
                <hr className='w-25 mx-auto'/><br/>
                <p class="fw-semibold "><a href="\mdpendingposts" class="link-secondary text-decoration-none">Pending Posts</a></p><br/>
                <p class="fw-semibold "><a href="\mdverifyposts" class="link-secondary text-decoration-none">Verified Posts</a></p><br/>
            </div>
          </div>
        </div>     
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default mdviewadvertisement
