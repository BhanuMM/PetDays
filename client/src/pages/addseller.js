import React from 'react'
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


function addseller() {
  return (
    <div class="container-fluid">
    <div className="row">
        <Navbar />
    </div>
    <div className="row pt-0 mt-5">
        <div className="row flex-nowrap pt-5">
            <div className="col-2 side-color col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-4">
                <Sidebar />
            </div>
            <div className="col-7 g-5">
            <h1 class="mt-4">Add Service Providers</h1><hr/>
								<nav aria-label="breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="#" className="header-topic">Admin Dashboard / Medications / Service Providers</a>
										</li>
									</ol>
								</nav><br/><br/>

                <Card sx={{ minWidth: 275, maxWidth: 1500, width:1100, marginLeft: 15}} style={{height:720, padding: 10, paddingLeft:75}}>
                <CardContent>
                <form>
                <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <TextField id="sell-fname" label="First Name" /><br/>
                                <TextField id="sell-lname" label=" Last Name"/>
								<TextField id="sell-contact" label=" Contact Number"/>
								<TextField id="sell-email" label=" E mail"/>
								<TextField id="sell-nic" label=" NIC Number"/>
                                <TextField id="sell-nic" label=" Service"/>
                                <TextField id="sell-nic" label=" Description About the Service"/>
								<TextField id="sell-image" label=" Add Image" type="file" />
                        </Box>

                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3 mb-5 mt-5">
                            {" "}
                            <Button variant="contained" component="label"  style={{backgroundColor: '#F66B0E'}}>
                                    Add service Provider
                            </Button>
                        </div>
                        {/* <div className='col-3'></div> */}
                    </div>
                </form>
                </CardContent>
                </Card><br/>
            </div>
            <div className="col-3"></div>
        </div><br/>
    </div>
</div>
  )
}

export default addseller;
