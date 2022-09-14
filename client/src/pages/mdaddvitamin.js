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



function mdaddvitamin() {
	const initialValues = {
		vitName:"",
		vitType:"", 
		descr:"",
		
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
		axios.post("http://localhost:3001/mod/addvitamin", data).then((response) => {
		  if (response.data.error) {
			alert(response.data.error);
		  } else {
			navigate("/mdsinglevitamin");
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
										<h1 class="h2 mb-0 ls-tight">Add Vitamin</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/moderatordashboard">
														Moderator Dashboard /
													</a>
													<a href="/mdsinglevitamin">
														 Vitamins / 
													</a>
                                                    <a href="/mdaddvitamin">
														 Add Vitamin
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
                            {/* <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:350, padding: 10, paddingLeft:75}}>
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
                                {/* <TextField id="vit-name" label="Name of the vitamin" /><br/>
                                <TextField id="vit-name" label="Description about the vitamin" /><br/> */}
								 <label className="form-label">Name of the vitamin</label>
								 <Field
                                  className="form-control"
                                  id="vitName"
                                  autocomplete="off"
                                  name="vitName"
                                  placeholder=""
                                />
								 <label className="form-label">Description about the vitamin</label>
								 <Field
                                  className="form-control"
                                  id="descr"
                                  autocomplete="off"
                                  name="descr"
                                  placeholder=""
                                />
								 <label className="form-label">Vitamin Type</label>
								 <Field
                                  className="form-control"
                                  id="vitType"
                                  autocomplete="off"
                                  name="vitType"
                                  placeholder=""
                                />
                                
                        {/* </Box> */}

                            
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3 mb-5 mt-5">
                                    {" "}
                                    {/* <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                        Add Vitamin
                                    </Button> */}
									 <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit"
							  style={{backgroundColor: '#F66B0E'}} 
                            >
                              Add Vitamin
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

export default mdaddvitamin;
