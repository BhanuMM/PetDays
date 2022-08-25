import React from "react";
import "../styles/dashnavbar.css";
function dashnavbar() {
	return (
		<nav className="navbar navbar-expand-lg py-3 px-4 auto-hiding-navbar fixed-top mybar mb-5">
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
								src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
								alt="hugenerd"
								width="40"
								height="40"
								class="rounded-circle pr-3"
							/>
							<span class="d-none d-sm-inline names mx-1 fs-6 ml-3">Sanduni</span>
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

export default dashnavbar;
