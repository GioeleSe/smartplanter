import { PlantDataContext } from "./PlantContext.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import LandingAnimation from './landingPage/LandingAnimation.jsx';
import SmartPlants from './smartPlants/SmartPlants.jsx';
import PlantDetails from './smartPlants/PlantDetails.jsx';
import AboutSmartplanter from './aboutSmartplanter/AboutSmartplanter.jsx';
import AboutSIndustry from './aboutSIndustry/AboutSIndustry.jsx';
import { plantsData, suggestedPlantsConditions } from './hardcodedAPI.js';
import './App.css';

function App() {
  return (
    <PlantDataContext.Provider value={[plantsData, suggestedPlantsConditions]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingAnimation />} />
        <Route path="/smartplants" element={<SmartPlants/>} />
        <Route path="/smartplants/:plantId" element={<PlantDetails />} />
        <Route path="/about-smartplanter" element={<AboutSmartplanter />} />
        <Route path="/about-sindustry" element={<AboutSIndustry />} />
      </Routes>
      <Footer />
    </PlantDataContext.Provider>
  );
}

export default App;
