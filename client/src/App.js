import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Index from './pages/index';
import Signup from './pages/signup';
import Admin from './pages/admin';
import Sellersdashboard from './pages/sellersdashboard';
import Serviceprovider from './pages/serviceprovider';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

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
          <Route path="/admin" element={<Admin/>} /> 
          <Route path="/serviceprovider" element={<Serviceprovider/>} />
          <Route path="/sellersdashboard" element={<Sellersdashboard/>} /> 
        </Routes>   
      </Router>          
      </div>
      </div>
  );
}

export default App;
