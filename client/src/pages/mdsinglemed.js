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
							{/* <div class="panel-body table-responsive">
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
							</div> */}

<div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            <div class="card shadow border-0 mb-7">
                               
                                <div class="table-responsive">
                                    <table class="table table-hover table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Offer</th>
                                                <th scope="col">Meeting</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Robert Fox
                                                    </a>
                                                </td>
                                                <td>Feb 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Dribbble
                                                    </a>
                                                </td>
                                                <td>$3.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Darlene Robertson
                                                    </a>
                                                </td>
                                                <td>Apr 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        {" "}
                                                        Netguru{" "}
                                                    </a>
                                                </td>
                                                <td>$2.750</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-warning"></i>Postponed
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Theresa Webb
                                                    </a>
                                                </td>
                                                <td>Mar 20, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        {" "}
                                                        Figma{" "}
                                                    </a>
                                                </td>
                                                <td>$4.200</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Kristin Watson
                                                    </a>
                                                </td>
                                                <td>Feb 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Mailchimp
                                                    </a>
                                                </td>
                                                <td>$3.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-dark"></i>Not discussed
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Cody Fisher
                                                    </a>
                                                </td>
                                                <td>Apr 10, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Webpixels
                                                    </a>
                                                </td>
                                                <td>$1.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-danger"></i>Canceled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Robert Fox
                                                    </a>
                                                </td>
                                                <td>Feb 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Dribbble
                                                    </a>
                                                </td>
                                                <td>$3.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Darlene Robertson
                                                    </a>
                                                </td>
                                                <td>Apr 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        {" "}
                                                        Netguru{" "}
                                                    </a>
                                                </td>
                                                <td>$2.750</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-warning"></i>Postponed
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Theresa Webb
                                                    </a>
                                                </td>
                                                <td>Mar 20, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        {" "}
                                                        Figma{" "}
                                                    </a>
                                                </td>
                                                <td>$4.200</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-success"></i>Scheduled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Kristin Watson
                                                    </a>
                                                </td>
                                                <td>Feb 15, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Mailchimp
                                                    </a>
                                                </td>
                                                <td>$3.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-dark"></i>Not discussed
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                                        class="avatar avatar-sm rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Cody Fisher
                                                    </a>
                                                </td>
                                                <td>Apr 10, 2021</td>
                                                <td>
                                                    <img
                                                        alt="..."
                                                        src="https://preview.webpixels.io/web/img/other/logos/logo-5.png"
                                                        class="avatar avatar-xs rounded-circle me-2"
                                                    />
                                                    <a class="text-heading font-semibold" href="#">
                                                        Webpixels
                                                    </a>
                                                </td>
                                                <td>$1.500</td>
                                                <td>
                                                    <span class="badge badge-lg badge-dot">
                                                        <i class="bg-danger"></i>Canceled
                                                    </span>
                                                </td>
                                                <td class="text-end">
                                                    <a href="#" class="btn btn-sm btn-neutral">
                                                        View
                                                    </a>
                                                    <button
                                                        type="button"
                                                        class="btn btn-sm btn-square btn-neutral text-danger-hover"
                                                    >
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="card-footer border-0 py-5">
                                    <span class="text-muted text-sm">
                                        Showing 10 items out of 250 results found
                                    </span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>


						{/* </div> */}
					{/* </div> */}
					</CardContent>
                  
                </Card>
				</div>
			</div>
		</div>
        </div>
	);
}

export default viewmoderators;
