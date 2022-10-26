
import React from 'react';
import './App.css';
import {Navigate , BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Redirect  } from "react-router-dom";

import Signin from './pages/login';
import Petmart from './pages/petmart';
import Index from './pages/index';
import Signup from './pages/register';
import Sellersignup from './pages/sellerregister';
import Admin from './pages/admin';

import Admindashboard from './pages/admindashboard';
import Moderatordashboard from './pages/moderatordashboard';
import Mdposts from "./pages/mdposts";
import Mdpendingposts from "./pages/mdpendingposts";
import Mdverifyposts from "./pages/mdverifyposts";
import Mdadvertisments from "./pages/mdadvertisments";
import Mdpendingadvertisments from "./pages/mdpendingadvertisments";
import Mdverifyadvertisments from "./pages/mdverifyadvertisments";
import Mdviewadvertisement from "./pages/mdviewadvertisement";
import Mdmedications from "./pages/mdmedications";
import Mdmedicationdetails from "./pages/mdmedicationdetails";
import Mddietplans from "./pages/mddietplans";
import Mddietplandetails from "./pages/mddietplandetails";
import Serviceproviderdashboard from './pages/serviceproviderdashboard';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Moderator from './pages/moderator';
// import Login from './pages/login';
import Userprofile   from './pages/userprofile';
import Serviceprovider from './pages/serviceprovider';
import Verifyemail   from './pages/verifyemail';
import Activateaccount   from './pages/activate';
import Forum   from './pages/forum';
import Editcomment   from './pages/editcomment';
import Forummyposts   from './pages/forummyposts';
import Forummylatestposts   from './pages/forummylatestposts';
import Forumpendingposts   from './pages/forumpendingposts';
import Forumverifiedposts   from './pages/forumverifiedposts';
import Forumcommonissues   from './pages/forumcommonissues';
import Addmoderator   from './pages/addmoderator';
import Addnewmedication   from './pages/addnewmedication';
import Addpetcategory   from './pages/addpetcategories';
import Petcategories   from './pages/petcategories';
import Medications   from './pages/medications';
import Dietplans   from './pages/dietplans';
import Moderators   from './pages/moderators.js';
import Editpetcategory   from './pages/editpetcategory';
import Editdietplan   from './pages/editdietplan';
import Editmedication   from './pages/editmedication';

import Viewpendingadvertisments from './pages/viewpendingadvertisments';
import Viewpendingquestions from './pages/viewpendingquestions';
import Viewusers   from './pages/viewusers';
import Reportgeneration   from './pages/reportgeneration';
import Register   from './pages/register';
import Forgotpassword   from './pages/forgotpasword';
import Viewpets from './pages/viewpets';
import Viewmoderators from './pages/viewmoderators';

import Viewbreeds from './pages/viewbreeds';
import Viewmedications from './pages/viewmedications';
import Viewdietplans from './pages/viewdietplans';
import Viewvaccines from './pages/viewvaccines';
import Viewvitamins   from './pages/viewvitamins';
import Viewbreedscats   from './pages/viewbreedscats';
import Viewdietplanscats   from './pages/viewdietplanscats';
import Viewsellers   from './pages/viewsellers';
import Viewcategories   from './pages/viewcategories';

import Usertype from './pages/usertype';
import Addnewadd from './pages/addpetmartadd';
import Addnewadimage from './pages/addpetmartimages';
import Newadd from './pages/newadd';
import Editadd from './pages/editpetmartadd';
import Viewadd from './pages/viewpetmartadd';
import Addservices from './pages/addservices';
import Adddogbreed from './pages/adddogbreed';
import Addcatbreed from './pages/addcatbreed';
import Addseller from './pages/addseller';

