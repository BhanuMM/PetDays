import React from 'react'

function navbar() {
  return (
    <div className='navbar'>
        <nav class="navbar navbar-expand-lg navbar-style">
            <div class="container">
                <div class="navbar-header">
                    <img src="PetDays.png" class="logo"/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#micon" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="micon">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active ">
                          <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Pet Mart</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Pet Talk</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                        
                      </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar