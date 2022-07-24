// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React32
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';

import Landing from './pages/landing';
import Signup from './pages/signup';

// import Fotter from './components/fotter';
// import Signinform from './components/signinform';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />

          <Route path="/landing" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />

          
        </Routes>
       
      </Router></div>
  );
}

export default App;
