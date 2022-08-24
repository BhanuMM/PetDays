import React from "react";
import "../styles/viewusers.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
function viewusers() {
	return (
		<div class="container-fluid ">
			<div className="row">
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
				<div class="col-10">
					<div class="col-md-10 col-md-offset-1">
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
										<h3 class="panel-title">Panel Heading</h3>
									</div>
									<div class="col col-xs-6 text-right">
										<button
											type="button"
											class="btn btn-sm btn-primary btn-create"
										>
											Create New
										</button>
									</div>
								</div>
							</div>
							<div class="panel-body table-responsive">
								<table class="table table-striped table-bordered table-list responsive">
									<thead>
										<tr>
											<th>
												<em class="fa fa-cog"></em>
											</th>
											<th class="hidden-xs">ID</th>
											<th>File Name</th>
											<th>Artist</th>
											<th>Composer</th>
											<th>Publisher</th>
											<th>Genre</th>
											<th>Bitrate</th>
										</tr>
									</thead>
									<tbody id="myTable">
										<tr>
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
											<td class="hidden-xs">1</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											<td>ampub</td>
											<td>amgen</td>
											<td>ambit</td>
										</tr>
										<tr>
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
											<td class="hidden-xs">2</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											<td>ampub</td>
											<td>amgen</td>
											<td>ambit</td>
										</tr>
										<tr>
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
											<td class="hidden-xs">3</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											<td>ampub</td>
											<td>amgen</td>
											<td>ambit</td>
										</tr>
										<tr>
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
											<td class="hidden-xs">4</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											<td>ampub</td>
											<td>amgen</td>
											<td>ambit</td>
										</tr>
										<tr>
											<td align="center">
												<a class="btn btn-default">
													<em class="fa fa-pencil"></em>
												</a>
												<a class="btn btn-danger">
													<em class="fa fa-trash"></em>
												</a>
											</td>
											<td class="hidden-xs">5</td>
											<td>myMp3</td>
											<td>amart</td>
											<td>am compo</td>
											<td>ampub</td>
											<td>amgen</td>
											<td>ambit</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default viewusers;
