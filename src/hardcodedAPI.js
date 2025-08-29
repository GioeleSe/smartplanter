export const registeredPlantTypes = [
  {id:1, plantName: "Philodendron",},
  {id:2, plantName: "Snake Plant",},
  {id:3, plantName: "Dieffenbachia",},
  {id:4, plantName: "Pothos",},
  {id:5, plantName: "Caladium",},
  {id:6, plantName: "Orchid",}
];
export const suggestedPlantsConditions = [
  {
    plantId:1,
    soil: {
      temp: { min: 15, max: 25 },
      hum: { min: 35, max: 75 }
    },
    air: {
      temp: { min: 10, max: 35 },
      hum: { min: 15, max: 65 }
    }
  },
  {
    plantId:2,
    soil: {
      temp: { min: 18, max: 30 },
      hum: { min: 10, max: 40 }
    },
    air: {
      temp: { min: 15, max: 35 },
      hum: { min: 20, max: 50 }
    }
  },
  {
    plantId:3,
    soil: {
      temp: { min: 18, max: 28 },
      hum: { min: 40, max: 70 }
    },
    air: {
      temp: { min: 16, max: 30 },
      hum: { min: 30, max: 60 }
    }
  },
  {
    plantId:4,
    soil: {
      temp: { min: 15, max: 30 },
      hum: { min: 30, max: 70 }
    },
    air: {
      temp: { min: 10, max: 35 },
      hum: { min: 20, max: 60 }
    }
  },
  {
    plantId: 5,
    soil: {
      temp: { min: 20, max: 28 },
      hum: { min: 50, max: 80 }
    },
    air: {
      temp: { min: 18, max: 32 },
      hum: { min: 40, max: 70 }
    }
  },
  {
    plantId: 6,
    soil: {
      temp: { min: 18, max: 28 },
      hum: { min: 50, max: 70 }
    },
    air: {
      temp: { min: 16, max: 30 },
      hum: { min: 40, max: 60 }
    }
  }
];
export const plantsData = [
  { 
    id: 1, 
    userName: "Mentina", 
    plantId: 1, 
    healthScore: 87, 
    soil: { temp: 25, hum: 50 },
    air: { temp: 28, hum: 45 },
    sunExposure: 23, 
    waterLevel: 75
  },
  { 
    id: 2, 
    userName: "Ughetto", 
    plantId: 2, 
    healthScore: 10, 
    soil: { temp: 22, hum: 30 },
    air: { temp: 25, hum: 35 },
    sunExposure: 15, 
    waterLevel: 10
  },
  { 
    id: 3, 
    userName: "Bob", 
    plantId: 3, 
    healthScore: 43, 
    soil: { temp: 24, hum: 60 },
    air: { temp: 22, hum: 45 },
    sunExposure: 18, 
    waterLevel: 60
  },
  { 
    id: 4, 
    userName: "Lina", 
    plantId: 4, 
    healthScore: 65, 
    soil: { temp: 26, hum: 50 },
    air: { temp: 24, hum: 40 },
    sunExposure: 20, 
    waterLevel: 50
  },
  { 
    id: 5, 
    userName: "Carlo", 
    plantId: 5, 
    healthScore: 21, 
    soil: { temp: 25, hum: 65 },
    air: { temp: 28, hum: 60 },
    sunExposure: 22, 
    waterLevel: 70
  },
  { 
    id: 6, 
    userName: "Johnny", 
    plantId: 6, 
    healthScore: 100, 
    soil: { temp: 24, hum: 55 },
    air: { temp: 25, hum: 50 },
    sunExposure: 24, 
    waterLevel: 80
  },
  { 
    id: 7, 
    userName: "Mia", 
    plantId: 5, 
    healthScore: 92, 
    soil: { temp: 23, hum: 60 },
    air: { temp: 25, hum: 55 },
    sunExposure: 20, 
    waterLevel: 65
  },
  { 
    id: 8, 
    userName: "Leo", 
    plantId: 1, 
    healthScore: 78, 
    soil: { temp: 21, hum: 70 },
    air: { temp: 22, hum: 65 },
    sunExposure: 15, 
    waterLevel: 85
  },
  { 
    id: 9, 
    userName: "Sofia", 
    plantId: 3, 
    healthScore: 85, 
    soil: { temp: 20, hum: 55 },
    air: { temp: 21, hum: 50 },
    sunExposure: 18, 
    waterLevel: 55
  },
  { 
    id: 10, 
    userName: "Tom", 
    plantId: 6, 
    healthScore: 98, 
    soil: { temp: 19, hum: 30 },
    air: { temp: 20, hum: 40 },
    sunExposure: 10, 
    waterLevel: 40
  },
  { 
    id: 11, 
    userName: "Emily", 
    plantId: 4, 
    healthScore: 88, 
    soil: { temp: 24, hum: 25 },
    air: { temp: 26, hum: 30 },
    sunExposure: 30, 
    waterLevel: 30
  },
  { 
    id: 12, 
    userName: "Alex", 
    plantId: 1, 
    healthScore: 75, 
    soil: { temp: 22, hum: 45 },
    air: { temp: 24, hum: 50 },
    sunExposure: 25, 
    waterLevel: 60
  }
];