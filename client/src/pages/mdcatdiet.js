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
                    <h1 class="mt-4">Diet Plans | Diet Plans for Cats</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Diet Plans / Diet Plans for Cats</a>
										</li>
									</ol>
								</nav>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
                                    
									<div class="col col-xs-6 text-right">
									<a href="\mdaddcatdiet" className="header-topic">
										<button
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
											<th class="hidden-xs text-center">Diet Plan ID</th>
											<th  class="hidden-xs text-center">Diet Plan Name</th>
											<th  class="hidden-xs text-center">Description</th>
                                            <th  class="hidden-xs text-center">Breed</th>
                                            <th  class="hidden-xs text-center">Age Range</th>
                                            <th  class="hidden-xs text-center">Weight Range</th>
											<th  class="hidden-xs text-center">
												<em class="fa fa-cog"></em>
											</th>
										</tr>
									</thead>
									<tbody id="myTable">
									
										<tr>
											<td class="hidden-xs">1</td>
											<td>Diet Plan - 1</td>
											<td>For the first few days, feed your new cat the food </td>
                                            <td>Abyssinian Cat</td>
											<td>05-10</td>
                                            <td>02-15</td>
											
											
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
											<td>Diet Plan - 2</td>
											<td>Good for cats who are suffering with cancers</td>
                                            <td>Bengal Cat</td>
											<td>01-15</td>
                                            <td>00-10</td>
											
											
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
											<td>Diet Plan - 3</td>
											<td>ou will likely be provided with a small portion of food to <br/>take home with you</td>
                                            <td>Birman Cat Breed</td>
											<td>04-10</td>
                                            <td>00-10</td>
											
											
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
