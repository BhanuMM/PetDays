import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function viewdietplans() {
	return (
		<div class="container-fluid viewuser">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-5 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-5">
					<Sidebar />
				</div>
				<div class="col-10 user-table pt-5">
					<h3 className=" mt-5">
						{" "}
						Diet Plans | Dogs <hr />
					</h3>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#" className="header-topic">
									Admin Dashboard / Dietplans / View diet plans
								</a>
							</li>
						</ol>
					</nav>
					<div class="col-md-10 col-md-offset-1">
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6"></div>
								</div>
								<div class="panel-body table-responsive">
									<table class="table table-striped table-bordered table-list responsive">
										<thead>
											<tr>
												<th class="hidden-xs text-center">Diet Plan ID</th>
												<th class="hidden-xs text-center">Diet Plan Name</th>
												<th class="hidden-xs text-center">Description</th>
												<th class="hidden-xs text-center">Breed</th>
												<th class="hidden-xs text-center">Age Range</th>
												<th class="hidden-xs text-center">Weight Range</th>
											</tr>
										</thead>
										<tbody id="myTable">
											<tr>
												<td class="hidden-xs">1</td>
												<td>Fruits and Veggies</td>
												<td>
													While we already shared the top food-inspired
													<br /> dog names of the year, here are some other{" "}
													<br />
													popular{" "}
												</td>
												<td>Poodle</td>
												<td>05-15</td>
												<td>10-25</td>
											</tr>
											<tr>
												<td class="hidden-xs">2</td>
												<td>Berries</td>
												<td>
													There are so many kinds of berries <br />
													around the world, and many of them are
													<br /> ripe for dog name inspiration.
												</td>
												<td>German shepherd dog</td>
												<td>10-15</td>
												<td>20-25</td>
											</tr>
											<tr>
												<td class="hidden-xs">3</td>
												<td>Cookies and Chocos</td>
												<td>
													Most of the dogs are like to eat these kind
													<br /> of foods while walking.
												</td>
												<td>Bulldog</td>
												<td>05-15</td>
												<td>15-50</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default viewdietplans;
