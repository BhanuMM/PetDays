import React from "react";
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/dashboard.css";
import dog from "../images/PetDays.png";
import Button from '@mui/material/Button';
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Moderatorsidebar from "../components/moderatorsidebar";


import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const bull = (
    	<Box
    	  component="span"
    	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxHeight: '1000' }}
    	>
    	  •
    	</Box>
    );



function mdaddcatdiet() {
	const initialValues = {
		planName:"",
		planDescr:"", 
		ageRangeFrom:"",
		ageRangeTo:"", 
		weightRangeFrom:"",
		weightRangeTo:"",
		breedId:"",
		catId:"",
		
	  };
	
	//   const Schema = Yup.object().shape({
	// 	email: Yup.string().email("Not a proper email address"),
	// 	password: Yup.string()
	// 	  .min(5)
	// 	  .max(12)
	// 	  .required("This field is required")
	// 	  .matches(
	// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
	// 		"Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
	// 	  ),
	// 	confirmpassword: Yup.string().when("password", {
	// 	  is: (val) => (val && val.length > 0 ? true : false),
	// 	  then: Yup.string().oneOf(
	// 		[Yup.ref("password")],
	// 		"Passwords does not match"
	// 	  ),
	// 	}),
	//   });
	
	  const navigate = useNavigate();
	
	  const onSubmit = (data) => {
		axios.post("http://localhost:3001/mod/adddietplan", data).then((response) => {
		  if (response.data.error) {
			alert(response.data.error);
		  } else {
			navigate("/adddietplan");
		  }
		});
	  };
	return (
		<div class="container-fluid">
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
										<h1 class="h2 mb-0 ls-tight">Add Diet Plan for Cats</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/admindashboard">
														Moderator Dashboard /
													</a>
													<a href="/mdpostsection">
														 Diet Plans-Cats / 
													</a>
                                                    <a href="/mdpostsection">
														 Add Diet Plan
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
							<div style={{paddingLeft:20}}>
                            {/* <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:630, padding: 10, paddingLeft:75}}>
                        <CardContent> */}
							<Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                       
                      >
                        <Form><br/><br/>

                       {/* <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            > */}
                                {/* <TextField id="diet-name" label="Name of the diet" /><br/>
                                <TextField id="diet-desc" label=" Breed / Category" type="Dropdown"/><br/>
                                <TextField id="diet-name" label="Description about the Diet Plan" /><br/>
                                <TextField id="diet-name" label="Age Range of the Cat" /><br/>
                                <TextField id="diet-name" label="Weight Range of the Cat" /><br/>
                                <TextField id="diet-name" label="Add items" /><br/> */}
								<label className="form-label">Name of the diet</label>
								 <Field
                                  className="form-control"
                                  id="planName"
                                  autocomplete="off"
                                  name="planName"
                                  placeholder=""
                                />
								<label className="form-label">Description about the Diet Plann</label>
								 <Field
                                  className="form-control"
                                  id="planDescr"
                                  autocomplete="off"
                                  name="planDescr"
                                  placeholder=""
                                />
								<label className="form-label">Age range from</label>
								 <Field
                                  className="form-control"
                                  id="ageRangeFrom"
                                  autocomplete="off"
                                  name="ageRangeFrom"
                                  placeholder=""
                                />
								<label className="form-label">Age range to</label>
								 <Field
                                  className="form-control"
                                  id="ageRangeTo"
                                  autocomplete="off"
                                  name="ageRangeTo"
                                  placeholder=""
                                />
								<label className="form-label">Weight range from</label>
								 <Field
                                  className="form-control"
                                  id="weightRangeFrom"
                                  autocomplete="off"
                                  name="weightRangeFrom"
                                  placeholder=""
                                />
								<label className="form-label">Weight range to</label>
								 <Field
                                  className="form-control"
                                  id="weightRangeTo"
                                  autocomplete="off"
                                  name="weightRangeTo"
                                  placeholder=""
                                />
								<label className="form-label">Breed id</label>
								 <Field
                                  className="form-control"
                                  id="breedId"
                                  autocomplete="off"
                                  name="breedId"
                                  placeholder=""
                                />
								<label className="form-label">Cat id</label>
								 <Field
                                  className="form-control"
                                  id="catId"
                                  autocomplete="off"
                                  name="catId"
                                  placeholder=""
                                />
                        {/* </Box> */}

                            
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mb-5 mt-5">
                                    {" "}
                                    {/* <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                        Add Diet Plan
                                    </Button> */}
									 <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit"
							  style={{backgroundColor: '#F66B0E'}} 
                            >
                              Add Diet Plan
                            </button>
                                </div>
                                
                            </div>
                        </Form>
						</Formik>

                    {/* </CardContent>
                    </Card> */}
            				</div>
	
							</div>
							
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default mdaddcatdiet;
