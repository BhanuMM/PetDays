import React from "react";
import "../styles/serviceproviderdashboard.css";
import Navbar from "../components/navbarspecial";
import add1 from "../images/add1.jpg";
import add2 from "../images/add2.jpg";
import add3 from "../images/add3.jpg";
import add4 from "../images/add4.jpg";
import add5 from "../images/add5.jpg";
import add6 from "../images/add1.jpg";
function serviceproviderdashboard() {
	return (
		<div className="container-fluid">
			<div className="row">
				<Navbar />
			</div>
			<div className="pt-5" id="dashboard">
				<div id="profile-info-card">
					<div class="profile-upper">
						<div class="profile-pic">
							<img
								src="https://github.com/mdo.png"
								alt="hugenerd"
								class="rounded-circle"
							/>
						</div>
						<h2>Thomas dav</h2>
						<small>
							<cite title="San Francisco, USA">
								San Francisco, USA{" "}
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</cite>
						</small>
						<p>
							<div className="">
								<i class="fa fa-envelope " aria-hidden="true"></i>
								<h7>email@example.com</h7>
							</div>
							<div>
								<i class="fa fa-globe" aria-hidden="true"></i>
								<a href="http://www.jquery2dotnet.com">
									<h7>www.jquery2dotnet.com</h7>
								</a>
							</div>
							<div>
								<i class="fa fa-gift" aria-hidden="true"></i>
								<h8>June 02, 1988</h8>
							</div>
						</p>
					</div>
					<hr />
					<table id="farmer-card-stats">
						<tbody>
							<tr>
								<td class="stats-desc">Total Number of adds</td>
								<td class="stat">50</td>
								<td class="stat">
									<a href="#" role="button" aria-pressed="true">
										{" "}
										<button type="submit" class="btn-res-delete">
											VIEW
										</button>
									</a>
								</td>
							</tr>
							<tr>
								<td class="stats-desc">Pending adds</td>
								<td class="stat">231</td>
								<td class="stat">
									<a href="#" role="button" aria-pressed="true">
										{" "}
										<button type="submit" class="btn-res-delete">
											VIEW
										</button>
									</a>
								</td>
							</tr>
							<tr>
								<td class="stats-desc">Cancelled adds</td>
								<td class="stat">12</td>
								<td class="stat">
									<a href="#" role="button" aria-pressed="true">
										{" "}
										<button type="submit" class="btn-res-delete">
											VIEW
										</button>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="card-line">
					<nav class="navbar bg-light">
						<div class="container-fluid">
							<span class="navbar-brand mb-1 h1 ">MY ADVERTISEMENTS</span>
						</div>
					</nav>
					<div className="bread-edit">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="#">Home</a>
								</li>
								<li class="breadcrumb-item">
									<a href="#">Library</a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Data
								</li>
							</ol>
						</nav>
					</div>
					<div class="profile-userbuttons">
						<a href="\addservices" role="button" aria-pressed="true">
							{" "}
							<button type="submit" class="btn-res-add">
								Add
							</button>
						</a>
						<a href="#" role="button" aria-pressed="true">
							{" "}
							<button type="submit" class="btn-res-edit">
								Edit
							</button>
						</a>
						<a href="#" role="button" aria-pressed="true">
							{" "}
							<button type="submit" class="btn-res-delete">
								Delete
							</button>
						</a>
					</div>
					<a href="">
						<div class="dash-card">
							<div class="text-center">
								<img class="image-fluid" src={add1} alt="" />
							</div>
						</div>
					</a>
					<div class="dash-card">
						<img class="image-fluid" src={add2} alt="" />
					</div>
					<div class="dash-card">
						<img class="image-fluid" src={add3} alt="" />
					</div>
				</div>
				<div class="card-line">
					<div class="dash-card">
						<img class="image-fluid" src={add4} alt="" />
					</div>
					<div class="dash-card">
						<img class="image-fluid" src={add5} alt="" />
					</div>
					<div class="dash-card">
						<img class="image-fluid" src={add6} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default serviceproviderdashboard;
