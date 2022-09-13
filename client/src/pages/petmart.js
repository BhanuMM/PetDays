import React from "react";

import "../styles/nav.css";
import "../styles/footer.css";
import "../styles/petcategories.css";
import "../styles/petmart.css";
import "../styles/forum.css";
import A1 from "../images/pw2.jpg";
import A2 from "../images/a2.jpg";
import A3 from "../images/a3.jpg";
import A4 from "../images/a4.jpg";
import G3 from "../images/g3.jpg";
import G2 from "../images/g2.jpg";
import G1 from "../images/g1.jpg";
import G4 from "../images/g4.jpg";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/petcategories.css";

function petmart() {
  return (
    <div className="Petmart">
      <Navbar />
      <div class="container-fluid">
        <div className="row mt-5 pt-5">
          <div class="forum-header mb-3 mt-3">
            <div className="row mt-2">
              <div className="col-4"></div>
              <div className="col-4 text center">
                <div class="forum-search ml-5">
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-3 "></div>
              <div className="col-1 pt-2"> <h5> Filter By:</h5></div>
              <div className="col-2 text-center">
              <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pet Category
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Cats
                    </a>
                    <a class="dropdown-item" href="#">
                      Dogs
                    </a>
                  </div>
                </div>
                
              </div>
              <div className="col-2 text-center">
              <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Service Category
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                     Pet Walking
                    </a>
                    <a class="dropdown-item" href="#">
                     Pet Daycare
                    </a>
                    <a class="dropdown-item" href="#">
                     Pet Grooming
                    </a>
                  </div>
                </div>
                
              </div>
              <div className="col-2 text-center">
              <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    District
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Colombo
                    </a>
                    <a class="dropdown-item" href="#">
                      Galle
                    </a>
                    <a class="dropdown-item" href="#">
                      Kandy
                    </a>
                    <a class="dropdown-item" href="#">
                      Matara
                    </a>
                    <a class="dropdown-item" href="#">
                     Kurunegala
                    </a>
                  </div>
                </div>
                
              </div>
              
              <div className="col-2"></div>
            </div>
          </div>
        </div>
        <main class="py-6 bg-surface-secondary">
						<div class="petmart-container-fluid">
              <div className="row">
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://www.acs.edu.au/database/images/course_4335051.jpg" class="img-fluid rounded"/>
                      <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button>  </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://cdn.cdnparenting.com/articles/2018/12/196619114-H.jpg" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button> </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://www.thedoghouseps.com/wp-content/uploads/2020/01/combing-the-head-of-yorkshire-terrier-picjumbo-com-1-1024x683.jpg" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button> </div>
                  </div>
              </div>
                </div>
                <div className="col-3">
                <div class="petmart-card">
                  <div class="petmart-inner-card"> <img src="https://i0.wp.com/sanantonioreport.org/wp-content/uploads/2019/01/BonnieArbittier_lucys_doggy_daycare_dog_pet_boarding_1604_new_location_grooming_1-16-2019-8.jpg?fit=1170%2C780&ssl=1" class="img-fluid rounded"/>
                  <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                          <h4>Pet Day Care</h4>
                          <small>21 Aug 2022</small>
                          
                      </div>
                      <div class="mt-2 px-2"> <small>Best care has qualified team of doctors and professionally trained team of Veterinary Assistants and Dog Handlers to offer you the best service.</small> </div>
                      <div class="px-2">
                          <h3>Rs.500/=</h3>
                      </div>
                      <div class="px-2 mt-3"> <button class="btn btn-primary px-3 butn-color">View Ad</button> </div>
                  </div>
              </div>
                </div>
              </div>
             
              
						</div>
					</main>
      </div>
      <Footer />
    </div>
  );
}

export default petmart;
