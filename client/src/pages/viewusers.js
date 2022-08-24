import React from "react";
import "../styles/viewmoderators.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import cat from '../images/user1.jpg';
import dog from '../images/user2.jpg';
function viewmoderators() {
	return (
		<div class="container-fluid viewuser">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
        <div class="cards">
            <div class="card">
              <img class="card-image" src={dog} alt=""/>
              <div class="card-content">
                <p>
                  <h4>
                    Moderators
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                <a href="\viewmoderators" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Moderators</button></a>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={cat} alt=""/>
              <div class="card-content">
                <p>
                <h4>
                    Sevice providers
                  </h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div class="card-info">
                <div>
                  <a href="\viewmoderators" role="button" aria-pressed="true">  <button type="submit" class="btn-res">View Service Providers</button></a>
                </div>
              </div>
            </div>
          </div>
			</div>
		</div>
	);
}

export default viewmoderators;
