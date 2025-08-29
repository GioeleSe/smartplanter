import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import playButton from '../assets/icons/playButton.png';
import pauseButton from '../assets/icons/pauseButton.png';
import { usePlantData } from "../PlantContext.jsx";
import { MemoPlantCard } from './PlantCard';

import './SmartPlants.css';

function SmartPlants() {
    const plantsData = usePlantData()[1];
    const [carouselSpeed, setCarouselSpeed] = useState(25);
    const handleCarouselSpeedChange = (e, value) => {
        setCarouselSpeed(value);
    };

    const [carouselPlay, setCarouselPlay] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setCarouselPlay(true);
        const stopCarouselTimer = setTimeout(() => setCarouselPlay(false), 3300);
    
        return () => {
            clearTimeout(stopCarouselTimer);
        }
    }, []);

    useEffect(() => {
        if (location.pathname !== '/smartplants' || document.hidden) {
            setCarouselPlay(false);
        }
    }, [location]);

    return (
        <>
            <div className="carousel-buttons-container">
                <button className={'btn btn-dark carousel-playpause-button ' + (carouselPlay ? "carousel-play" : "carousel-stop")} onClick={(e) => {
                    setTimeout(() => { setCarouselPlay((carouselPlay) => !carouselPlay) }, 150);
                }}>
                    <span className="barlow-medium carousel-button-text">
                        {
                            carouselPlay ? "Pause" : "Play"
                        }
                    </span>
                    <img
                        className='carousel-button-icon'
                        src={carouselPlay ? pauseButton : playButton}
                        alt={""}
                    />
                </button>
                <div className="carousel-speed-slider">
                    <Slider
                        classes={''}
                        defaultValue={25}
                        value={carouselSpeed}
                        onChange={handleCarouselSpeedChange}
                        min={5}
                        max={38}
                        valueLabelDisplay="off"
                        color='success'
                        disabled={false}
                    />
                </div>
            </div>
            <div className='smartplants-body-container' style={{
                "--carousel-duration": ((40 - carouselSpeed) + "s")
            }}>
                <div className="plantcards-container">
                    <div className={"carousel-track " + (carouselPlay ? " paused " : " running ")}>
                        {plantsData.map((plant) => (
                            <MemoPlantCard
                                key={"a-" + plant.id}
                                plantDataId={plant.id}
                                username={plant.userName}
                                healthScore={plant.healthScore}
                                classNames="plantcard-memo-container"
                            />
                        ))}
                        {plantsData.length > 6 ? (
                            plantsData.map((plant) => (
                                <MemoPlantCard
                                    key={"b-" + plant.id}
                                    plantDataId={plant.id}
                                    username={plant.userName}
                                    healthScore={plant.healthScore}
                                    classNames="plantcard-memo-container"
                                />
                            ))
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartPlants