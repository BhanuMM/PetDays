import React from 'react'
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/petmart.css';
import A1 from '../images/a1.jpg';
import A2 from '../images/a2.jpg';
import A3 from '../images/a3.jpg';
import A4 from '../images/a4.jpg';
import G3 from '../images/g3.jpg';
import G2 from '../images/g2.jpg';
import G1 from '../images/g1.jpg';
import G4 from '../images/g4.jpg';
import Footer from '../components/footer';
// import Navbar from '../components/navbar';
import "../styles/nav.css";
import "../styles/footer.css";
import Navbar from "../components/navbarspecial";
import Sidebar from "../components/sidebar";
import {Card,  CardContent,  CardMedia, Grid, Container}  from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field ,ErrorMessage } from "formik";
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
import Cancle from '../images/forgot.png';
import { useTheme } from '@mui/material/styles';


import Stack from '@mui/material/Stack';
import { brown, purple } from '@mui/material/colors';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//icons
import BookmarkRemoveTwoToneIcon from '@mui/icons-material/BookmarkRemoveTwoTone';
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Sellersidebar from "../components/serviceprovidersidebar";

import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";


import '../styles/spdashboard.css';

function addpetmartadd() {
    const initialValues = {
        adName:"",
        spName:"",
        dcr:"",
        price:"",
        image:"",
        conNo:"",
        address:"",
        email:"",
        fb:"",
		
		
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
		axios.post("http://localhost:3001/sp/addpetad", data).then((response) => {
		  if (response.data.error) {
			alert(response.data.error);
		  } else {
			navigate("/spdashboard");
		  }
		});
	  };
  return (

	
    <div class="container-fluid">
			<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<div className="">
					<Sellersidebar />
				</div>
				<div class="h-screen flex-grow-1 overflow-y-lg-auto">
					<header class="bg-surface-primary border-bottom pt-6">
						<div class="container-fluid">
							<div class="mb-npx">
								<div class="row align-items-center">
									<div class="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 class="h2 mb-0 ls-tight">Pending Advertiesments</h1>
										<hr />
										<nav aria-label="breadcrumb">
											<ol class="breadcrumb">
												<li class="breadcrumb-item">
													<a href="/spdashboard" className="header-topic">
														Service Provider Dashboard / 
													</a>
													<a href="/addpetmartadd" className="header-topic">
														 Create New Ads
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
                    <Formik
									initialValues={initialValues}
									onSubmit={onSubmit}
								
                      				>
            <Form>
            {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
                > */}
                    {/* <TextField id="ad-name" label="Name of advertiesment" /><br/>
                    <TextField id="sp-name" label="Name of supplier"/>
                    <TextField id="descrip" label="Description"/>
                    <TextField id="Price" label="Price Rs:"/>
                    <TextField id="image" label="Image (Change the input type)"/>
                    <TextField id="contact" label="Contact Number"/>
                    <TextField id="address" label="Address"/>
                    <TextField id="email" label="Email"/>
                    <TextField id="fb" label="Facebook"/> */}
                     <label className="form-label">Name of advertiesment</label>
                                                     <Field
														className="form-control"
														id="adName"
														autocomplete="off"
														name="adName"
														placeholder=""
														/>
                                                         <label className="form-label">Name of supplier</label>
                                                        <Field
														className="form-control"
														id="spName"
														autocomplete="off"
														name="spName"
														placeholder=""
														/>
                                                         <label className="form-label">Description</label>
                                                        <Field
														className="form-control"
														id="dcr"
														autocomplete="off"
														name="dcr"
														placeholder=""
														/>
                                                         <label className="form-label">Price Rs:</label>
                                                        <Field
														className="form-control"
														id="price"
														autocomplete="off"
														name="price"
														placeholder=""
														/>
                                                         <label className="form-label">Image </label>
                                                        <Field
														className="form-control"
														id="image"
														autocomplete="off"
														name="image"
														placeholder=""
														/>
                                                         <label className="form-label">Contact Number</label>
                                                        <Field
														className="form-control"
														id="conNo"
														autocomplete="off"
														name="conNo"
														placeholder=""
														/>
                                                         <label className="form-label">Address</label>
                                                        <Field
														className="form-control"
														id="address"
														autocomplete="off"
														name="address"
														placeholder=""
														/>
                                                         <label className="form-label">Email</label>
                                                        <Field
														className="form-control"
														id="email"
														autocomplete="off"
														name="email"
														placeholder=""
														/>
                                                         <label className="form-label">Facebook</label>
                                                        <Field
														className="form-control"
														id="fb"
														autocomplete="off"
														name="fb"
														placeholder=""
														/>
                {/* </Box> */}

                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 mb-5 mt-5">
                        {" "}
                        {/* <Button variant="contained" component="label" sx={{margin:1}}  style={{backgroundColor: '#F66B0E'}}>
                           Submit
                        </Button> */}
                         <button
                              className="register.loginbuttonsize btn btn-success "
                              type="submit"
							  style={{backgroundColor: '#F66B0E'}} 
                            >
                             Submit
                            </button>
                        <Button variant="contained" component="label" sx={{margin:1}}  style={{backgroundColor: '#e30b0b'}}>
                           Delete
                        </Button>
                    </div>
                    <div className='col-3'></div>
                </div>
            </Form>
            </Formik>
					
					</main>
				</div>
			</div>
		</div>



  );
}

export default addpetmartadd

