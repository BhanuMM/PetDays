import React from 'react';
import '../styles/viewusers.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbarspecial';
import birds from '../images/user 1-01.jpg';
import cat from '../images/user 6-01.jpg';
import cattle from '../images/user 3-01.jpg';
import dog from '../images/user 4-01.jpg';
import monkey from '../images/user 5-01.jpg';
import man from '../images/user 2-01.jpg';
function viewusers() {
  return (
    <div class="container-fluid ">
       <div className='row'>
        <Navbar />
       </div>
    <div class="row">
    <div className="row flex-nowrap pt-5">
          <div className='col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4'>
              <Sidebar />
          </div>
          <div class="col col-xl-6">
          <div class="pt-4 search-bar pb-5">
                    <div class="topnav">
                            <h7 className='topic'>Search Users</h7>
                            <button type="button" class="btn btn-light btn-search">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        <input type="text" placeholder="Search.."/>
                    </div>
                </div>
            <div class="card pt-5">
              <div class="card-body card-size">
                <ul class="list-unstyled mb-0">
                  <li class="p-2 border-bottom">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="70"/>
                        <div class="pt-1">
                          <p class="fw-bold mb-0">John Doe</p>
                          <p class="small text-muted">Hello, Are you there?</p>
                        </div>
                      </div>
                  </li>
                  <li class="p-2 border-bottom">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Danny Smith</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                  </li>
                  <li class="p-2 border-bottom">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Alex Steward</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                  </li>
                  <li class="p-2 border-bottom">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Ashley Olsen</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                  </li>
                  <li class="p-2 border-bottom">
                      <div class="d-flex flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                          class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"/>
                        <div class="pt-1">
                          <p class="fw-bold mb-0">Kate Moss</p>
                          <p class="small text-muted">Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                  </li>
                </ul>
          </div>
    </div>
  </div>
</div></div></div>
  )
}

export default viewusers