import Dashcheckup from './pages/dashcheckup';
import Mdpendingads from './pages/mdpendingads';
import Mdverifyads from './pages/mdverifyads';
import Mdadssection from './pages/mdadssection';
import Mdpostsection from './pages/mdpostsection';
import Mdnewpendingposts from './pages/mdnewpendingposts';
import Mdnewverifyposts from './pages/mdnewverifyposts';
import Mdsinglemed from './pages/mdsinglemed';
import Mdsinglevacc from './pages/mdsinglevacc';
import Mdsinglevitamin from './pages/mdsinglevitamin';
import Mdaddmed from './pages/mdaddmed';
import Mdaddvacc from './pages/mdaddvacc';
import Mddogdiet from './pages/mddogdiet';
import Mdcatdiet from './pages/mdcatdiet';
import Mdaddvitamin from './pages/mdaddvitamin';
import Mdadddogdiet from './pages/mdadddogdiet';
import Mdaddcatdiet from './pages/mdaddcatdiet';
import Editservice from './pages/editpetservice';
import Allads from './pages/serviceprovideralladds';
import Pending from './pages/pendingads';
import Reject from './pages/rejected';
import Approved from './pages/appproved';
import Rejectedadview from './pages/sprejectviewad';
import Reportgenarationdashboard from './pages/reportgenarationdashboard';



import Singlead from './pages/viewsinglead';
import Mdverifiedsingle from './pages/mdverifiedsingle';
import Mdviewad from './pages/mdviewad';
import Mdeditdiet from './pages/mdeditdiet';
import Mdeditmed from './pages/mdeditmed';
import Mdeditvacc from './pages/mdeditvacc';
import Mdeditvitamin from './pages/mdeditvitamin';
import Newspdashboard from './pages/newspdashboard';


// import Newdashboard from './pages/newdashboard';

import Spdashboard from './pages/spdashboard';
import Test from './pages/test';
import Myprofile from './pages/myprofile';
import Editbreed from './pages/editbreed';
import Viewadvertisements from './pages/viewadvertisements';
import Myprofileadmin from './pages/myprofileadmin';
import Myprofileservice from './pages/myprofileservice';
import Spviewad from './pages/spviewad';
import Spmyads from './pages/spmyads';
import Sppendingads from './pages/sppendingads';
import Sppublishedads from './pages/sppublishedads';
import Sprejectedads from './pages/sprejectedads';
import Speditad from './pages/speditad';
import Adpayment from './pages/adpayment';
// import Signinform from './components/signinform';
import Comments from './pages/comments';
import Reports from './pages/reports';
import Reportincome from './pages/reportincome';
import Reportvaccine from './pages/reportvaccineusage';
import Reportuser from './pages/reportuser';
import Reportpost from './pages/reportpost';
import Petmartallads from './pages/petmartallads';





