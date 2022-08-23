import React from "react";
import "../styles/serviceproviderdashboard.css";
import Navbar from "../components/navbarspecial";
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
						<hr />
					</div>
					<table id="farmer-card-stats">
						<tbody>
							<tr>
								<td class="stats-desc">Orders completed</td>
								<td class="stat">50</td>
							</tr>
							<tr>
								<td class="stats-desc">Orders completed</td>
								<td class="stat">231</td>
							</tr>
							<tr>
								<td class="stats-desc">Orders completed</td>
								<td class="stat">12</td>
							</tr>
							<tr>
								<td class="stats-desc rating">Rating</td>
								<td class="stat"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="card-line">
					<nav class="navbar bg-light">
						<div class="container-fluid">
							<span class="navbar-brand mb-0 h1">Navbar</span>
						</div>
					</nav>
					<a href="">
						<div class="dash-card">
							<img src="" alt="" />
						</div>
					</a>
					<div class="dash-card">
						<img src="" alt="" />
					</div>
					<div class="dash-card">
						<img src="" alt="" />
					</div>
				</div>
				<div class="card-line">
					<div class="dash-card">
						<img src="" alt="" />
					</div>
					<div class="dash-card">
						<img src="" alt="" />
					</div>
					<div class="dash-card">
						<img src="" alt="" />
					</div>
				</div>
				<div class="profile-userbuttons">
					<a href="#" role="button" aria-pressed="true">  <button type="submit" class="btn-res-add">Add new</button></a>
                    <a href="#" role="button" aria-pressed="true"> <button type="submit" class="btn-res-edit">Edit</button></a>
                    <a href="#" role="button" aria-pressed="true"> <button type="submit" class="btn-res-delete">Delete</button></a>
				</div>
			</div>
		</div>
	);
}

export default serviceproviderdashboard;
