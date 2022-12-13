import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import SignInForm from "./components/login/pages/SignInForm";
import SignUpForm from "./components/login/pages/SignUpForm";
import GetStarted from "./routes/getstarted/GetStartedPage";
import { MuiThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="login/*" element={<Home />}>
              <Route path="sign-in" element={<SignInForm/>}/>
              <Route path="sign-up" element={<SignUpForm/>}/>
            </Route>
            <Route path="getstarted/" element={<GetStarted/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
