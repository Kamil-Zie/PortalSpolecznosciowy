import React from 'react';
import './components/elements/styles/App.css';
import Home from './components/home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/about' element={<h1>DUPA1</h1>}></Route>
                 <Route exact path='/contact' element={<h1>DUPA23 </h1>}></Route>
          </Routes>
          </div>
       </Router>
    
  );
}

export default App;
