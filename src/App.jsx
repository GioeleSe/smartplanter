import { PlantDataContext } from "./PlantContext.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from 'components/navbar/NavBar';
import Footer from 'components/footer/Footer';
import LandingAnimation from 'pages/landingPage/LandingAnimation.jsx';
import SmartPlants from 'pages/smartPlants/SmartPlants.jsx';
import PlantDetails from 'pages/smartPlants/PlantDetails.jsx';
import AboutSmartplanter from 'pages/aboutSmartplanter/AboutSmartplanter.jsx';
import AboutSIndustry from 'pages/aboutSIndustry/AboutSIndustry.jsx';
import { registeredPlantTypes, plantsData, suggestedPlantsConditions } from 'src/hardcodedAPI.js';
import './App.css';

function App() {
  return (
    <PlantDataContext.Provider value={[registeredPlantTypes, plantsData, suggestedPlantsConditions]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingAnimation />} />
        <Route path="/smartplants" element={<SmartPlants/>} />
        <Route path="/smartplants/:plantDataId" element={<PlantDetails />} />
        <Route path="/about-smartplanter" element={<AboutSmartplanter />} />
        <Route path="/about-sindustry" element={<AboutSIndustry />} />
      </Routes>
      <Footer />
    </PlantDataContext.Provider>
  );
}

export default App;
