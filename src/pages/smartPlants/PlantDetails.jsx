import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePlantData } from "src/PlantContext.jsx";
import { suggestedPlantsConditions } from 'src/hardcodedAPI.js';
import { LoadingAnimation } from "components/loadingAnimation/loadingAnimation.jsx"; 
import plantVase from 'assets/plantVase.png';
import sunDraw from 'assets/sunDraw.png';
import waterTank from 'assets/waterTank.png';
import './PlantDetails.css'

function PlantDetails() {
    const loaderTimeout = 3000;
    const plantTypes = usePlantData()[0];
    const plantsData = usePlantData()[1];
    const plantsSuggestions = usePlantData()[2];
    const { plantDataId } = useParams();
    let plantData;
    let plantSuggestions;
    if (plantDataId) {
        try {
            const plant = plantsData.find((p) => p.id === Number(plantDataId));
            if (plant) {
                plantData = plant;
            }
        } catch (error) {
            console.warn(error);
        }
        if (plantData) {
            plantSuggestions = plantsSuggestions.find((p) => p.plantId === Number(plantData.plantId));
            console.log("plantSuggestions: " + JSON.stringify(plantSuggestions));
        }
    }
    const UnitType = {
        PERCENTAGE: "%",
        DEGREE: "°",
        PURENUM: ""
    }
    const DataContainer = ({ text, value, unit = UnitType.PURENUM, classNames, valueSuggestions }) => {
        const [showSuggestions, setShowSuggestions] = useState(true);
            setTimeout(()=>{ setShowSuggestions(false); }, (loaderTimeout));
        return (
            <>
                <div className={"plant-data-container " + classNames}
                    onMouseEnter={() => setShowSuggestions(true) }
                    onMouseLeave={() => setShowSuggestions(false) }>
                    <div className={"barlow-light suggestionsBox " + ((showSuggestions&&(valueSuggestions!=null))?" show ":"")}>
                        {valueSuggestions!=null?("from "+ valueSuggestions.min+" to "+valueSuggestions.max):""}
                    </div>
                    <div className="barlow-light plant-data-text">
                        {text}
                    </div>
                    <div className="barlow-semibold plant-data-value">
                        {value + unit}
                    </div>
                </div>
            </>
        );
    };
    
    const [showLoading, setShowLoading] = useState(true);
    useEffect(()=>{
        const loadingTimeout = setTimeout(()=>{
            setShowLoading(false);
        }, loaderTimeout);
        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <>
            <div className={"loading-animation-container " + (showLoading?"visible":"invisible")}>
                <LoadingAnimation></LoadingAnimation>
            </div>
            <div className={"smartplant-details-container " + (showLoading?"invisible":"visible") }>
            <div className="health-score-box">
                <div className="barlow-light health-score-title">
                    Health Score
                </div>
                <span className="barlow-semibold health-score-value">
                    { plantData.healthScore +"%" }
                </span>
            </div>
            <DataContainer
                text="Sun exposure"
                value={plantData.sunExposure}
                classNames={"atmospheric-conditions-data sun-exposure"}
                valueSuggestions={plantSuggestions?plantSuggestions.sun:null}
            /><DataContainer
                text="Air temperature"
                value={plantData.air.temp}
                unit={UnitType.DEGREE}
                classNames={"atmospheric-conditions-data air-data air-temp"}
                valueSuggestions={plantSuggestions?plantSuggestions.air.temp:null}
            /><DataContainer
                text="Air humidity"
                value={plantData.air.hum}
                unit={UnitType.PERCENTAGE}
                classNames={"atmospheric-conditions-data air-data air-hum"}
                valueSuggestions={plantSuggestions?plantSuggestions.air.hum:null}
            />
            <DataContainer
                text="Soil temperature"
                value={plantData.air.hum}
                unit={UnitType.DEGREE}
                classNames={"atmospheric-conditions-data soil-temp"}
                valueSuggestions={plantSuggestions?plantSuggestions.soil.temp:null}
            />
            <DataContainer
                text="Soil humidity"
                value={plantData.air.hum}
                unit={UnitType.PERCENTAGE}
                classNames={"atmospheric-conditions-data soil-hum"}
                valueSuggestions={plantSuggestions?plantSuggestions.soil.hum:null}
            />
            <DataContainer
                text="Water level"
                value={plantData.air.hum}
                unit={UnitType.PERCENTAGE}
                classNames={"atmospheric-conditions-data tank-water-level"}
                valueSuggestions={{min:15, max:100}}
            />
            <div className="plant-img-container">
                <img src={plantVase} alt="" className="plant-img" />
            </div>
            <div className="sun-img-container">
                <img src={sunDraw} alt="" className="sun-img" />
            </div>
            <div className="waterTank-img-container">
                <img src={waterTank} alt="" className="waterTank-img" />
            </div>
        </div>
        </>
    );
}

export default PlantDetails;