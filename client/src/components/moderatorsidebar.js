import '../styles/moderatorsidebar.css';
import React from 'react'

function moderatorsidebar() {
  return (
            <nav className='col sidebar' id='sidebar'>
                <ul class="nav flex-column vertical-nav "><br/><br/>
                   
                    <li class="nav-item">
                        <a class="nav-link" href="\moderatordashboard"><i class="fa fa-tachometer ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dashboard</span></a>
                    </li>
                    <hr />
                    <li class="nav-item">
                        <a class="nav-link" href="\petmart"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pet Talk Posts</span></a>
                    </li>
                    <li class="nav-item">

                        <a class="nav-link" href="\forum"><i class="fa fa-file-image-o ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Advertisements</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href=""><i class="fa fa-medkit ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Medication</span></a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link active" href=""><i class="fa fa-cutlery ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Diet Plans</span></a>
                    </li>

                    
                </ul>
            </nav>
  )
}

export default moderatorsidebar
