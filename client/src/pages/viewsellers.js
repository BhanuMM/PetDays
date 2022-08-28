import React from 'react'
import "../styles/viewusers.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function viewsellers() {
  return (
    <div class="container-fluid viewuser">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-0 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
				<div class="col-10 user-table mt-5">
					<div class="col-md-10 col-md-offset-1">
						<br />
						<h1 class="mt-4">User Management | Service providers</h1>
						<hr />
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="#" className="header-topic">
										Admin Dashboard / User Management / Service providers
									</a>
								</li>
							</ol>
						</nav>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
										<div class="col col-xs-6 text-right">
										<a href="\addseller" className="text-decoration-none"><button
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
                                                <th class="hidden-xs text-center">Address</th>
                                                <th class="hidden-xs text-center">Telephone Number</th>
												<th class="hidden-xs text-center">
													<em class="fa fa-cog"></em>
												</th>
											</tr>
										</thead>
										<tbody id="myTable">
											<tr>
												<td class="hidden-xs">1</td>
												<td>danny</td>
												<td>danny@gmail.com</td>
                                                <td>No 200, jayathissa mawatha</td>
                                                <td>0112254985</td>
                                                

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
												<td>jane</td>
												<td>janeloaf@gmail.com</td>
                                                <td>queens street, colombo 5</td>
                                                <td>0113636525</td>
                                                

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
												<td>gally</td>
												<td>gallyday@gmail.com</td>
                                                <td>sapumal road, colombo 5</td>
                                                <td>0774466985</td>
                                                

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
												<td>denny</td>
												<td>dennypontin@gmail.com</td>
                                                <td>york street</td>
                                                <td>0708896436</td>
                                                

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
  )
}

export default viewsellers
