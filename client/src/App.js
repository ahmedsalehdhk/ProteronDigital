import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Career from "./pages/Career";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
          {/* Specific services routes */}
          <Route exact path="/customsoftware" element={<Service title="Custom Software Development" description="Creating bespoke software solutions tailored to specific business needs"/>}></Route>
          <Route exact path="/webapplication" element={<Service title="Web Application Development" description="Building dynamic and interactive web applications for various purposes" />}></Route>
          <Route exact path="/mobileapplication" element={<Service title="Mobile App Development" description="Designing and developing applications for smartphones and tablets across platforms" />}></Route>
          <Route exact path="/ecommercesolution" element={<Service title="E-commerce Solutions" description="Developing online platforms for businesses to sell products or services" />}></Route>
          <Route exact path="/uiux" element={<Service title="UI/UX Design" description="Crafting user interfaces and experiences that are intuitive and visually appealing" />}></Route>
          <Route exact path="/databasemanagement" element={<Service title="Database Management" description="Creating and managing databases to store and organize data efficiently" />}></Route>
          <Route exact path="/blockchainsolution" element={<Service title="Blockchain Solutions" description="Developing applications based on blockchain technology for various industries" />}></Route>
          <Route exact path="/APIdevelopment" element={<Service title="API Development" description="Creating APIs to enable interactions between software components" />}></Route>
          <Route exact path="/dataanalytics" element={<Service title="Data Analytics and Business Intelligence" description="Providing tools to analyze and visualize data for informed decision-making" />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
