import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import "../styles/viewpets.css";
function viewbreeds() {
	return (
        <div class="container-fluid viewuser">
            <div className="row">
                <Navbar />
            </div>
            <div className="row flex-nowrap pt-5 mt-5">
                <div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
                    <Sidebar />
                </div>
                <div class="col-10 user-table">
                    <div class="col-md-10 col-md-offset-1"><br/>
                    <h1 class="mt-4">Breeds | Dogs</h1><hr/>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">
                                            <a href="#" className="header-topic">Admin Dashboard /  viewbreeds /dogs</a>
                                        </li>
                                    </ol>
                                </nav>
                        <div class="panel panel-default panel-table">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col col-xs-6">
                                    
                                    <div class="col col-xs-6 text-right">
                                        <a href="\adddogbreed" className="text-decoration-none"><button
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
                                            <th class="hidden-xs text-center">Cat ID</th>
												<th class="hidden-xs text-center">Breed ID</th>
												<th class="hidden-xs text-center">Breed Name</th>
												<th class="hidden-xs text-center">Discription</th>
												<th class="hidden-xs text-center">
												<em class="fa fa-cog"></em>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody id="myTable">
                                        <tr>
                                            <td class="hidden-xs">1</td>
                                            <td>E-1</td>
                                            <td>golden retriever</td>
											<td>stands among America's most popular dog breeds.</td>
                                            
                                            
                                            
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
                                            <td>E-2</td>
                                            <td>labrador retrievert</td>
											<td>As always, the Labrador Retriever tops the list — this time for the 31st year! </td>
                                            
                                            
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
                                            <td>E-3</td>
                                            <td>french bulldog</td>
											<td>It is characterised by a gentle and affectionate nature and a striking golden coat. </td>
                                            
                                            
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
                                            <td>E-4</td>
                                            <td>beagle</td>
											<td> It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.</td>
                                            
                                            
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
                                            <td>E-5</td>
                                            <td>german shepherd dog</td>
											<td>Friendly, Intelligent, Reliable, Kind, Trustworthy, Confident</td>
                                            
                                            
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

export default viewbreeds;
