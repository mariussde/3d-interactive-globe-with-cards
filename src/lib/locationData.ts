// Location data structure based on categories and locations.json
export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: string;
  subcategory: string;
  color: string;
}

export interface Subcategory {
  name: string;
  color: string;
  locations: Location[];
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

// Color palette for subcategories
const colors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#96CEB4', // Green
  '#FFEAA7', // Yellow
  '#DDA0DD', // Plum
  '#98D8C8', // Mint
  '#F7DC6F', // Light Yellow
  '#BB8FCE', // Light Purple
  '#85C1E9', // Light Blue
  '#F8C471', // Orange
  '#82E0AA', // Light Green
  '#F1948A', // Light Red
  '#AED6F1', // Very Light Blue
  '#D7BDE2', // Light Lavender
];

// Function to extract coordinates from location names
const getCoordinatesFromName = (name: string): { lat: number; lng: number } => {
  // This is a simplified mapping - in a real app, you'd want a more comprehensive geocoding service
  const locationMap: { [key: string]: { lat: number; lng: number } } = {
    // Cables
    'Puente Golden Gate – San Francisco, EE.UU.': { lat: 37.8199, lng: -122.4783 },
    'Millennium Bridge – Londres, Reino Unido': { lat: 51.5099, lng: -0.0982 },
    
    // Arcos
    'Arco del Triunfo – París, Francia': { lat: 48.8738, lng: 2.2950 },
    'Puente del Gard – Nîmes, Francia': { lat: 43.9474, lng: 4.5353 },
    'Puente de la Bahía de Sydney – Sídney, Australia': { lat: -33.8568, lng: 151.2153 },
    
    // Estructuras de barras articuladas
    'Torre Eiffel – París, Francia': { lat: 48.8584, lng: 2.2945 },
    'Puente Forth – Escocia, Reino Unido': { lat: 56.0014, lng: -3.3879 },
    
    // Vigas
    'Casa Farnsworth – Plano, Illinois, EE.UU.': { lat: 41.8832, lng: -88.2578 },
    'Pabellón de Barcelona – Barcelona, España': { lat: 41.3713, lng: 2.1540 },
    
    // Pórticos de nudos rígidos
    'Seagram Building – Nueva York, EE.UU.': { lat: 40.7614, lng: -73.9776 },
    'Edificio John Hancock Center – Chicago, EE.UU.': { lat: 41.8989, lng: -87.6228 },
    
    // Membranas / Textiles
    'Olympiastadion – Múnich, Alemania': { lat: 48.1731, lng: 11.5498 },
    'Aeropuerto Internacional de Denver – Colorado, EE.UU.': { lat: 39.8561, lng: -104.6737 },
    
    // Láminas de simple y doble curvatura
    'Auditorio de Tenerife – Santa Cruz de Tenerife, España': { lat: 28.4636, lng: -16.2518 },
    'Museo Guggenheim – Bilbao, España': { lat: 43.2681, lng: -2.9339 },
    'Capilla de Notre-Dame du Haut – Ronchamp, Francia': { lat: 47.7039, lng: 6.6219 },
    
    // Placas, losas y muros
    'Casa de la Cascada – Pensilvania, EE.UU.': { lat: 39.9064, lng: -79.4681 },
    'Casa Citrohan – Francia': { lat: 48.8566, lng: 2.3522 },
    
    // Tipologías de entramados tridimensionales
    'Cúpula del Reichstag – Berlín, Alemania': { lat: 52.5186, lng: 13.3762 },
    'Eden Project – Cornualles, Reino Unido': { lat: 50.3614, lng: -4.7447 },
    'Estadio Nacional de Pekín ("Nido de Pájaro") – Pekín, China (Herzog & de Meuron)': { lat: 39.9930, lng: 116.3881 },
  };
  
  return locationMap[name] || { lat: 0, lng: 0 };
};

// Create the data structure from the JSON
export const categories: Category[] = [
  {
    name: "Tipologías a base de elementos lineales",
    subcategories: [
      {
        name: "Cables",
        color: colors[0],
        locations: [
          "Puente Golden Gate – San Francisco, EE.UU.",
          "Millennium Bridge – Londres, Reino Unido"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `cables-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Cables",
            color: colors[0]
          };
        })
      },
      {
        name: "Arcos",
        color: colors[1],
        locations: [
          "Arco del Triunfo – París, Francia",
          "Puente del Gard – Nîmes, Francia",
          "Puente de la Bahía de Sydney – Sídney, Australia"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `arcos-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Arcos",
            color: colors[1]
          };
        })
      },
      {
        name: "Estructuras de barras articuladas (celosías o trusses)",
        color: colors[2],
        locations: [
          "Torre Eiffel – París, Francia",
          "Puente Forth – Escocia, Reino Unido"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `trusses-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Estructuras de barras articuladas (celosías o trusses)",
            color: colors[2]
          };
        })
      },
      {
        name: "Vigas",
        color: colors[3],
        locations: [
          "Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)",
          "Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `vigas-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Vigas",
            color: colors[3]
          };
        })
      },
      {
        name: "Pórticos de nudos rígidos / Forjados",
        color: colors[4],
        locations: [
          "Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)",
          "Edificio John Hancock Center – Chicago, EE.UU."
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `porticos-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Pórticos de nudos rígidos / Forjados",
            color: colors[4]
          };
        })
      }
    ]
  },
  {
    name: "Tipologías a base de elementos superficiales",
    subcategories: [
      {
        name: "Membranas / Textiles",
        color: colors[5],
        locations: [
          "Olympiastadion – Múnich, Alemania (Frei Otto)",
          "Aeropuerto Internacional de Denver – Colorado, EE.UU."
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `membranas-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Membranas / Textiles",
            color: colors[5]
          };
        })
      },
      {
        name: "Láminas de simple y doble curvatura",
        color: colors[6],
        locations: [
          "Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)",
          "Museo Guggenheim – Bilbao, España (Frank Gehry)",
          "Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `laminas-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Láminas de simple y doble curvatura",
            color: colors[6]
          };
        })
      },
      {
        name: "Placas, losas y muros",
        color: colors[7],
        locations: [
          "Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)",
          "Casa Citrohan – Francia (Le Corbusier)"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `placas-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Placas, losas y muros",
            color: colors[7]
          };
        })
      }
    ]
  },
  {
    name: "Tipologías de entramados tridimensionales",
    subcategories: [
      {
        name: "Ejemplos",
        color: colors[8],
        locations: [
          "Cúpula del Reichstag – Berlín, Alemania (Norman Foster)",
          "Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)",
          "Estadio Nacional de Pekín (\"Nido de Pájaro\") – Pekín, China (Herzog & de Meuron)"
        ].map((name, index) => {
          const coords = getCoordinatesFromName(name);
          return {
            id: `entramados-${index}`,
            name,
            lat: coords.lat,
            lng: coords.lng,
            category: "Tipologías de entramados tridimensionales",
            subcategory: "Ejemplos",
            color: colors[8]
          };
        })
      }
    ]
  }
];

// Flatten all locations for easy access
export const allLocations: Location[] = categories.flatMap(category =>
  category.subcategories.flatMap(subcategory => subcategory.locations)
);
