export const suggestedPlantsConditions = [
  {
    plantName: "Philodendron",
    soil: [
      { temp: { min: 15, max: 30 } },
      { hum: { min: 35, max: 75 } }
    ],
    air: [
      { temp: { min: 10, max: 35 } },
      { hum: { min: 15, max: 65 } }
    ]
  },
  {
    plantName: "Snake Plant",
    soil: [
      { temp: { min: 18, max: 30 } },
      { hum: { min: 10, max: 40 } }
    ],
    air: [
      { temp: { min: 15, max: 35 } },
      { hum: { min: 20, max: 50 } }
    ]
  },
  {
    plantName: "Dieffenbachia",
    soil: [
      { temp: { min: 18, max: 28 } },
      { hum: { min: 40, max: 70 } }
    ],
    air: [
      { temp: { min: 16, max: 30 } },
      { hum: { min: 30, max: 60 } }
    ]
  },
  {
    plantName: "Pothos",
    soil: [
      { temp: { min: 15, max: 30 } },
      { hum: { min: 30, max: 70 } }
    ],
    air: [
      { temp: { min: 10, max: 35 } },
      { hum: { min: 20, max: 60 } }
    ]
  },
  {
    plantName: "Caladium",
    soil: [
      { temp: { min: 20, max: 28 } },
      { hum: { min: 50, max: 80 } }
    ],
    air: [
      { temp: { min: 18, max: 32 } },
      { hum: { min: 40, max: 70 } }
    ]
  },
  {
    plantName: "Orchid",
    soil: [
      { temp: { min: 18, max: 28 } },
      { hum: { min: 50, max: 70 } }
    ],
    air: [
      { temp: { min: 16, max: 30 } },
      { hum: { min: 40, max: 60 } }
    ]
  }
];
export const plantsData = [
  { 
    id: 1, 
    userName: "Mentina", 
    realName: "Philodendron", 
    healthScore: 87, 
    soil: { temp: 25, hum: 50 },      // temp within 15–30, hum within 35–75
    air: { temp: 28, hum: 45 },       // temp within 10–35, hum within 15–65
    sunExposure: 23, 
    waterLevel: 75
  },
  { 
    id: 2, 
    userName: "Ughetto", 
    realName: "Snake Plant", 
    healthScore: 10, 
    soil: { temp: 22, hum: 30 },      // temp within 18–30, hum within 10–40
    air: { temp: 25, hum: 35 },       // temp within 15–35, hum within 20–50
    sunExposure: 15, 
    waterLevel: 10
  },
  { 
    id: 3, 
    userName: "Bob", 
    realName: "Dieffenbachia", 
    healthScore: 43, 
    soil: { temp: 24, hum: 60 },      // temp within 18–28, hum within 40–70
    air: { temp: 22, hum: 45 },       // temp within 16–30, hum within 30–60
    sunExposure: 18, 
    waterLevel: 60
  },
  { 
    id: 4, 
    userName: "Lina", 
    realName: "Pothos", 
    healthScore: 65, 
    soil: { temp: 26, hum: 50 },      // temp within 15–30, hum within 30–70
    air: { temp: 24, hum: 40 },       // temp within 10–35, hum within 20–60
    sunExposure: 20, 
    waterLevel: 50
  },
  { 
    id: 5, 
    userName: "Carlo", 
    realName: "Caladium", 
    healthScore: 21, 
    soil: { temp: 25, hum: 65 },      // temp within 20–28, hum within 50–80
    air: { temp: 28, hum: 60 },       // temp within 18–32, hum within 40–70
    sunExposure: 22, 
    waterLevel: 70
  },
  { 
    id: 6, 
    userName: "Johnny", 
    realName: "Orchid", 
    healthScore: 100, 
    soil: { temp: 24, hum: 55 },      // temp within 18–28, hum within 50–70
    air: { temp: 25, hum: 50 },       // temp within 16–30, hum within 40–60
    sunExposure: 24, 
    waterLevel: 80
  }
];