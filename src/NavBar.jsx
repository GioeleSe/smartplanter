import { usePlantData } from "./PlantContext.jsx";
import { useLocation } from 'react-router-dom';
import NavActions from './NavActions.jsx'
import './NavBar.css'

function NavBar() {
  const pageLocation = useLocation();
  const plantsData = usePlantData()[0];
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
        if(plant){
          title = plant.userName;
          subtitle = plant.realName;
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
