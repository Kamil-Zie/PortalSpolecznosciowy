import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./routes/home/Home";
import SignInForm from "./components/login/pages/SignInForm";
import SignUpForm from "./components/login/pages/SignUpForm";
import GetStarted from "./routes/getstarted/GetStartedPage";
import { MuiThemeProvider } from '@mui/material/styles';
import {AuthGuard, AuthContext} from "./managers/authManager"

function App() {

  const [context, setContext] = useState({auth: false, user: undefined});

  return (
    <div className="App">
      <BrowserRouter>
      <AuthContext.Provider value={[context, setContext]}>
        <Routes>
            <Route path="/*" element={<Home />}></Route>
            
            <Route path="login/*" element={<Home />}>
              <Route path="sign-in" element={<SignInForm/>}/>
              <Route path="sign-up" element={<SignUpForm/>}/>
            </Route>
            <Route path="getstarted/" element={<GetStarted/>}></Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
