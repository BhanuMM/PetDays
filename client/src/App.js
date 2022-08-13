import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Petmart from './pages/petmart';
import Index from './pages/index';
import Signup from './pages/signup';
import Admin from './pages/admin';
import Moderator from './pages/moderator';
import Login from './pages/login';
import Userprofile   from './pages/userprofile';
import Serviceprovider from './pages/serviceprovider';
import Verifyemail   from './pages/verifyemail';
import Activateaccount   from './pages/activate';
import Forum   from './pages/forum';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Addmoderator   from './pages/addmoderator';
import Addnewmedication   from './pages/addnewmedication';
import Addnewpetcategory   from './pages/addpetcategories';

// import Signinform from './components/signinform';

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <section />
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/" element={<Index/>} />
          <Route path="/signup" element={<Signup/>} />  
          <Route path="/admin" element={<Admin/>} /> 
          <Route path="/serviceprovider" element={<Serviceprovider/>} /> 
          <Route path="/moderator" element={<Moderator/>} /> 
          <Route path="/userprofile" element={<Userprofile/>} /> 
          <Route path="/verifyemail" element={<Verifyemail/>} /> 
          <Route path="/activate/:hash" element={<Activateaccount/>} /> 

          <Route path="/forum" element={<Forum/>} /> 
          <Route path="/petmart" element={<Petmart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addmoderator" element={<Addmoderator/>} />
          <Route path="/addnewmedication" element={<Addnewmedication/>} />
          <Route path="/addnewpetcategories" element={<Addnewpetcategory/>} />
        </Routes>   
      </Router>          
      </div>
      <Footer />
      </div>
  );
}

export default App;
