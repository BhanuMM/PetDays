import '../styles/moderatorsidebar.css';
import React from 'react'

function moderatorsidebar() {
  return (
            <nav className='col sidebar' id='sidebar'>
                <ul class="nav flex-column vertical-nav "><br/><br/>
                    <li class="nav-item">
                        <a class="nav-link active" href=""><i class="fa fa-home ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Home</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\moderatordashboard"><i class="fa fa-tachometer ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dashboard</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\petmart"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet Mart</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\forum"><i class="fa fa-medkit ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet Talk</span></a>
                    </li><hr />
                    
                </ul>
            </nav>
  )
}

export default moderatorsidebar
