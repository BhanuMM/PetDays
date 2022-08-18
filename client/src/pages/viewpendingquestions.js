import React from 'react';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/viewpendingquestions.css';
import Footer from '../components/footerspecial';
import Navbar from '../components/navbar';

function viewpendingquestions() {
  return (
    <div class='viewpendingquestions'>
        <Navbar/>
       <div className='row'>
        <div className='col-2'></div>
        <div className='col-7'>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <h3 className='mb-5'><i class='bx bxs-hourglass-top'></i>   Pending Questions<hr/></h3>
          
            <form>
                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Question By :  </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> Nora De Silva </p></label>
                    </div>      
                </div><br/>

                <div className="mb-3" class='line'>
                    <div class='field-name'>
                        <p class="fw-semibold fs-7">Question : </p>
                    </div>
                    <div class='field-value'>
                        <label for="adcategory" class="form-label">  <p class="fw-normal text-secondary"> It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p></label>
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

export default viewpendingquestions
