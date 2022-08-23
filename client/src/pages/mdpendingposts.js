import React from 'react';
import '../styles/footerspecial.css';
import '../styles/moderatordashboard.css';
import Sidebar from '../components/sidebar';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from '../components/navbarspecial';
import Profilepic from '../images/profile.jpg';

function mdpendingposts() {
  return (
    <div className='mdpendingposts container-fluid'>
        <div className='row'>
            <Navbar />
        </div><br/><br/><br/>
        <div className='row '>
            <div className="row flex-nowrap">
                <div className='col-2 col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-color'>
                    <Moderatorsidebar />
                </div>
                <div className="col-10 py-3">
                    <div class="card border-success">
                        <div class="card-body">
                            <div class="prof-img">
                                <img src={Profilepic}   className="col-6" alt="profilepic"/>
                            </div>
                            <div class="content">
                                <div>
                                    <p class="font-italic text-secondary fs-7">John Fenando</p>
                                    <p class="fw-semibold fs-7">My dog's Injury</p>
                                    <p class="font-italic text-success fs-7">Latest reply is from john 5 minutes ago.</p>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default mdpendingposts
