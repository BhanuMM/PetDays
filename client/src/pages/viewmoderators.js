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
			<div className="row flex-nowrap pt-5 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
				<div class="col-10 user-table mt-5">
					<div class="col-md-10 col-md-offset-1">
						<br />
						<h1 class="mt-4">User Management | Moderators</h1>
						<hr />
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="#" className="header-topic">
										Admin Dashboard / User Management / Moderators
									</a>
								</li>
							</ol>
						</nav>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
										<div class="col col-xs-6 text-right">
										<a href="\addmoderator" className="text-decoration-none"><button
                                            type="button"
                                            class="btn btn-sm btn-primary btn-create"
                                        >
                                            Add New
                                        </button></a>
										</div>
										<br />
									</div>
								</div>
								<div class="panel-body table-responsive">
									<table class="table table-striped table-bordered table-list responsive">
										<thead>
											<tr>
												<th class="hidden-xs text-center">User ID</th>
												<th class="hidden-xs text-center">User Name</th>
												<th class="hidden-xs text-center">Email</th>
												<th class="hidden-xs text-center">
													<em class="fa fa-cog"></em>
												</th>
											</tr>
										</thead>
										<tbody id="myTable">
											<tr>
												<td class="hidden-xs">1</td>
												<td>john</td>
												<td>johnkey@gmail.com</td>

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
												<td>sandy</td>
												<td>sandymartin@gmail.com</td>

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
												<td>rockey</td>
												<td>rockeykale@gmail.com</td>

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
												<td>menny</td>
												<td>menny123@gmail.com</td>

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
												<td>lilly</td>
												<td>lillyfernando@gmail.com</td>

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
