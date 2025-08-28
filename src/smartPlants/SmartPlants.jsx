import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePlantData } from "../PlantContext.jsx";
import Slider from '@mui/material/Slider';
import happinessScale from '../assets/icons/happinessScale.png';
import plantVaseIcon from '../assets/icons/plantVaseIcon.png';

import './SmartPlants.css';

function SmartPlants() {
    const plantsData = usePlantData()[0];

    const SelectIcon = ({ healthScore }) => {
        let sliderIcon;
        if (healthScore > 80) {
            sliderIcon = "superHappy";
        } else if (healthScore > 60) {
            sliderIcon = "happy";
        } else if (healthScore > 40) {
            sliderIcon = "mid";
        } else if (healthScore > 20) {
            sliderIcon = "sad";
        } else {
            sliderIcon = "dead";
        }
        const spriteSheetDimensions = { x: 506, y: 83 };
        const spriteSize = 81;
        const spritePositions = {
            "superHappy": { x: 424, y: 1 },
            "happy": { x: 318, y: 1 },
            "mid": { x: 212, y: 1 },
            "sad": { x: 106, y: 1 },
            "dead": { x: 1, y: 1 },
        }
        const { x, y } = spritePositions[sliderIcon]

        return (
            <div style={{ width: spriteSize, height: spriteSize, overflow: "hidden" }}>
                <img
                    src={happinessScale}
                    style={{
                        width: spriteSheetDimensions.x,
                        height: spriteSheetDimensions.y,
                        objectFit: "none",
                        objectPosition: "-" + x + "px " + "-" + y + "px",
                    }}
                    alt=""
                />
            </div>
        );
    }

    const PlantCard = ({ plantId, username, healthScore }) => {
        const [loaded, setLoaded] = useState(false);
        useEffect(() => {
            setLoaded(true);
            const fadeoutTimer = setTimeout(() => setLoaded(false), 2000);
            return () => clearTimeout(fadeoutTimer);
        }, []);

        return (
            <div className="plantcard-container barlow-regular">
                <div className="plantcard-container-field plantcard-healthscore-container ">
                    <div className="plantcard-healthscore-slider-icon " style={{ "--health": healthScore }}>
                        <div className={"plantcard-healthscore-slider-selecticon " + (loaded ? "loadedVisible" : "")}>
                            <SelectIcon healthScore={healthScore} />
                        </div>
                        <span className="healthscore-description">
                            {healthScore}
                        </span>
                    </div>
                    <Slider
                        classes={'plantcard-healthscore-slider-icon'}
                        defaultValue={100}
                        value={healthScore}
                        aria-label=""
                        valueLabelDisplay="off"
                        disabled={true}
                    />
                </div>
                <div className="plantcard-container-field plantcard-name-container">
                    {username}
                </div>
                <div className="plantcard-container-field plantcard-icon-container">
                    <Link
                        key={plantId}
                        to={"/smartplants/" + plantId} >
                        <img src={plantVaseIcon} alt="" className='plantcard-details-link-icon' />
                    </Link>
                </div>
            </div>
        );
    };


    return (
        <div className='plantcards-container'>
            {
                plantsData.map((plant) => (
                    <PlantCard
                        key={plant.id}
                        plantId={plant.id}
                        username={plant.userName}
                        healthScore={plant.healthScore}
                    />
                ))
            }
        </div>
    )
}

export default SmartPlants