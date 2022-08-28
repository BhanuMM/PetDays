import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function viewvaccines() {
	return (
		<div class="container-fluid viewuser">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-5 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-5">
					<Sidebar />
				</div>
				<div class="col-10 user-table">
					<h3 className=" mt-5">
						{" "}
						Manage Vaccines <hr />
					</h3>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#" className="header-topic">
									Admin Dashboard / Medication / Vaccines
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
                                            <th class="hidden-xs text-center">Vaccine ID</th>
                                            <th  class="hidden-xs text-center">Vaccine Name</th>
                                            <th  class="hidden-xs text-center">Description</th>
                                            <th  class="hidden-xs text-center">Next Iteration</th>
                                        </tr>
                                    </thead>
                                    <tbody id="myTable">
                                        <tr>
                                            <td class="hidden-xs">1</td>
                                            <td>Rabies</td>
                                            <td>Rabies is required once at 16 weeks of age in puppies, then given again 1 year later (1 year, 4 months of age)</td>
                                            <td>Every 3 year</td>
                                            
                                        </tr>
                                        <tr>
                                            <td class="hidden-xs">2</td>
                                            <td>Distemper</td>
                                            <td>Distemper is a viral disease that is often fatal, affecting the respiratory </td>
                                            <td>Every 2 years</td>
                                        </tr>
                                        <tr>
                                            <td class="hidden-xs">3</td>
                                            <td>Hepatitis/Adenovirus</td>
                                            <td>A vaccination against adenovirus type 2 protects against both adenovirus types 1 and 2.</td>
                                            <td>Twice a year</td>
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

export default viewvaccines;
