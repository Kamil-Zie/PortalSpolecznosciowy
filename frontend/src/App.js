import React, {useState} from 'react';
import './components/elements/styles/App.css';
import Home from './components/home'
import { AuthContext, AuthGuard } from './utils/auth'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [context, setContext] = useState({auth: false, user: undefined});

  return (
    <AuthContext.Provider value={[context, setContext]}>
      <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/contact' element={<AuthGuard><h1>DUPA1</h1></AuthGuard>}></Route>
                 <Route exact path='/login' element={<h1>DUPA23 </h1>}></Route>
          </Routes>
          </div>
       </Router>
    </AuthContext.Provider>
  );
}

export default App;
