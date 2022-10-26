import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from "@mui/material/Button";
import Moderatorsidebar from "../components/moderatorsidebar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function mddogdiet() {
	// const [searchTerm, setSearchTerm] = useState([]);
	const [filterItems, setFilterItems] = useState([]);
	const [listOfDietplans, setListOfDietplans] = useState([]);
	const [listOfCatagories, setListOfCatagories] = useState([]);
	const [listOfBreeds, setListOfBreeds] = useState([]);
	// const [catName, setCatName] = useState('All');
	// const [breedName, setBreedName] = useState('All');
	var catName = "All";
	var breedName = "All";

	// let history = useHistory();

	useEffect(() => {
		axios.get("http://localhost:3001/mod/getdietplans").then((response) => {
			setListOfDietplans(response.data);
			setFilterItems(response.data);
		});
		axios
			.get("http://localhost:3001/admin/getpetcategories")
			.then((response) => {
				setListOfCatagories(response.data);
			});
	}, []);

	//   Search Diet Plan by Name function
	const searchResult = (searchName) => {
		const result = listOfDietplans.filter((val) => {
			if (searchName == "") {
				return val;
			} else if (
				val.planName.toLowerCase().includes(searchName.toLowerCase())
			) {
				return val;
			}
		});
		setFilterItems(result);
	};
	// //   Diet plan Filters pet categpry
	//   const filterResult = (catName) =>{
	// 	if (catName == "All"){
	// 		setFilterItems(listOfDietplans);
	// 	}
	// 	else{
	// 		const result = filterItems.filter((val) =>{
	// 			return val.Breed.Petcatagory.pcatName === catName;

	// 		} );
	// 		setFilterItems(result);
	// 	}

	//   }

	//   //   Diet plan Filters pet breed
	//   const filterResult2 = (breedName) =>{
	// 	if (breedName == "All"){
	// 		setFilterItems(listOfDietplans);
	// 	}
	// 	else{
	// 		const result = filterItems.filter((val) =>{
	// 			return val.Breed.breedName === breedName;
	// 		} );
	// 		if(result == ""){
	// 			setFilterItems(listOfDietplans);
	// 		}
	// 		else{
	// 			setFilterItems(result);
	// 		}

	// 	}


  return (
    <div>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <div className="">
          <Moderatorsidebar />
        </div>
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Diet Plans</h1>
                    <hr />
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a
                            href="/moderatordashboard"
                            className="header-topic"
                          >
                            Moderator Dashboard/
                          </a>
                          <a href="/mddogdiet" className="header-topic">
                            Diet Plans
                          </a>
                        </li>
                      </ol>
                    </nav>

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div class="row g-6 mb-6">
                <div style={{ paddingLeft: 20 }}>
                  <div class="col col-xs-6 text-right">
                    <a href="\mdadddogdiet" className="header-topic">
                      <Button
                        variant="contained"
                        component="label"
                        style={{ backgroundColor: "#F66B0E" }}
                      >
                        Add Diet Plan
                      </Button>
                    </a>
                    <br />
                    <br />
                    <div  style={{ display:"flex" }}>
                    <p class="fw-semibold " style={{ paddingRight: 40, paddingTop:10 }}>
                      Filtery by :
                    </p>
                    <div class="search-line" style={{ display: "flex", width:200 }}>
                      <p class="fw-semibold ">
                        <select
                          id="select"
                          class="btn btn-dark dropdown-toggle"
                          style={{ paddingRight: 40 , marginRight : 20}}
                          onChange={(event) => {
                            
                              document.getElementById("select1").value = 'All';
                            
                            axios.get("http://localhost:3001/admin/getpetbreeds/"+ event.target.value).then((response) => {
                              setListOfBreeds(response.data);
                            });
                            filterResult(event.target.value,document.getElementById("select1").value);
                          }}
                        >
                          <option value="All">All</option>
                          {/* <option value="Dog">Dog</option>
                          <option value="Cat">Cat</option> */}
                          {listOfCatagories.map((value, key) =>  {
                            return(
                              <option value={value.pcatID}>{value.pcatName}</option>
                            );
                            
                          })
                          }
                        
                        </select>
                      </p>

					  <p class="fw-semibold ">
                        <select
                          id="select1"
                          class="btn btn-dark dropdown-toggle"
                          style={{ paddingRight: 40 , marginRight : 20 }}
                          onChange={(event) => {
                            filterResult(document.getElementById("select").value,event.target.value);
                          }}
                        >
                          <option value="All">All Breeds</option>
                          {listOfBreeds.map((value, key) =>  {
                            return(
                              <option value={value.breedName}>{value.breedName}</option>
                            );
                            
                          })
                          }
                        
                        </select>
                      </p>
                      <div
										style={{ width: 575, float: "right" ,display:"flex",paddingTop:10,paddingLeft:100}}
									>
                      <p
											class="fw-semibold "
											style={{ paddingRight: 10, paddingTop: 10,width:300}}
										>
											Search Diet Plans
										</p>
                      <div style={{ width: 430 }}>
                        <input
                          type="search"
                          class="form-control rounded input-group"
                          placeholder="Search Diet Plans"
                          aria-label="Search"
                          aria-describedby="search-addon"
                          style={{ height: 40,width:300 }}
                              onChange = {(event) => {
                              searchResult(event.target.value);
                              }}
                        />
                        
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />

									<div class="card shadow border-0 mb-7">
										<div class="card-header">
											<h5 class="mb-0">Available Diet Plans</h5>
										</div>
										<div class="table-responsive">
											<table class="table table-hover table-nowrap text-center">
												<thead class="thead-light">
													<tr>
														<th scope="col">
															<b>
																<strong>Diet Plan ID</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Pet Category</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Diet Plan Name</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Description</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Breed</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Age Range</strong>
															</b>
														</th>
														<th scope="col">
															<b>
																<strong>Weight Range</strong>
															</b>
														</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{filterItems.map((value, key) => {
														return (
															<tr>
																<td>{value.dietplanID}</td>
																<td>{value.Breed.Petcatagory.pcatName}</td>
																<td>{value.planName}</td>
																<td>{value.planDescr}</td>
																<td>{value.Breed.breedName}</td>
																<td>
																	{value.ageRangeFrom} -{value.ageRangeTo} Yrs
																</td>
																<td>
																	{value.weightRangeFrom} -{value.weightRangeTo}{" "}
																	kg
																</td>
																<td class="text-end">
																	<div style={{ display: "flex" }}>
																		<div style={{ paddingRight: 5 }}>
																			<button
																				type="button"
																				class="btn btn-sm btn-square btn-neutral text-danger-hover"
																				onClick={() => {
																					navigate("/mdeditdiet", {
																						state: value.dietplanID,
																					});
																				}}
																			>
																				<em class="fa fa-pencil"></em>
																			</button>
																		</div>
																		<div>
																			<button
																				type="button"
																				class="btn btn-sm btn-square btn-neutral text-danger-hover"
																				onClick={() => {
																					Swal.fire({
																						title: "Are you sure?",
																						text:
																							"You won't be able to revert this!",
																						icon: "warning",
																						showCancelButton: true,
																						confirmButtonColor: "#3085d6",
																						cancelButtonColor: "#d33",
																						confirmButtonText:
																							"Yes, delete it!",
																					}).then((result) => {
																						if (result.isConfirmed) {
																							axios
																								.delete(
																									"http://localhost:3001/mod/deletediet/" +
																										value.dietplanID
																								)
																								.then((response) => {
																									if (response.data.error) {
																										alert(response.data.error);
																									} else {
																										axios
																											.get(
																												"http://localhost:3001/mod/getdietplans"
																											)
																											.then((response) => {
																												setListOfDietplans(
																													response.data
																												);
																											});
																									}
																								});
																							Swal.fire(
																								"Deleted!",
																								"Medicine has been deleted.",
																								"success"
																							);
																						}
																					});
																				}}
																			>
																				<i class="bi bi-trash"></i>
																			</button>
																		</div>
																	</div>
																</td>
															</tr>
														);
													})}
												</tbody>
											</table>
										</div>
										<div class="card-footer border-0 py-5">
											<span class="text-muted text-sm"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default mddogdiet;
