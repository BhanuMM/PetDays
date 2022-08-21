import '../styles/sidebar.css';
import React from 'react'

function sidebar() {
  return (
            <nav className='col sidebar' id='sidebar'>
                <ul class="nav flex-column vertical-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fa fa-home ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-tachometer ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dashboard</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet categories</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-medkit ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Medications</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-cutlery ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Diet plans</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-area-chart ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Generate Reports</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-users ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">View Users</span></a>
                    </li>
                </ul>
            </nav>
  )
}

export default sidebar
