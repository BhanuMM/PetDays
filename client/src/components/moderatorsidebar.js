import '../styles/sidebar.css';
import React from 'react'

function moderatorsidebar() {
  return (
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="../" class="nav-link align-middle px-0">
                        <i class="fa fa-home ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="../sellersdashboard" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fa fa-tachometer ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dashboard</span> </a>
                        
                    </li>
                    <li>
                        <a href="../petcategories" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet Mart</span> </a>
                        
                    </li>
                    <li>
                        <a href="../medications" class="nav-link px-0 align-middle">
                        <i class="fa fa-users ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet Talk</span></a>
                    </li>
                    
                </ul>
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline names mx-1">Thomas</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
  )
}

export default moderatorsidebar
