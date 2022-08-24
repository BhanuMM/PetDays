import React from 'react';
import '../styles/dashcheckup.css';
import Profile from '../images/profile.jpg';
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import Icon from '../images/icon4.png';

function dashcheckup() {
  return (
    <div class='dashcheckup'>
        <div id="dashboard"><br/><br/>
            <div id="profile-info-card">
                <div class="profile-upper"><br/>
                    <div class = "profile-pic">
                        <img class="card-image" src={Profile} alt=""/>
                    </div><br/>
                    <h3>Hello!</h3>
                    <p class="fw-semibold ">John Fenando</p>
                    <p class="fw-semibold ">Moderator Dashboard</p>
                    
                    <hr/>
                </div>
                <table id="farmer-card-stats"><br/>
                    <tbody>
                        <tr>
                            <td class="stats-desc"><p class="fw-semibold ">Home</p></td>
                            
                        </tr>
                        <tr>
                            <td class="stats-desc"><p class="fw-semibold ">Pet Mart</p></td>
                            
                        </tr>
                        <tr>
                            <td class="stats-desc"><p class="fw-semibold ">Pet Talk</p></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-line">
                
                <a href="<?php echo $deliveryURL ?>">
                <div class="dash-card">
                    <div class='name'>
                        <h3>Posts</h3>
                    </div>
                    <div class='image'>
                        <img class="card-image" src={Icon1} alt=""/>
                    </div>
                    
                    
                </div>
                </a>
                <a href="<?php echo URLROOT;?>/deliveryPersons/mySchedule">
                <div class="dash-card">
                    <div></div>
                    <h3>Diet Plans</h3>
                    
                </div>
                </a>
                <a href="<?php echo URLROOT;?>/deliveryPersons/analytic">
                <div class="dash-card">
                    <h3>Advertisements</h3>
                   
                </div>
                </a>
            </div><br/><br/><br/>

            <div class="card-line">
                
                <a href="<?php echo $deliveryURL ?>">
                    <div class="dash-card">
                        <h3>Edit Delivery Areas</h3>
                        <img src="<?php echo URLROOT;?>/img/icons/stock.png" alt=""/>
                    </div>
                </a>
                <a href="<?php echo URLROOT;?>/deliveryPersons/mySchedule">
                <div class="dash-card">
                    <h3>View Delivery Orders</h3>
                    <img src="<?php echo URLROOT;?>/img/icons/admin.png" alt=""/>
                </div>
                </a>
                <a href="<?php echo URLROOT;?>/deliveryPersons/analytic">
                <div class="dash-card">
                    <h3>Analytics</h3>
                    <img src="<?php echo URLROOT;?>/img/icons/analytics.png" alt=""/>
                </div>
                </a>
            </div>
            {/* <div id="order-table">
                <h1>Current Deliveries</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Delivery Date</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            {/* <div id = "edit-profile-card">
                <h1>Delivery person</h1>
                <hr/>
                <h2><a href="<?php echo URLROOT;?>/deliveryPersons/editProfile">Edit profile</a></h2>
            </div> */}
        </div>
    
   
    
    
    </div>
  )
}

export default dashcheckup




