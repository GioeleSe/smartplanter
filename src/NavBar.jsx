import { usePlantData } from "./PlantContext.jsx";
import { useLocation } from 'react-router-dom';
import NavActions from './NavActions.jsx'
import './NavBar.css'

function NavBar() {
  const pageLocation = useLocation();
  const plantTypes = usePlantData()[0];
  const plantsData = usePlantData()[1];
  let title = "Smart Planter";
  let subtitle = "";
  if (pageLocation.pathname === "/smartplants") {
    title = "Smart Plants";
  }
  else if (pageLocation.pathname.startsWith("/smartplants")) { 
    const urlSplit = pageLocation.pathname.split('/');
    const plantId = urlSplit[(urlSplit.length-1)];
    if(plantId){
      try {
        const plant = plantsData.find((p) => p.id === Number(plantId));
        const plantType = plantTypes.find((p) => p.id === Number(plant.plantId)).plantName;
        if(plant){
          title = plant.userName;
          subtitle = plantType;
        }
      } catch (error) {
        console.warn(error);
        title = "Smart Plants";
      }
    }
  }
  else if (pageLocation.pathname === "/about-smartplanter") { 
    title = "About Smart Planter" 
  }

  return (
    <nav>
      <p className="barlow-bold">
        {title}
      </p>
      <p className="barlow-extralight subtitle">
        {subtitle}
      </p>
      <NavActions></NavActions>
    </nav>
  )
}

export default NavBar
