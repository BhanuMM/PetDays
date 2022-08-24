import React from "react";
import "../styles/viewusers.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function viewmoderators() {
	return (
		<div class="container-fluid viewuser">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-0 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
				<div class="col-10 user-table">
					<div class="col-md-10 col-md-offset-1"><br/>
                    <h1 class="mt-4">Medications | Vaccines</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Medications / Vaccines </a>
										</li>
									</ol>
								</nav>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
                                    
									<div class="col col-xs-6 text-right">
									<a href="\mdaddvacc" className="header-topic"><button
											type="button"
											class="btn btn-sm btn-primary btn-create"
										>
											Add New
										</button></a>
									</div><br/>
								</div>
							</div>
							<div class="panel-body table-responsive">
								<table class="table table-striped table-bordered table-list responsive">
									<thead>
										<tr>
											<th class="hidden-xs text-center">Vaccine ID</th>
											<th  class="hidden-xs text-center">Vaccine Name</th>
											<th  class="hidden-xs text-center">Description</th>
											<th  class="hidden-xs text-center">Next Iteration</th>
											<th  class="hidden-xs text-center">
												<em class="fa fa-cog"></em>
											</th>
										</tr>
									</thead>
									<tbody id="myTable">
										<tr>
											<td class="hidden-xs">1</td>
											<td>Rabies</td>
											<td>Rabies is required once at 16 weeks of age in puppies, then given again 1 year later (1 year, 4 months of age)</td>
											<td>Every 3 year</td>
											
											
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
										</tr>
										<tr>
											<td class="hidden-xs">2</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
										</tr>
										<tr>
											<td class="hidden-xs">3</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
										</tr>
										<tr>
											<td class="hidden-xs">4</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
										</tr>
										<tr>
											<td class="hidden-xs">5</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
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

export default viewmoderators;
