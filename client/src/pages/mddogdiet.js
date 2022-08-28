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
                    <h1 class="mt-4">Diet Plans | Diet Plans for Dogs</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Diet Plans / Diet Plans for Dogs</a>
										</li>
									</ol>
								</nav>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
                                    
									<div class="col col-xs-6 text-right">
									<a href="\mdadddogdiet" className="header-topic">
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
											<td>Fruits and Veggies</td>
											<td>While we already shared the top food-inspired<br/> dog names of the year, here are some other <br/>popular </td>
                                            <td>Poodle</td>
											<td>05-15</td>
                                            <td>10-25</td>
											
											
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
											<td>Berries</td>
											<td>There are so many kinds of berries <br/>around the world, and many of them are<br/> ripe for dog name inspiration.</td>
                                            <td>German shepherd dog</td>
											<td>10-15</td>
                                            <td>20-25</td>
											
											
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
											<td>Cookies and Chocos</td>
											<td>Most of the dogs are like to eat these kind<br/> of foods while walking.</td>
                                            <td>Bulldog</td>
											<td>05-15</td>
                                            <td>15-50</td>
											
											
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
