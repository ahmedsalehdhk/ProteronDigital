import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Career from "./pages/Career";

//componenets
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          {/* SERVICE ROUTES */}
          <Route exact path="/customsoftware" element={<Service title="Custom Software Development" description="Creating bespoke software solutions tailored to specific business needs"/>}></Route>
          <Route exact path="/webapplication" element={<Service title="Web Application Development" description="Building dynamic and interactive web applications for various purposes" />}></Route>
          <Route exact path="/mobileapplication" element={<Service title="Mobile App Development" description="Designing and developing applications for smartphones and tablets across platforms" />}></Route>
          <Route exact path="/ecommercesolution" element={<Service title="E-commerce Solutions" description="Developing online platforms for businesses to sell products or services" />}></Route>
          <Route exact path="/uiux" element={<Service title="UI/UX Design" description="Crafting user interfaces and experiences that are intuitive and visually appealing" />}></Route>
          <Route exact path="/databasemanagement" element={<Service title="Database Management" description="Creating and managing databases to store and organize data efficiently" />}></Route>
          <Route exact path="/blockchainsolution" element={<Service title="Blockchain Solutions" description="Developing applications based on blockchain technology for various industries" />}></Route>
          <Route exact path="/APIdevelopment" element={<Service title="API Development" description="Creating APIs to enable interactions between software components" />}></Route>
          <Route exact path="/dataanalytics" element={<Service title="Data Analytics and Business Intelligence" description="Providing tools to analyze and visualize data for informed decision-making" />}></Route>
          {/* CASE STUDY ROUTES */}
          <Route exact path="/project-drishti" element={<CaseStudy title="Drishti" description="Drishti is an app for the visually impaired people that helps them to scan and identify daily objects and many more."></CaseStudy>}></Route>
          <Route exact path="/project-homsia" element={<CaseStudy title="Homsia" description="Homsia is a real estate company, we have developed a website for most recently."></CaseStudy>}></Route>
          <Route exact path="/project-teamflow" element={<CaseStudy title="TeamFlow" description="Teamflow is an in house team management app specifically built for Proteron Digital and its teams."></CaseStudy>}></Route>
          <Route exact path="/project-something" element={<CaseStudy title="Something" description="a little something something"></CaseStudy>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
