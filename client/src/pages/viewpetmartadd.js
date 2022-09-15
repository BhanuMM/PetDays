import React from 'react'
import G1 from '../images/pw.jpg';
import '../styles/viewpetmartadd.css';
import "../styles/footerspecial.css";
import "../styles/sellerdashboard.css";
import "../styles/moderatordashboard.css";
import "../styles/moderatordashboard.css";
import '../styles/petmart.css';
import '../styles/forum.css';
import '../styles/petcategories.css';
import '../styles/serviceproviderdashboard.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import '../styles/spdashboard.css';

import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import Avatar from '@mui/material/Avatar';

function viewpetmartadd() {
  return (

    <div class="container-fluid">
    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <div className="">
        {/* <Sellersidebar /> */}
      </div>
      <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        <header class="bg-surface-primary border-bottom pt-6">
          <div class="container-fluid">
            <div class="mb-npx">
              <div class="row align-items-center">
                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                  <h1 class="h2 mb-0 ls-tight">Dog Care</h1>
                  <p> 22 August 2022</p>
                  <hr />
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/spdashboard" className="header-topic">
                          Service Provider Dashboard / 
                        </a>
                        <a href="/viewpetmartadd" className="header-topic">
                           View Ad
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
           
            <div class="container-fluid px-4">
              {/* <h1 class=" margintop-topc">Dog Care</h1>
              <p> 22 August 2022</p><hr/> */}
              <div className='row'>
                <div className='col-6'></div>

                <div className='col-3'> <Button variant="contained" size="large" color='secondary' href='/editservice' style={{backgroundColor:'#F66B0E'}} sx={{width:180, height:50, fontSize:20}}>
                                 <ModeEditOutlineIcon sx={{marginRight:2}}/> EDIT AD
                                 </Button></div>

                <div className='col-3'>  <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#e30b0b'}} sx={{width:200, height:50, fontSize:20}}>
                                 <DeleteIcon sx={{marginRight:1}}/>DELETE AD
                                 </Button></div>
              </div>
               
              <div className='row pb-5  viewadd-body'>
               <div className='col-1'></div>
               <div className='col-5'>
               <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
               </div>
               <div className='col-5 mt-5'>
               <p ><h2 className='mb-3'>Contact Us</h2>
                 <p className='fs-4 mb-3'><i class="fa fa-envelope text-5" aria-hidden="true"></i> www.dogfriends.lk</p>
                 <p className='fs-4 mb-3'><i class="fa fa-phone  text-5" aria-hidden="true"></i>+94 718 956 953 </p> 
                 <p className='fs-4 mb-3'><i class="fa fa-facebook-square  text-5" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
                <p className='fs-4 mb-3'><i class="fa fa-map-marker  text-5" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

                 </p>
              </div>
               <div className='col-1'></div>
             </div>
             <div className='row ml-5 viweadd-marggin '>
               <div className='col-5 ml-5'>
               <p className='ml-5 pl-5 text-start'>
                  <h3>Dog Walking Service</h3>
                  <p  className='fs-4 mb-3' ><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
                  
                

                  <h2>Rs 2000.00 only</h2>
                
                  </p>
                  <p  className='fs-4 mb-3 mt-3'>
                    Keep your dog happy and in greate space with our help.
                    Let we take care of your pet while you are away.
                  </p>
                  
                    </div>
                    <div className='col-2'></div>
                    <div className='col-5'>
                      
                    </div>
                
            
           
            
            
             

            </div>

            
              
            
            </div>
          </main>
        
      </div>
    </div>
  </div>
  
  )
}

export default  viewpetmartadd
   {/* <main>
            <div class="container-fluid px-4">
              <h1 class=" margintop-topc">Dog Care</h1>
              <p> 22 August 2022</p><hr/>
              <div className='row'>
                <div className='col-6'></div>

                <div className='col-3'> <Button variant="contained" size="large" color='secondary' href='/editservice' style={{backgroundColor:'#F66B0E'}} sx={{width:180, height:50, fontSize:20}}>
                                 <ModeEditOutlineIcon sx={{marginRight:2}}/> EDIT AD
                                 </Button></div>

                <div className='col-3'>  <Button variant="contained" size="large" color='secondary' style={{backgroundColor:'#e30b0b'}} sx={{width:150, height:50, fontSize:20}}>
                                 <DeleteIcon sx={{marginRight:1}}/>DELETE
                                 </Button></div>
              </div>
               
              <div className='row pb-5  viewadd-body'>
               <div className='col-1'></div>
               <div className='col-5'>
               <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
               </div>
               <div className='col-5 mt-5'>
               <p ><h2 className='mb-3'>Contact Us</h2>
                 <p className='fs-4 mb-3'><i class="fa fa-envelope text-5" aria-hidden="true"></i> www.dogfriends.lk</p>
                 <p className='fs-4 mb-3'><i class="fa fa-phone  text-5" aria-hidden="true"></i>+94 718 956 953 </p> 
                 <p className='fs-4 mb-3'><i class="fa fa-facebook-square  text-5" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
                <p className='fs-4 mb-3'><i class="fa fa-map-marker  text-5" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

                 </p>
              </div>
               <div className='col-1'></div>
             </div>
             <div className='row'>
               <div className='col-5'>
               <p className='ml-5 pl-5 text-start'>
            <h3>Dog Walking Service</h3>
             <p  className='fs-4 mb-3' ><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
            
           

            <h2>Rs 2000.00 only</h2>
           
             </p>
             <p  className='fs-4 mb-3 mt-3'>
              Keep your dog happy and in greate space with our help.
              Let we take care of your pet while you are away.
            </p>
            
              </div>
               <div className='col-2'></div>
               <div className='col-5'>
                
               </div>
           
            
           
            
            
             

        </div>

            
              
            
            </div>
          </main> */}