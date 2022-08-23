import React from 'react';
import '../styles/navspecial.css';
function navbarspecial() {
  return (
    <nav className="navbar navbar-expand-lg navspecial space-between py-3 px-4 auto-hiding-navbar fixed-top">
        <div className="container-fluid">
            <img src= "./images/PetDays.png" className="logo" alt="dog"/>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">    
            </ul>
            <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline names mx-1">Thomas</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">My Profile</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
        </div>
    </nav>
  )
}

export default navbarspecial