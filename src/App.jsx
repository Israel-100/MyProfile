import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"Component={About} />
        <Route path="/contact" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
