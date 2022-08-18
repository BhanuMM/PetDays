import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/viewpendingadvertisments.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function viewpendingadvertisments() {
  return (
    <div className='viewpendingadvertisments'>
        <Navbar/>
       <div className='row'>
        <div className='col-2'></div>
        <div className='col-7'>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <h3 className='mb-5'><i class='bx bxs-hourglass-top'></i>   Pending Advertisments<hr/></h3>
          
            <form>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Ad Category :</p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> Grooming </p></label>
                    </div>      
                </div>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Number of words : </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> 225 </p></label>
                    </div>      
                </div>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Content : </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary">We are here to help you ! </p></label>
                    </div>      
                </div>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Ad Keywords : </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> 25% off for September</p></label>
                    </div>      
                </div>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Sources : </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> Grooming </p></label>
                    </div>      
                </div>
                
                <div class="mb-3">
                    <label for="duration" class="form-label"><p class="fw-semibold fs-7">Display Time Duration</p> </label><br/>
                    <div class='from'>
                        <div className="mb-3" class='line'>
                            <div class='field-name'>
                                <p class="fw-semibold fs-7">From : </p>
                            </div>
                            <div class='field-value'>
                                <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> 22/05/2022 </p></label>
                            </div>      
                        </div>
                    </div>
                    <div class='to'>
                        <div className="mb-3" class='line'>
                                <div class='field-name'>
                                    <p class="fw-semibold fs-7">To : </p>
                                </div>
                                <div class='field-value'>
                                    <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> 22/06/2022 </p></label>
                                </div>      
                        </div>
                        <div class='field'>

                        </div>
                    </div>
                    
                </div>
                <br/>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3 mb-5 mt-5' class='buttons'>
                        <div class='button-1'>
                            <button type="submit" class=" pl-5 btn btn-success">Approve</button>
                        </div>
                        <div class='button-2'>
                            <button type="submit" class=" pl-5 btn btn-danger">Reject</button>
                        </div>       
                    </div>   
                </div>
               <br/>
            </form>

        </div>
        <div className='col-3'></div>

       </div>
       <Footer/>
    </div>
  )
}

export default viewpendingadvertisments
