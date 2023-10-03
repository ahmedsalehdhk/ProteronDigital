import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Career from "./pages/Career";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          {/* Specific services routes */}
          <Route exact path="/customsoftware" element={<Service title="Custom Software Development" description="Creating bespoke software solutions tailored to specific business needs"/>}></Route>
          <Route exact path="/webapplication" element={<Career />}></Route>
          <Route exact path="/mobileapplication" element={<Career />}></Route>
          <Route exact path="/ecommercesolution" element={<Career />}></Route>
          <Route exact path="/uiux" element={<Career />}></Route>
          <Route exact path="/databasemanagement" element={<Career />}></Route>
          <Route exact path="/blockchainsolution" element={<Career />}></Route>
          <Route exact path="/APIdevelopment" element={<Career />}></Route>
          <Route exact path="/dataanalytics" element={<Career />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