function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    role : "",
    status: false,
  });
  const [loadState, setloadState] = useState({
    status: true,
  });

  
  useEffect( () => {
   axios
      .get("http://localhost:3001/auth/authuser", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            role: response.data.role,
            status: true,
          });
          setloadState({
            status: false,
          });
        }
      });
  }, []);

 
  return (
    <div className="page-container">
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className="content-wrap">
        <section />

      <Router>
        
        <Routes>

        { authState.status && !loadState.status && (
                <>
          <Route path="*" element={<Index/>} />
                </>
              )}

        

<Route path="/reports" element={<Reports/>} />
<Route path="/reportgen" element={<Reportgeneration/>} />
        <Route path="/comments" element={<Comments/>} />

          <Route path="/register" element={<Register/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Index/>} />
          <Route path="/home" element={<Index/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/activate/:hash" element={<Activateaccount/>} />
          <Route path="/sellersignup" element={<Sellersignup/>} />
          <Route path="/verifyemail" element={<Verifyemail/>} />           
          <Route path="/registertype" element={<Usertype/>}/>
          <Route path="/reportgenarationdashboard" element={<Reportgenarationdashboard/>} />
          <Route path="/reportincome" element={<Reportincome/>} />
          <Route path="/reportvaccine" element={<Reportvaccine/>} />
          <Route path="/reportuser" element={<Reportuser/>} />
          <Route path="/reportpost" element={<Reportpost/>} />
          

         
       

          {/* forum */}
          <Route path="/forum" element={<Forum/>} />
          <Route path="/editcomment" element={<Editcomment/>} />

          {/* petmart */}
          <Route path="/petmart" element={<Petmartallads/>} />
          <Route path="/viewad" element={<Singlead/>}/>
          <Route path="/Petmartallads" element={<Petmart/>}/>


        {/* Admin */}
         
          
          
          { authState.status && authState.role=="admin" && (
                <>
                  <Route path="/admindashboard" element={<Admindashboard/>}  />
          <Route path="/addmoderator" element={<Addmoderator/>} />
          <Route path="/addnewmedication" element={<Addnewmedication/>} />
          <Route path="/addpetcategories" element={<Addpetcategory/>} />
          <Route path="/editpetcategory" element={<Editpetcategory/>} />
          <Route path="/editdietplan" element={<Editdietplan/>} />
          <Route path="/editmedication" element={<Editmedication/>} />
          <Route path="/viewpendingadvertisments" element={<Viewpendingadvertisments/>}/>
          <Route path="/viewpendingquestions" element={<Viewpendingquestions/>}/>
          <Route path="/forgotpasword" element={<Forgotpassword/>}/>
          <Route path="/viewpets" element={<Viewpets/>}/>
          <Route path="/viewmoderators" element={<Viewmoderators/>}/>
          <Route path="/viewbreeds" element={<Viewbreeds/>}/>
          <Route path="/viewmedications" element={<Viewmedications/>}/>
          <Route path="/viewdietplans" element={<Viewdietplans/>}/>
          <Route path="/addservices" element={<Addservices/>}/>
          <Route path="/adddogbreed" element={<Adddogbreed/>}/>
          <Route path="/addcatbreed" element={<Addcatbreed/>}/>
          <Route path="/viewvitamins" element={<Viewvitamins/>}/>
          <Route path="/viewvaccines" element={<Viewvaccines/>}/>
          <Route path="/viewbreedscats" element={<Viewbreedscats/>}/>
          <Route path="/viewdietplanscats" element={<Viewdietplanscats/>}/>
          <Route path="/viewcategories" element={<Viewcategories/>}/>
          <Route path="/editbreed" element={<Editbreed/>}/>
          <Route path="/myprofileadmin" element={<Myprofileadmin/>}/>
          <Route path="/viewsellers" element={<Viewsellers/>} />
                </>
              ) 
              }
          
         


          {/* moderator */}
          { authState.status && authState.role=="moderator" && (
                <>
          <Route path="/moderatordashboard" element={<Moderatordashboard/>} /> 
          <Route path="/mdposts" element={<Mdposts />} />
          <Route path="/mdpendingposts" element={<Mdpendingposts />} />
          <Route path="/mdverifyposts" element={<Mdverifyposts />} />
          <Route path="/mdadvertisments" element={<Mdadvertisments />} />
          <Route path="/mdpendingadvertisments" element={<Mdpendingadvertisments />} />
          <Route path="/mdverifyadvertisments" element={<Mdverifyadvertisments />} />
          <Route path="/mdviewadvertisment" element={<Mdviewadvertisement />} />
          <Route path="/mdmedications" element={<Mdmedications />} />
          <Route path="/mdmedicationdetails" element={<Mdmedicationdetails />} />
          <Route path="/mddietplans" element={<Mddietplans />} />
          <Route path="/mddietplandetails" element={<Mddietplandetails />} />
          <Route path="/mdeditdiet" element={<Mdeditdiet/>}/>
          <Route path="/mdeditmed" element={<Mdeditmed/>}/>
          <Route path="/mdeditvacc" element={<Mdeditvacc/>}/>
          <Route path="/mdeditvitamin" element={<Mdeditvitamin/>}/>
          <Route path="/mdpendingads" element={<Mdpendingads/>}/>
          <Route path="/mdverifyads" element={<Mdverifyads/>}/>
          <Route path="/Mdadssection" element={<Mdadssection/>}/>
          <Route path="/Mdpostsection" element={<Mdpostsection/>}/>
          <Route path="/Mdnewpendingposts" element={<Mdnewpendingposts/>}/>
          <Route path="/Mdnewverifyposts" element={<Mdnewverifyposts/>}/>
          <Route path="/Mdsinglemed" element={<Mdsinglemed/>}/>
          <Route path="/Mdsinglevacc" element={<Mdsinglevacc/>}/>
          <Route path="/Mdsinglevitamin" element={<Mdsinglevitamin/>}/>
          <Route path="/Mdaddmed" element={<Mdaddmed/>}/>
          <Route path="/Mdaddvacc" element={<Mdaddvacc/>}/>
          <Route path="/Mdaddvitamin" element={<Mdaddvitamin/>}/>
          <Route path="/Mddogdiet" element={<Mddogdiet/>}/>
          <Route path="/Mdcatdiet" element={<Mdcatdiet/>}/>
          <Route path="/Mdadddogdiet" element={<Mdadddogdiet/>}/>
          <Route path="/Mdaddcatdiet" element={<Mdaddcatdiet/>}/>
          <Route path="/myprofile" element={<Myprofile/>}/>
          <Route path="/mdverifiedsingle" element={<Mdverifiedsingle/>}/>
          <Route path="/mdviewad" element={<Mdviewad/>}/> 
                </>
              )}
          

          {/* Serviceprovider */}
          { authState.status && authState.role=="service" && (
                <>
                  <Route path="/spdashboard" element={<Spdashboard />} />
          <Route path="/spviewad" element={<Spviewad/>}/>
          <Route path="/spmyads" element={<Spmyads/>}/>
          <Route path="/sppendingads" element={<Sppendingads/>}/>
          <Route path="/sppublishedads" element={<Sppublishedads/>}/>
          <Route path="/sprejectedads" element={<Sprejectedads/>}/>
          <Route path="/speditad" element={<Speditad/>}/>
          <Route path="/addpetmartadd" element={<Addnewadd/>} />
          <Route path="/addpetmartimages" element={<Addnewadimage/>} />
          <Route path="/myprofileservice" element={<Myprofileservice/>}/>
          <Route path="/adpayment" element={<Adpayment/>}/>
          <Route path="/rejectedadview" element={<Rejectedadview/>}/>

                </>
              )}
         

          {/* <Route path="/forummyposts" element={<Forummyposts/>} /> */}
          {/* <Route path="/forummylatestposts" element={<Forummylatestposts/>} />  */}
          {/* <Route path="/forumpendingposts" element={<Forumpendingposts/>} />   */}
          {/* <Route path="/forumverifiedposts" element={<Forumverifiedposts/>} />  */}
          {/* <Route path="/forumcommonissues" element={<Forumcommonissues/>} />  */}
          {/* <Route path="/signup" element={<Signup/>} />   */}
          {/* <Route path="/admin" element={<Admin/>} />  */}
          {/* <Route path="/approved" element={<Approved />} /> */}
          {/* <Route path="/rejected" element={<Reject />} /> */}
          {/* <Route path="/serviceproviderdashboard" element={<Serviceproviderdashboard/>} />  */}          
          {/* <Route path="/approveadd" element={<Approvad />} /> */}        
          {/* <Route path="/serviceprovider" element={<Serviceprovider/>} />  */}
          {/* <Route path="/moderator" element={<Moderator/>} />  */}
          {/* <Route path="/userprofile" element={<Userprofile/>} />  */}          
          {/* <Route path="/addseller" element={<Addseller/>} /> */}
          {/* <Route path="/newadd" element={<Newadd/>} />  */}
          {/* <Route path="/editpetmartadd" element={<Editadd/>} />  */}
          {/* <Route path="/viewpetmartadd" element={<Viewadd/>} />   */}
          {/* <Route path="/serviceprovideralladds" element={<Allads/>} />  */}
          {/* <Route path="/pendingads" element={<Pending/>} />   */}
          {/* <Route path="/petcategories" element={<Petcategories/>} /> */}
          {/* <Route path="/medications" element={<Medications/>} /> */}
          {/* <Route path="/dietplans" element={<Dietplans/>} /> */}
          {/* <Route path="/moderators" element={<Moderators/>} /> */}
          {/* <Route path="/viewusers" element={<Viewusers/>} /> */}
          {/* <Route path="/login" element={<Login/>} /> */}          
          {/* <Route path="/dashcheckup" element={<Dashcheckup/>}/> */}
          {/* <Route path="/editservice" element={<Editservice/>}/> */}     
          {/* <Route path="/test" element={<Test/>}/> */}
          {/* <Route path="/newspdashboard" element={<Newspdashboard/>}/> */}          
          {/* <Route path="/viewadvertisements" element={<Viewadvertisements/>}/> */}   
          {/* <Route path="/newdashboard" element={<Newdashboard/>}/> */}
          
          
        </Routes>   
      </Router>          
      </div>
      </AuthContext.Provider>
      </div>

  );
}

export default App;
