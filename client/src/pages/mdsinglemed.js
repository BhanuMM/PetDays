import React from "react";
import "../styles/viewusers.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
	>
	  •
	</Box>
  );



function viewmoderators() {
	return (
		<div class="container-fluid viewuser">
			<div className="row"><br/><br/>
				<Navbar />
			</div>
			<div className="row flex-nowrap pt-0 mt-5">
				<div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
					<Sidebar />
				</div>
				<div class="col-10 user-table">
					<div class="col-md-10 col-md-offset-1"><br/>
                    <h1 class="mt-4">Medications | Medicines</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Medications / Medicines</a>
										</li>
									</ol>
								</nav>
								<br/>

				<Card sx={{ minWidth: 275, maxWidth: 1100, marginLeft: 15}} style={{height:450, padding: 10}}>
                <CardContent>
						<div class="panel panel-default panel-table">
							<div class="panel-heading">
								<div class="row">
									<div class="col col-xs-6">
                                    
									<div class="col col-xs-6 text-right">
									<a href="\mdaddmed" className="header-topic">
										<button
											type="button"
											class="btn btn-sm btn-primary btn-create"
										>
											Add New Medicine
										</button></a>
									</div><br/>
								</div>
							</div>
							<div class="panel-body table-responsive">
								<table class="table table-striped table-bordered table-list responsive">
									<thead>
										<tr>
											<th class="hidden-xs text-center">Medicine ID</th>
											<th  class="hidden-xs text-center">Medicine Name</th>
											<th  class="hidden-xs text-center">Description</th>
											<th  class="hidden-xs text-center">
												<em class="fa fa-cog"></em>
											</th>
										</tr>
									</thead>
									<tbody id="myTable">
										<tr>
											<td class="hidden-xs">1</td>
											<td>Marbofloxacin</td>
											<td>Antibiotic</td>
											
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
											<td>Maropitant</td>
											<td>Antiemetic</td>
											
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
											<td>Mavacoxib</td>
											<td>Nonsteroidal anti-inflammatory drug (NSAID)</td>
											
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
											<td>Medetomidine</td>
											<td>Surgical anesthetic and analgesic.</td>
											
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
											<td>Meloxicam</td>
											<td>Nonsteroidal anti-inflammatory drug (NSAID)</td>
											
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
					</CardContent>
                  
                </Card>
				</div>
			</div>
		</div>
        </div>
	);
}

export default viewmoderators;
