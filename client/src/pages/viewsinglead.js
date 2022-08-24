import React from 'react'
import G1 from '../images/pw.jpg';
import G2 from '../images/pw2.jpg';
import '../styles/viewpetmartadd.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function viewpetmartadd() {
  return (
    <div className='Viewpetmartadds'>
        <Navbar />
      <div className='row mt-5 pt-5 viewadd-hedder '>
        <div className='col-2'></div>
        <div className='col-8'>
            <div class='title  viewadd-hedder '>
              <div class='content'>
                <div className='row'>
                  <div className='col-10'>
                  <h3 className=''>DOG FRIENDS </h3>
                    <p> 22 August 2022</p>
                  </div>
                 
                  <hr/>
                </div>
                
              </div> 
            </div>
            <div className='row pb-5'>
              <div className='col-1'></div>
              <div className='col-5'>
              <img src={G1} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
              </div>
              <div className='col-5'>
              <img src={G2} className="rounded float-start img-fluid viewadd-imagesize mr-5 pr-5" alt="dog"/>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-5'>
              <p className='ml-5 pl-5 text-start'>
            <h3>Dog Walking Service</h3>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Gampaha,Sri Lanka</p>
            
           

            <h4>Rs 2000.00 only</h4>
           
            </p>
            <p>
              Keep your dog happy and in greate space with our help.
              Let we take care of your pet while you are away.
            </p>
            
              </div>
              <div className='col-2'></div>
              <div className='col-5'>
                <p><h6>Contact Us</h6>
                <p><i class="fa fa-envelope" aria-hidden="true"></i> www.dogfriends.lk</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i>+94 718 956 953 </p> 
                <p><i class="fa fa-facebook-square" aria-hidden="true"></i> wwww.facebook.com/dogfriends</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Temple Road,Gampaha,Sri Lanka</p>

                </p>
              </div>
            </div>
            
           
            
            
             

        </div>
        <div className='col-2'></div>
       </div>
       <Footer />
    </div>
  )
}

export default  viewpetmartadd
