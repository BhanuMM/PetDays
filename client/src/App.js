
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/login';
import Petmart from './pages/petmart';
import Index from './pages/index';
import Signup from './pages/register';
import Sellersignup from './pages/sellerregister';
import Admin from './pages/admin';

import Dashboard from './pages/dashboard';
import Admindashboard from './pages/admindashboard';
import Moderatordashboard from './pages/moderatordashboard';
import Mdposts from "./pages/mdposts";
import Mdpendingposts from "./pages/mdpendingposts";
import Serviceproviderdashboard from './pages/serviceproviderdashboard';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Moderator from './pages/moderator';
// import Login from './pages/login';
import Userprofile   from './pages/userprofile';
import Serviceprovider from './pages/serviceprovider';
import Verifyemail   from './pages/verifyemail';
import Activateaccount   from './pages/activate';
import Forum   from './pages/forum';
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

import Viewbreeds from './pages/viewbreeds';
import Viewmedications from './pages/viewmedications';
import Viewdietplans from './pages/viewdietplans';

import Usertype from './pages/usertype';
import Addnewadd from './pages/addpetmartadd';
import Newadd from './pages/newadd';
import Editadd from './pages/editpetmartadd';
import Viewadd from './pages/viewpetmartadd';



// import Signinform from './components/signinform';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <section />

      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Index/>} />
          <Route path="/signup" element={<Signup/>} />  
          <Route path="/sellersignup" element={<Sellersignup/>} />
          <Route path="/admin" element={<Admin/>} /> 
          <Route path="/admindashboard" element={<Admindashboard/>} /> 
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/serviceproviderdashboard" element={<Serviceproviderdashboard/>} /> 
          <Route path="/moderatordashboard" element={<Moderatordashboard/>} /> 
          <Route path="/mdposts" element={<Mdposts />} />
          <Route path="/mdpendingposts" element={<Mdpendingposts />} />
          <Route path="/serviceprovider" element={<Serviceprovider/>} /> 
          <Route path="/moderator" element={<Moderator/>} /> 
          <Route path="/userprofile" element={<Userprofile/>} /> 
          <Route path="/verifyemail" element={<Verifyemail/>} /> 
          <Route path="/activate/:hash" element={<Activateaccount/>} />
          <Route path="/addpetmartadd" element={<Addnewadd/>} />
          <Route path="/newadd" element={<Newadd/>} /> 
          <Route path="/editpetmartadd" element={<Editadd/>} /> 
          <Route path="/viewpetmartadd" element={<Viewadd/>} />  

          <Route path="/petcategories" element={<Petcategories/>} />
          <Route path="/medications" element={<Medications/>} />
          <Route path="/dietplans" element={<Dietplans/>} />
          <Route path="/moderators" element={<Moderators/>} />
          <Route path="/viewusers" element={<Viewusers/>} />
          <Route path="/reportgeneration" element={<Reportgeneration/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/forum" element={<Forum/>} />
          <Route path="/forummyposts" element={<Forummyposts/>} />
          <Route path="/forummylatestposts" element={<Forummylatestposts/>} /> 
          <Route path="/forumpendingposts" element={<Forumpendingposts/>} />  
          <Route path="/forumverifiedposts" element={<Forumverifiedposts/>} /> 
          <Route path="/forumcommonissues" element={<Forumcommonissues/>} /> 
          <Route path="/petmart" element={<Petmart/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
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
          <Route path="/viewbreeds" element={<Viewbreeds/>}/>
          <Route path="/viewmedications" element={<Viewmedications/>}/>
          <Route path="/viewdietplans" element={<Viewdietplans/>}/>
          <Route path="/registertype" element={<Usertype/>}/>

        </Routes>   
      </Router>          
      </div>

      </div>
    </div>
  );
}

export default App;
