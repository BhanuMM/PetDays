import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Index from './pages/index';
import Signup from './pages/signup';
import Admin from './pages/admin';
import Moderator from './pages/moderator';
import Userprofile   from './pages/userprofile';
import Serviceprovider from './pages/serviceprovider';
import Footer from './components/footer';
import Navbar from './components/navbar';

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
        </Routes>   
      </Router>          
      </div>
      <Footer />
      </div>
  );
}

export default App;
