import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
