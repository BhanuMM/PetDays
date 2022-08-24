import '../styles/moderatorsidebar.css';
import React from 'react'
import '../styles/serviceprovidersidebar.css';

function moderatorsidebar() {
  return (
            <nav className='col sidebarbm ' >
                <ul class="nav flex-column vertical-nav "><br/><br/>
                <li class="nav-item text-center">
                <div class="profile-pic">
							<img
								src="https://github.com/mdo.png"
								alt="hugenerd"
								class="rounded-circle serviceprovidersidebar-imagesize"
							/>

						</div>
                        <p class="nav-link active text-center" href="/petmart"><span class="ms-1 d-none d-sm-inline names">Malith Perera<br/>malithp@gmail.com<br/>+9471 56 78 345</span></p>
                    </li>

                    <hr/>
                    
                    <li class="nav-item">
                        <a class="nav-link active" href="/serviceproviderdashboard"><i class="fa fa-home ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Dasboard</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/serviceprovideralladds"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">All Ads</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Approved"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Approved Ads</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="\pendingads"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Pending Ads</span></a>
                    </li>
                    <li class="nav-item">

                        <a class="nav-link" href="\Rejected"><i class="fa fa-tasks ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Rejected Ads</span></a>
                    </li>
                    <li class="nav-item">

<a class="nav-link" href="\Rejected"><i class="fa fa-user ico" aria-hidden="true"></i> <span class="ms-1 d-none d-sm-inline names">Edit Profile</span></a>
</li>
                   
                    

                    
                </ul>
            </nav>
  )
}

export default moderatorsidebar
