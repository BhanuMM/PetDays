import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/petcategories.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import cat from "../images/cat-01.jpg";
import dog from "../images/animals-01.jpg";
function dietplans() {
	return (
		<div class="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="row pt-0 mt-5">
				<div className="row flex-nowrap pt-5">
					<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
						<Sidebar />
					</div>
					<div className="col-10">
						<h3 className=" mt-5">
							{" "}
							+ Manage Diet Plans <hr />
						</h3>
						<div class="cards">
							<div class="card">
								<img class="card-image" src={dog} alt="" />
								<div class="card-content">
									<p>
										<h4>DOGS</h4>
										Diet plans that are suitable for the growth of the pet
									</p>
								</div>
								<div class="card-info">
									<div>
										<a href="\viewdietplans" role="button" aria-pressed="true">
											{" "}
											<button type="submit" class="btn-res">
												View Plans
											</button>
										</a>
									</div>
								</div>
							</div>
							<div class="card">
								<img class="card-image" src={cat} alt="" />
								<div class="card-content">
									<p>
										<h4>CATS</h4>
										Diet plans that are suitable for the growth of the pet
									</p>
								</div>
								<div class="card-info">
									<div>
										<a
											href="\viewdietplanscats"
											role="button"
											aria-pressed="true"
										>
											{" "}
											<button type="submit" class="btn-res">
												View Plans
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default dietplans;
