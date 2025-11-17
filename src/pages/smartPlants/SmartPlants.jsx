import { usePlantData } from "src/PlantContext.jsx";
import { MemoPlantCard } from './PlantCard.jsx';

import './SmartPlants.css';

function SmartPlants() {
    const plantsData = usePlantData()[1];

    return (
        <>
            <div className='smartplants-body-container' >
                <div className="plantcards-container">
                    {[...plantsData].map((plant, index) => (
                        <MemoPlantCard
                            key={'id-' + plant.id}
                            plantDataId={plant.id}
                            username={plant.userName}
                            healthScore={plant.healthScore}
                            classNames="plantcard-memo-container"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SmartPlants