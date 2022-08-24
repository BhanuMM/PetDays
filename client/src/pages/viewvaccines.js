import React from 'react'
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
						+Manage Medications <hr />
					</h3>
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="#" className="header-topic">
									Admin Dashboard / Medicines
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
												<th class="hidden-xs text-center">Med ID</th>
												<th class="hidden-xs text-center">Medicine Name</th>
												<th class="hidden-xs text-center">Discription</th>
												<th class="hidden-xs text-center">
													<em class="fa fa-cog"></em>
												</th>
											</tr>
										</thead>
										<tbody id="myTable">
											<tr>
												<td class="hidden-xs">1</td>
												<td>myMp3</td>
												<td>amart</td>
												<td align="center">
													<a class="btn btn-danger">
														<em class="fa fa-trash"></em>
													</a>
												</td>
											</tr>
											<tr>
												<td class="hidden-xs">2</td>
												<td>myMp3</td>
												<td>amart</td>
												<td align="center">
													<a class="btn btn-danger">
														<em class="fa fa-trash"></em>
													</a>
												</td>
											</tr>
											<tr>
												<td class="hidden-xs">3</td>
												<td>myMp3</td>
												<td>amart</td>
												<td align="center">
													<a class="btn btn-danger">
														<em class="fa fa-trash"></em>
													</a>
												</td>
											</tr>
											<tr>
												<td class="hidden-xs">4</td>
												<td>myMp3</td>
												<td>amart</td>
												<td align="center">
													<a class="btn btn-danger">
														<em class="fa fa-trash"></em>
													</a>
												</td>
											</tr>
											<tr>
												<td class="hidden-xs">5</td>
												<td>myMp3</td>
												<td>amart</td>
												<td align="center">
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

export default viewvaccines
