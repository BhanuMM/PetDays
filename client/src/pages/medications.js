import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import cat from "../images/medicine 2-01.jpg";
import cattle from "../images/medicine 3-01.jpg";
import dog from "../images/medicine 4-01.jpg";
function medications() {
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
							+ Manage Medications <hr />
						</h3>
						<div class="cards">
							<div class="card">
								<img class="card-image" src={dog} alt="" />
								<div class="card-content">
									<p>
										<h4>Medicines</h4>
										Medicines that are registered by the Government medical
										authority
									</p>
								</div>
								<div class="card-info">
									<div>
										<a
											href="\viewmedications"
											role="button"
											aria-pressed="true"
										>
											{" "}
											<button type="submit" class="btn-res">
												View Details
											</button>
										</a>
									</div>
								</div>
							</div>
							<div class="card">
								<img class="card-image" src={cat} alt="" />
								<div class="card-content">
									<p>
										<h4>Vaccines</h4>
										Medicines that are registered by the Government medical
										authority
									</p>
								</div>
								<div class="card-info">
									<div>
										<a
											href="\viewvaccines"
											role="button"
											aria-pressed="true"
										>
											{" "}
											<button type="submit" class="btn-res">
												View Details
											</button>
										</a>
									</div>
								</div>
							</div>
							<div class="card">
								<img class="card-image" src={cattle} alt="" />
								<div class="card-content">
									<p>
										<h4>Vitamins</h4>
										Medicines that are registered by the Government medical
										authority
									</p>
								</div>
								<div class="card-info">
									<div>
										<a
											href="\viewvitamins"
											role="button"
											aria-pressed="true"
										>
											{" "}
											<button type="submit" class="btn-res">
												View Details
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

export default medications;
