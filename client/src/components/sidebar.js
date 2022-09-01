import "../styles/sidebar.css";
import React from "react";

function sidebar() {
	return (
		<div class="wrapper d-flex">
			<div class="sidebar">
				<ul>
					<li>
						<a href="#">
							<i class="fas fa-home"></i>Dashboard
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fas fa-users"></i>Team
						</a>
					</li>
					<li class="notification1">
						<a href="#">
							<i class="fas fa-calendar-week"></i>Calender
						</a>
						<span class="number1">4</span>
					</li>
					<li class="notification2">
						<a href="#">
							<i class="far fa-envelope"></i>Documents
						</a>
						<span class="number2">5</span>
					</li>
					<li>
						<a href="#">
							<i class="fas fa-signal"></i>Reports
						</a>
					</li>
				</ul>
				<p class="myproject px-3">PROJECTS</p>
				<ul>
					<li>
						<a href="#">Website redesign</a>
					</li>
					<li>
						<a href="#">GraphQL API</a>
					</li>
					<li>
						<a href="#">Customer migration guides</a>
					</li>
					<li>
						<a href="#">Profit sharing program</a>
					</li>
				</ul>

                <ul class="list-unstyled components">
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Page</a></li>
                    </ul>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li></li>
            </ul>
			</div>
		</div>
	);
}

export default sidebar;
