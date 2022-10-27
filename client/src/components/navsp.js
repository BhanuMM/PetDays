import React from 'react';
import '../styles/nav.css';
import { AuthContext } from "../helpers/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function navbar() {
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        role : "",
        status: false,
      });
    
      const navigate = useNavigate();
      useEffect(() => {
        axios
          .get("http://localhost:3001/auth/authuser", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                role: response.data.role,
                status: true,
              });
              console.log(response.data.role);
            }
          });
      }, []);
 
      const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", role: "",id: 0, status: false });
        navigate("/home");
      };
  return (

    <nav className="navbar navbar-expand-lg py-3 px-4 auto-hiding-navbar fixed-top mybar">

        <div className="container-fluid">
            <img src= "../images/PetDays.png" className="navbarlogo" alt="dog"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft:130}}>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active" style={{ paddingTop:15}}>
                    <a className="nav-link" href="index" ><h4>Home</h4></a>
                </li>
                <li className="nav-item active" style={{ paddingTop:15}}>
                    <a className="nav-link" href="petmart"><h4>Pet Mart</h4></a>
                </li>
                <li className="nav-item active" style={{ paddingTop:15}}>
                    <a className="nav-link" href="forum"><h4>Pet Talk</h4></a>
                </li>
                {authState.status && (
                <>
                  <li className="nav-item active">
                  {/* <Link to="/login" className="nav-link"> Login</Link> */}
                  <a className="nav-link" > <button type="submit" onClick={logout} class="  btn btn-warning">
                 logout
               </button></a>
           </li>
                </>
              )}
                
            </ul>
            </div>
        </div>

        
    </nav>
  )
}

export default navbar