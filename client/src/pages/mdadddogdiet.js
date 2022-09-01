import React from "react";
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
	>
	  •
	</Box>
);

function addpetcategories() {
    return (
        <div class="container-fluid">
            <div className="row">
                <Navbar />
            </div>
            <div className="row pt-0 mt-5">
                <div className="row flex-nowrap pt-0">
                    <div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
                        <Sidebar />
                    </div>
                    <div className="col-7 g-5">
                    <h1 class="mt-4">Add Diet Plans for Dogs</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Moderator Dashboard / Diet Plans / Add Diet Plans for Dogs </a>
										</li>
									</ol>
								</nav><br/>

                        <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:670, padding: 10, paddingLeft:75}}>
                        <CardContent>
                        <form><br/><br/>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField id="vit-name" label="Name of the diet" /><br/>
                                <TextField id="vit-desc" label=" Breed / Category" type="Dropdown"/><br/>
                                <TextField id="vit-name" label="Description about the Diet Plan" /><br/>
                                <TextField id="vit-name" label="Age Range of the Dog" /><br/>
                                <TextField id="vit-name" label="Weight Range of the Dog" /><br/>
                                <TextField id="vit-name" label="Add items" /><br/>
                        </Box>

                            {/* <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Name of the diet
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Breed / Category
                                </label><br/>
                                <select id="cars" name="cars">
                                    <option value="volvo">Golden retriever</option>
                                    <option value="saab">Labrador retriever</option>
                                    <option value="fiat">French bulldog</option>
                                    <option value="audi">Beagle</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Description about the Diet Plan
                                </label>
                                <textarea class="form-control"  id="floatingTextarea2"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Age Range of the Dog
                                </label><br/>
                                <select id="cars" name="cars">
                                    <option value="volvo">0-10</option>
                                    <option value="saab">10-20</option>
                                    <option value="fiat">20 or above</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Weight Range of the Dog
                                </label><br/>
                                <select id="cars" name="cars">
                                    <option value="volvo">0-10 Kg</option>
                                    <option value="saab">10-20 Kg</option>
                                    <option value="saab">20-30 Kg</option>
                                    <option value="saab">30-40 Kg</option>
                                    <option value="saab">40-50 Kg</option>
                                    <option value="fiat">50 or above</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Add items
                                </label>
                                <textarea class="form-control"  id="floatingTextarea2"></textarea>
                            </div> */}
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mb-5 mt-5">
                                    {" "}
                                    <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                        Add Diet Plan
                                    </Button>
                                </div>
                                
                            </div>
                        </form>

                    </CardContent>
                    </Card>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    );
}

export default addpetcategories;