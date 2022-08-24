import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import mew from "../images/mew.png";
import dog from "../images/new.png";
import google from "../images/google.png";
import apple from "../images/apple.png";
import paw from "../images/bg2 (2).png";
import name from "../images/name.png";
import "../styles/index.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
function index() {
  return (
    <div className="index" class="index">
      <Navbar />
      <header className="header" />
      <div className="container mt-5 pt-5" id="para">
        <div className="row">
          <div className="col-sm-6">
            <div className="jumbotron" class="details">
              <br />
              <br />
              <img
                src={name}
                className="rounded float-start img-fluid"
                alt="dog"
              />
              <br />
              <br />
              <br />
              <br />
              <p className="lead">
                Pet Days is a web and mobile application that centralizes all
                the needs of a pet owner living in Sri Lanka. Pet Days provide
                the necessary health care details and help you keep track of all
                the medication, vaccines, and dietary needs of your pet.
              </p>

              <hr
                style={{
                  background: "#fff",
                  color: "#D3D3D3",
                  borderColor: "#D3D3D3",
                  height: "0.5px",
                  padding: "10px",
                }}
              />
              <p class="fw-bolder fs-5">
                Download the mobile app now to access the pet diary feature
              </p>
              <p className="lead">
                <div className="buttons justify-content-center mt-5 d-sm-flex">
                  <div >
                  
                  <img class="maut_button-appstore-logo" src={google}  alt="Get it on Google Play"/>
                   
                  </div>
                  <div className="col" >
                  <img class="maut_button-appstore-logo" src={apple}   alt="Get it on Google Play"/>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <br />
          <div className="col-sm-6 text-center">
            <img
              src="./images/dog.png"
              className="rounded float-start img-fluid"
              alt="dog"
            />
          </div>
        </div>
      </div>
      {/* <hr
        style={{
          background: "#fff",
          color: "#D3D3D3",
          borderColor: "#D3D3D3",
          height: "0.5px",
          padding: "20px",
        }}
      /> */}
      <div
        className="container-fluid pmartsec"
        id="para"
      >
        <div className="row pt-4 pb-4">
          <div className="col-lg-5 " >
            <img
              src={paw}
              className="rounded float-start img-fluid petmartimage"
              alt="dog"
            />
          </div>
          <br />
          <div className="col-lg-7 pt-5 ">
            <div >
              <p class="display-6 fw-bolder pmarttext mt-1">
                Are you looking for <br />
                Pet Services ?
              </p>

              <p className="lead">
                Visit out pet mart and find services easily for you beloved pet
              </p>

              <p className="lead">
                <a
                  className="btn btn-md"
                  id="learn"
                  href="signup"
                  role="button"
                >
                  <div class="button-1">
                    <button type="submit" class=" pl-5 btn btn-warning index-mainbuttonset">
                      Visit Pet Mart
                    </button>
                  </div>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="para">
        <div class="row g-0 pt-5">
          <div class="col-sm-4 col-md-6">
            <div className="jumbotron">
              <p class="display-6 fw-bolder  ">
                Are you having any Trouble regarding your pet ?
              </p>
              {/* <hr
                style={{
                  background: "#fff",
                  color: "#D3D3D3",
                  borderColor: "#D3D3D3",
                  height: "0.5px",
                  padding: "10px",
                }}
              /> */}
              <p className="lead">
                The pet care forum provides a platform to interact with the
                community and resolve your pet needs with the help of other pet
                lovers. With the pet forum, users can post any question about
                pets in the forum and other users with experience in the field
                will have the opportunity to answer the questions.
              </p>
              {/* <hr
                style={{
                  background: "#fff",
                  color: "#D3D3D3",
                  borderColor: "#D3D3D3",
                  height: "0.5px",
                  padding: "10px",
                }}
              /> */}
              <div class="button-1 pb-5 ">
                <button type="submit" class=" pl-5 btn btn-warning index-mainbuttonset ">
                 Visit Pet Talk
                </button>
              </div>
            </div>
          </div>
          <div class="col-3 col-md-5 text-center" id="pet-talk-image">
            <img
              src={dog}
              className="rounded float-start img-fluid "
              alt="dog"
            />
          </div>
        </div>
      </div>
      <div class="card text-center background-div">
        <br /><br /><br /><br /><br />  
        <p class="display-7 fw-bolder mt-5">
          Would you like to enjoy the Pet Diary feature?
        </p>
        <p class="display-6 fw-bolder">
          Download the Mobile Application from here
        </p>
        <div className="buttons justify-content-center mt-5 d-sm-flex">
          <div className="col" class="dow-button-1">
          <img class="maut_button-appstore-logo" src={google} width={250} alt="Get it on Google Play"/>
          </div>
          <div className="col" class="dow-button-2">
          <img class="maut_button-appstore-logo" src={apple} width={250} alt="Get it on Google Play"/>
          </div>
        </div>
        <br />
      </div>
      <br />

      
      <div class="card text-center ">
        <br />
        <p class="display-7 fw-bolder pt-3">
          Are you a Service Provider looking for promote your service ?
        </p>
        <p class="display-6 fw-bolder">Register as a Service Provider</p>
        <center>
          <button type="submit" class="btn btn-warning reg-btn index-mainbuttonset">
            Register
          </button>
        </center>
        <center>
          <img
            src={mew}
            className="rounded float-start img-fluid"
            alt="mew"
            class="sp-sec"
          />
        </center>
        <br />
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default index;
