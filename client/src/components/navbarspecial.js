import React from "react";
import "../styles/navspecial.css";
function navbarspecial() {
	return (
		<nav className="navbar navbar-expand-lg py-3 px-4 auto-hiding-navbar fixed-top mybar">
			<div className="container-fluid">
				<img src="../images/PetDays.png" className="navbarlogo" alt="dog" />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div class="dropdown dashboard-dropdown">
						<a
							href="#"
							class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
							id="dropdownUser1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="https://github.com/mdo.png"
								alt="hugenerd"
								width="60"
								height="60"
								class="rounded-circle"
							/>
							<span class="d-none d-sm-inline names mx-1 fs-6">Thomas</span>
						</a>
						<ul class="dropdown-menu dropdown-menu-dark text-small shadow collapsebar ">
							<li>
								<a class="dropdown-item" href="#">
									My Profile
								</a>
							</li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li>
								<a class="dropdown-item" href="index">
									Sign out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default navbarspecial;
