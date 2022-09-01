import React from 'react'
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbarspecial";
import "../styles/viewpets.css";
function viewbreedscats() {
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
            <div class="col-md-10 col-md-offset-1"><br/>
            <h1 class="mt-4">Breeds | Cats</h1><hr/>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#" className="header-topic">Admin Dashboard /  viewbreeds /cats</a>
                                </li>
                            </ol>
                        </nav>
                <div class="panel panel-default panel-table">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col col-xs-6">
                            
                            <div class="col col-xs-6 text-right">
                            <a href="\addcatbreed" className="text-decoration-none"><button
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
                                        <th class="hidden-xs text-center">Description</th>
                                        <th class="hidden-xs text-center">
                                        <em class="fa fa-cog"></em>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="myTable">
                                <tr>
                                    <td class="hidden-xs">1</td>
                                    <td>C-1</td>
                                    <td>Maine Coon Cats</td>
                                    
                                    <td>The cat is a domestic species of small carnivorous mammal</td>
                                    
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
                                    <td>C-2</td>
                                    <td>Persian Cats</td>
                                    <td>It is the only domesticated species in the family Felidae and is often referred to as the domestic cat</td>
                                    
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
                                    <td>C-3</td>
                                    <td>British Shorthair</td>
                                    <td>Inconsistency in a breed classification and naming among registries</td>
                                    
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
                                    <td>C-4</td>
                                    <td>Ragdoll Cats</td>
                                    <td>The domestic short-haired and domestic long-haired cat types are not breeds</td>
                                    
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
                                    <td>C-5</td>
                                    <td>Exotic Shorthair Cats</td>
                                    <td>different breeds by different registries</td>
                                    
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

export default viewbreedscats
