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

        <div class="cards mb-5">
          <div class="card">
            <img class="card-image" src={A1} alt="" />
            <div class="card-content">
              <p>
                <p> 22 August 2022</p>
                <h4>DOG FRIENDS</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Gampaha,Sri Lanka
                </p>
                Dog Walking Service.
                <br />
                Keep your dog happy....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpetmartadd" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={A2} alt="" />
            <div class="card-content">
              <p>
                <p> 22 August 2022</p>
                <h4>WALK</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Jaffna,Sri
                  Lanka
                </p>
                Dog Walking Service.
                <br />
                Walk with us....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={A3} alt="" />
            <div class="card-content">
              <p>
                <p> 21 August 2022</p>
                <h4>COOL LOOK</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Colombo,Sri Lanka
                </p>
                Pet Grooming Service.
                <br />
                Keep your dog cool....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={A4} alt="" />
            <div class="card-content">
              <p>
                <p> 21 August 2022</p>
                <h4>FRESH PET</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Matara,Sri
                  Lanka
                </p>
                Dog Grooming Service.
                <br />
                Keep your pet fresh....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={G1} alt="" />
            <div class="card-content">
              <p>
                <p> 19 August 2022</p>
                <h4>COOL & FRESH</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Galle,Sri
                  Lanka
                </p>
                Dog Groooming Service.
                <br />
                Keep your dog Fresh....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={G2} alt="" />
            <div class="card-content">
              <p>
                <p> 16 August 2022</p>
                <h4>PET FRIENDS</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Colombo,Sri Lanka
                </p>
                Dog Grooming Service.
                <br />
                Keep your dog happy....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={G3} alt="" />
            <div class="card-content">
              <p>
                <p> 10 August 2022</p>
                <h4>CATTO</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Gampaha,Sri Lanka
                </p>
                Cat Grooming Service.
                <br />
                Keep your cat happy....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="card">
            <img class="card-image" src={G4} alt="" />
            <div class="card-content">
              <p>
                <p> 04 August 2022</p>
                <h4>DOG FRIENDS</h4>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> Kandy,Sri
                  Lanka
                </p>
                Dog Grooming Service.
                <br />
                Keep your dog happy....
              </p>
            </div>
            <div class="card-info">
              <div>
                <a href="\viewpets" class="card-link">
                  View More Details{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default petmart;
