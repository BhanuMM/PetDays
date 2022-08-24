import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/forum.css';
import Profilepic from '../images/profile.jpg';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function forum() {
  return (
    <div className='forum'>
      <Navbar/><br/><br/><br/><br/>
      <div className='container'>
      <div className='container-fluid forum'>
      <div className="row mt-3">
              <div className="col-6"></div>
              <div className="col-6 text center">
               
              </div>
            </div>
        <div class="row  ">
          <div class="col-8 col-md-8">
          
            <br/><br/>      
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Dangerous, Potentially Deadly Houseplants Your Dog Should Avoid</p>
                    <p class="font-italic text-success fs-7">Latest reply is from Bhathiya 5 minutes ago.</p>
                  </div>  
                  <div>
                  Most dog people know that some outdoor plants like oleander and sago palms are toxic to dogs. What you may not realize is that there are tons of household plants that are dangerous, or even deadly, to dogs
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-7"><a href="#" class="link-success text-decoration-none">5 Comments</a></p>
                  </div>
                </div>
            </div>
            </div>
            <br/>
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Help With 5 mo.Puppy Who Won't Eat!</p>
                    <p class="fw-normal text-success">Latest reply is from Kasun 25 minutes ago.</p>
                  </div>  
                  <div>
                  could really use some help - my 5 month old puppy will not eat. She's always been a picky eater and has dealt with parasites, chronic constipation, and gas issues however those have resolved.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-success text-decoration-none">15 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/>
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">Coughing- 11 year old Golden Mix</p>
                    <p class="fw-normal text-success">Latest reply is from Shani 1 hour ago.</p>
                  </div>  
                  <div>My golden mix has had a cough for about 2 months. We originally thought kennel cough and moved forward with 2 rounds or antibiotics and steroids with no change. I have researched collapsed trachea but cannot get a firm answer with the info I have found online.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-success text-decoration-none">25 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="fw-normal text-success">Latest reply is from john 5 minutes ago.</p>
                  </div>  
                  <div>
                    This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                  </div>
                  <div class='comment'>
                    <p class="fw-semibold fs-6"><a href="#" class="link-success text-decoration-none">25 Comments</a></p>
                  </div>
                </div>
            </div>
            </div><br/> 
            <div class="card border-success">
            <div class="card-body">
                <div class="prof-img">
                  <img src={Profilepic}   className="col-6" alt="profilepic"/>
                </div>
                <div class="content">
                  <div>
                    <p class="fw-semibold fs-7">My dog's Injury</p>
                    <p class="fw-normal text-success">Latest reply is from john 5 minutes ago.</p>
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
          </div>
          <div className="col-4 col-md-4 text-center flex-column align-items-stretch" > <br/> <br/>
              <div class='forumverifiedposts-sidebar'>
                <button type="button" className="btn btn-warning btn-md col-8 col-sm-8 mx-auto fw-bold " id='new-btn'>Start New Discussion</button>
                <br/><br/>
                <p class="fw-semibold "><a href="\forum" class="link-dark text-decoration-none">All Discussions</a></p>     
                
                <hr className='w-25 mx-auto'/><br/>
                <p class="fw-semibold "> <div class="forum-search ml-5">
                 
                </div></p>
                <p class="fw-semibold "><a href="\forummylatestposts" class="link-dark text-decoration-none">Filtery by :</a></p>
                <p class="fw-semibold ">  <div class="dropdown">
                  <button
                    class="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pet Category
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Cats
                    </a>
                    <a class="dropdown-item" href="#">
                      Dogs
                    </a>
                  </div>
                </div></p><br/>
                <p class="fw-semibold "><a href="\forummylatestposts" class="link-dark text-decoration-none">Sort by :</a></p>
                <p class="fw-semibold ">  <div class="dropdown">
                  <button
                    class="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Latest
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Most Commented
                    </a>
                    <a class="dropdown-item" href="#">
                      Earliest
                    </a>
                  </div>
                </div></p><br/>
            </div>
          </div>
        </div>     
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default forum
