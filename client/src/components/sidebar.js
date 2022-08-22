import '../styles/sidebar.css';
import React from 'react'

function sidebar() {
  return (
            <nav className='col sidebar' id='sidebar'>
                <ul class="nav flex-column vertical-nav ">
                    <li class="nav-item">
                        <a class="nav-link active" href=""><i class="fa fa-home ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Home</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\sellersdashboard"><i class="fa fa-tachometer ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dashboard</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\petcategories"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet categories</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\medications"><i class="fa fa-medkit ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Medications</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\dietplans"><i class="fa fa-cutlery ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Diet plans</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\reportgeneration"><i class="fa fa-area-chart ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Generate Reports</span></a>
                    </li><hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\viewusers"><i class="fa fa-users ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">View Users</span></a>
                    </li><hr />
                </ul>
            </nav>
  )
}

export default sidebar
