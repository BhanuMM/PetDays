import React from 'react';

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 px-4 auto-hiding-navbar fixed-top">
        <div className="container-fluid">
            <img src= "../images/PetDays.png" className="logo" alt="dog"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="index"><h4>Home</h4></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="signup"><h4>Pet Mart</h4></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="signup"><h4>Pet Talk</h4></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="signup"><h4>Register</h4></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="signin"><h4>Login</h4></a>
                </li>
            </ul>
            </div>
        </div>

        
    </nav>
  )
}

export default navbar