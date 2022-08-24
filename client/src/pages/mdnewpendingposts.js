import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import "../styles/mdpendingads.css";
import Profilepic from '../images/profile.jpg';
import Moderatorsidebar from '../components/moderatorsidebar';
import Navbar from "../components/navbarspecial";
import drug from "../images/drugs.png";
import man from "../images/man-01.png";
import cat from "../images/cat-01.png";
import diet from "../images/health.png";
import postmd from "../images/postsmd.png";
import addmd from "../images/addmd.png";

function mdpendingads() {
	return (
		<div class="container-fluid moderatordashboard">
			<div className="row">
				<Navbar />
			</div>
			<div className="row ">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Moderatorsidebar />
					</div>
					<div className="col-10"><br/><br/><br/><br/>
                    <div className='container'><br/><br/><br/><br/>
                        <div className='container-fluid forum'><br/><br/><br/><br/><br/><br/><br/><br/>
                            <div class="row g-0 ">
                            <div class="col-sm-6 col-md-12"><br/><br/><br/><br/><br/><br/><br/><br/>
                            <h1 class="mt-4">Pending Forum Posts</h1><hr/>
                                <div class='forum-header'><br/>
                                </div>
                                     
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
                                    <div class='comment'><br/>
                                        <a href="" role="button" aria-pressed="true">  <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">Approve</button></a>
                                        <a href="" role="button" aria-pressed="true"> <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-danger">Reject</button></a>
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
                                        This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.This is some text within a card body.
                                    </div> 
                                    <div class='comment'><br/>
                                        <a href="" role="button" aria-pressed="true">  <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">Approve</button></a>
                                        <a href="" role="button" aria-pressed="true"> <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-danger">Reject</button></a>
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
                                    <div class='comment'><br/>
                                        <a href="" role="button" aria-pressed="true">  <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-success">Approve</button></a>
                                        <a href="" role="button" aria-pressed="true"> <button type="submit" style={{width:"3cm"}} class="pl-5 btn btn-danger">Reject</button></a>
                                    </div>
                                    </div>
                                </div>
                                </div><br/> 
                                <br/> 
                                
                                <br/>
                            </div>
                            
                            </div>     
                        </div>
      </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default mdpendingads;
