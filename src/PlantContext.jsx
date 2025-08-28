import { createContext, useContext } from "react";
export const PlantDataContext = createContext([]);
export const usePlantData = () => useContext(PlantDataContext);