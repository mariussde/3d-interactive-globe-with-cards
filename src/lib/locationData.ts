// Location data structure based on data-source.json
export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: string;
  subcategory: string;
  color: string;
  materials: string[];
  history: string;
  design: string;
  structuralFunction: string;
  predominantEfforts: string[];
  description: string;
  imagePath?: string;
  imagePaths?: string[];
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

// Function to get image path from location name
const getImagePathFromName = (name: string): string => {
  const locationMap: { [key: string]: string } = {
    // Cables
    'Puente Golden Gate – San Francisco, EE.UU.': 'Golden gate',
    'Millennium Bridge – Londres, Reino Unido': 'Millennium Bridge',
    
    // Arcos
    'Arco del Triunfo – París, Francia': 'Arco del Triunfo',
    'Puente del Gard – Nîmes, Francia': 'Puente del Gard',
    'Puente de la Bahía de Sydney – Sídney, Australia': 'Puente de la Bahía de Sydney',
    
    // Estructuras de barras articuladas
    'Torre Eiffel – París, Francia': 'torre eiffel',
    'Puente Forth – Escocia, Reino Unido': 'Puente Forth',
    
    // Vigas
    'Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)': 'Casa Farnsworth',
    'Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)': 'Pabellón de Barcelona',
    
    // Pórticos de nudos rígidos
    'Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)': 'Seagram Building',
    'Edificio John Hancock Center – Chicago, EE.UU.': 'Edificio John Hancock Center',
    
    // Membranas / Textiles
    'Olympiastadion – Múnich, Alemania (Frei Otto)': 'Olympiastadion',
    'Aeropuerto Internacional de Denver – Colorado, EE.UU.': 'Aeropuerto',
    
    // Láminas de simple y doble curvatura
    'Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)': 'Auditorio de Tenerife',
    'Museo Guggenheim – Bilbao, España (Frank Gehry)': 'Museo Guggenheim',
    'Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)': 'notre dame',
    
    // Placas, losas y muros
    'Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)': 'Casa de la Cascada',
    'Casa Citrohan – Francia (Le Corbusier)': 'Casa Citrohan',
    
    // Tipologías de entramados tridimensionales
    'Cúpula del Reichstag – Berlín, Alemania (Norman Foster)': 'Cúpula del Reichstag',
    'Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)': 'Eden Project – Cornualles',
    'Estadio Nacional de Pekín ("Nido de Pájaro") – Pekín, China (Herzog & de Meuron)': 'Estadio Nacional de Pekín',
  };
  
  const folderName = locationMap[name];
  return folderName ? `/Estructuras/${folderName}/main.jpg` : '';
};

// Function to get all image paths for a location
const getAllImagePathsFromName = (name: string): string[] => {
  const locationMap: { [key: string]: string[] } = {
    // Cables
    'Puente Golden Gate – San Francisco, EE.UU.': [
      '/Estructuras/Golden gate/main.jpg',
      '/Estructuras/Golden gate/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Golden gate/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Golden gate/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Golden gate/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    'Millennium Bridge – Londres, Reino Unido': [
      '/Estructuras/Millennium Bridge/main.jpg',
      '/Estructuras/Millennium Bridge/41586_2005_Article_BF438043a_Fig1_HTML.jpg',
      '/Estructuras/Millennium Bridge/Millenium_bridge_2015.jpg',
      '/Estructuras/Millennium Bridge/millennium_bridge.jpg',
      '/Estructuras/Millennium Bridge/oscillazione-millenium-bridge.avif',
      '/Estructuras/Millennium Bridge/pexels-n5dave-34311783.jpg',
      '/Estructuras/Millennium Bridge/thumb-1920-1022526.jpg'
    ],
    
    // Arcos
    'Arco del Triunfo – París, Francia': [
      '/Estructuras/Arco del Triunfo/main.jpg',
      '/Estructuras/Arco del Triunfo/4014594-the-interior-of-the-arc-de-triomphe-in-paris-france.jpg',
      '/Estructuras/Arco del Triunfo/interior.webp',
      '/Estructuras/Arco del Triunfo/istockphoto-1585240057-612x612.jpg'
    ],
    'Puente del Gard – Nîmes, Francia': [
      '/Estructuras/Puente del Gard/main.jpg',
      '/Estructuras/Puente del Gard/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Puente del Gard/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Puente del Gard/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Puente del Gard/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    'Puente de la Bahía de Sydney – Sídney, Australia': [
      '/Estructuras/Puente de la Bahía de Sydney/main.jpg',
      '/Estructuras/Puente de la Bahía de Sydney/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Puente de la Bahía de Sydney/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Puente de la Bahía de Sydney/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Puente de la Bahía de Sydney/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    
    // Estructuras de barras articuladas
    'Torre Eiffel – París, Francia': [
      '/Estructuras/torre eiffel/main.jpg',
      '/Estructuras/torre eiffel/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/torre eiffel/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/torre eiffel/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/torre eiffel/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    'Puente Forth – Escocia, Reino Unido': [
      '/Estructuras/Puente Forth/main.jpg',
      '/Estructuras/Puente Forth/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Puente Forth/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Puente Forth/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Puente Forth/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    
    // Vigas
    'Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)': [
      '/Estructuras/Casa Farnsworth/main.jpg',
      '/Estructuras/Casa Farnsworth/26d495332394bcda78dfa9cf354d72ac.jpg',
      '/Estructuras/Casa Farnsworth/6b8a49e43bca4495260a2d1414823898.jpg',
      '/Estructuras/Casa Farnsworth/dbaef6bfc64800721cec951b81d9af17.jpg'
    ],
    'Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)': [
      '/Estructuras/Pabellón de Barcelona/main.jpg',
      '/Estructuras/Pabellón de Barcelona/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Pabellón de Barcelona/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Pabellón de Barcelona/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Pabellón de Barcelona/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    
    // Pórticos de nudos rígidos
    'Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)': [
      '/Estructuras/Seagram Building/main.jpg',
      '/Estructuras/Seagram Building/26b43cd4b9ee390ac07ede03fec5220a.jpg',
      '/Estructuras/Seagram Building/70cf1a2cc176aeb9b293c99f1984c450.jpg',
      '/Estructuras/Seagram Building/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Seagram Building/a6eab13eb1ee5174c528eb98aed45da3.jpg'
    ],
    'Edificio John Hancock Center – Chicago, EE.UU.': [
      '/Estructuras/Edificio John Hancock Center/main.jpg',
      '/Estructuras/Edificio John Hancock Center/44d47285c002dafd71a1a2829a79f19a.jpg',
      '/Estructuras/Edificio John Hancock Center/6fc01abc042cd2bd4651c269e65d9802.jpg',
      '/Estructuras/Edificio John Hancock Center/87b6e41ecad92953e0b6f3ea3eb41ea0.jpg',
      '/Estructuras/Edificio John Hancock Center/fc6fa5da682cd7e2a50deb8e39abe9eb.jpg'
    ],
    
    // Membranas / Textiles
    'Olympiastadion – Múnich, Alemania (Frei Otto)': [
      '/Estructuras/Olympiastadion/main.jpg',
      '/Estructuras/Olympiastadion/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Olympiastadion/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Olympiastadion/b831ff27415c1d69ee7ea617dfea5b19.jpg'
    ],
    'Aeropuerto Internacional de Denver – Colorado, EE.UU.': [
      '/Estructuras/Aeropuerto/main.jpg',
      '/Estructuras/Aeropuerto/11cfe264f0dc10ad94ff7bd6c5a262f0.jpg',
      '/Estructuras/Aeropuerto/255e05430a710798fd5c84d80d22c6ac.jpg',
      '/Estructuras/Aeropuerto/3c7825be528987e11344e67e8a04308d.jpg',
      '/Estructuras/Aeropuerto/63f71785c56296abf5538a2c505b8d86.jpg',
      '/Estructuras/Aeropuerto/7f439bca3566f767e23d192c24ab3bac.jpg'
    ],
    
    // Láminas de simple y doble curvatura
    'Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)': [
      '/Estructuras/Auditorio de Tenerife/main.jpg',
      '/Estructuras/Auditorio de Tenerife/2808c891339ca28a36e1eaeb1d87fa2e.jpg',
      '/Estructuras/Auditorio de Tenerife/3af2e751034521d2bbc071978085442f.jpg',
      '/Estructuras/Auditorio de Tenerife/4587046aa2dce8c507e4861bcdfb29da.jpg',
      '/Estructuras/Auditorio de Tenerife/4eec7d5f9cb85a1be8d2e916103c169d.jpg',
      '/Estructuras/Auditorio de Tenerife/51d9772ed0a918b59c5d9d07aec681e1.jpg',
      '/Estructuras/Auditorio de Tenerife/f90829872a828adf2dcaef9dfd4aca3b.jpg'
    ],
    'Museo Guggenheim – Bilbao, España (Frank Gehry)': [
      '/Estructuras/Museo Guggenheim/main.jpg',
      '/Estructuras/Museo Guggenheim/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/Museo Guggenheim/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/Museo Guggenheim/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/Museo Guggenheim/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    'Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)': [
      '/Estructuras/notre dame/main.jpg',
      '/Estructuras/notre dame/8e305f6dc5a52af40d74fb175ea5528f.jpg',
      '/Estructuras/notre dame/a6eab13eb1ee5174c528eb98aed45da3.jpg',
      '/Estructuras/notre dame/b831ff27415c1d69ee7ea617dfea5b19.jpg',
      '/Estructuras/notre dame/feeafc781f7f2fde567b03088c6ad3cc.jpg'
    ],
    
    // Placas, losas y muros
    'Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)': [
      '/Estructuras/Casa de la Cascada/main.jpg',
      '/Estructuras/Casa de la Cascada/1273797425-first.jpg',
      '/Estructuras/Casa de la Cascada/1280px-Fallingwater_miniature_model_at_MRRV_Carnegie_Science_Center.jpg',
      '/Estructuras/Casa de la Cascada/960.jpg',
      '/Estructuras/Casa de la Cascada/desktop-wallpaper-falling-water-frank-lloyd-wright-3450-backgrounds-falling-water.jpg'
    ],
    'Casa Citrohan – Francia (Le Corbusier)': [
      '/Estructuras/Casa Citrohan/main.jpg',
      '/Estructuras/Casa Citrohan/4c47518f31c9521e08d5865e98ddc1c8.jpg',
      '/Estructuras/Casa Citrohan/4c58409294c2a132e5dcefe645e5db73.jpg',
      '/Estructuras/Casa Citrohan/foto-casa-citrohan-8.jpg',
      '/Estructuras/Casa Citrohan/ifeqg5ls8sy71.jpg'
    ],
    
    // Tipologías de entramados tridimensionales
    'Cúpula del Reichstag – Berlín, Alemania (Norman Foster)': [
      '/Estructuras/Cúpula del Reichstag/main.jpg',
      '/Estructuras/Cúpula del Reichstag/a_1-a-1080x675.jpg',
      '/Estructuras/Cúpula del Reichstag/av_imagen_vertical.webp',
      '/Estructuras/Cúpula del Reichstag/cupula-reichstag-berlin.jpg',
      '/Estructuras/Cúpula del Reichstag/cupula-reichtag-2.jpg.webp',
      '/Estructuras/Cúpula del Reichstag/Reichstag_2X_Pano_1600.jpg',
      '/Estructuras/Cúpula del Reichstag/Reichstag_outside.jpg'
    ],
    'Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)': [
      '/Estructuras/Eden Project – Cornualles/main.jpg',
      '/Estructuras/Eden Project – Cornualles/4f7229706f2a8bf434ab79ac9508d5ede2cc029ec8ac112f16fd27f1b418877c.avif',
      '/Estructuras/Eden Project – Cornualles/96118_N134_a3.jpg',
      '/Estructuras/Eden Project – Cornualles/e32ca08a9f93787523233ba09d27f26ad6ea0204938f8f4775c513f20522898e.avif',
      '/Estructuras/Eden Project – Cornualles/eden-christmas-biomes.jpg',
      '/Estructuras/Eden Project – Cornualles/istockphoto-1460533257-612x612.jpg',
      '/Estructuras/Eden Project – Cornualles/istockphoto-505208580-612x612.jpg',
      '/Estructuras/Eden Project – Cornualles/istockphoto-521199288-612x612.jpg'
    ],
    'Estadio Nacional de Pekín ("Nido de Pájaro") – Pekín, China (Herzog & de Meuron)': [
      '/Estructuras/Estadio Nacional de Pekín/main.webp',
      '/Estructuras/Estadio Nacional de Pekín/asiático-china-pekín-estadio-nacional-estructura-de-acero-interior-63489168.webp',
      '/Estructuras/Estadio Nacional de Pekín/asiático-china-pekín-estadio-nacional-estructura-de-acero-interior-63529091.webp',
      '/Estructuras/Estadio Nacional de Pekín/av_119240.webp',
      '/Estructuras/Estadio Nacional de Pekín/av_imagen_vertical.webp',
      '/Estructuras/Estadio Nacional de Pekín/China-Iconic-Bird-Nest-The-National-Stadium-by-Herzog-de-Meuron_EV_1901_850_MES_K.webp',
      '/Estructuras/Estadio Nacional de Pekín/istockphoto-487327310-612x612.jpg'
    ],
  };
  
  return locationMap[name] || [];
};

// Function to extract coordinates from location names
const getCoordinatesFromName = (name: string): { lat: number; lng: number } => {
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
    'Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)': { lat: 41.8832, lng: -88.2578 },
    'Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)': { lat: 41.3713, lng: 2.1540 },
    
    // Pórticos de nudos rígidos
    'Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)': { lat: 40.7614, lng: -73.9776 },
    'Edificio John Hancock Center – Chicago, EE.UU.': { lat: 41.8989, lng: -87.6228 },
    
    // Membranas / Textiles
    'Olympiastadion – Múnich, Alemania (Frei Otto)': { lat: 48.1731, lng: 11.5498 },
    'Aeropuerto Internacional de Denver – Colorado, EE.UU.': { lat: 39.8561, lng: -104.6737 },
    
    // Láminas de simple y doble curvatura
    'Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)': { lat: 28.4636, lng: -16.2518 },
    'Museo Guggenheim – Bilbao, España (Frank Gehry)': { lat: 43.2681, lng: -2.9339 },
    'Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)': { lat: 47.7039, lng: 6.6219 },
    
    // Placas, losas y muros
    'Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)': { lat: 39.9064, lng: -79.4681 },
    'Casa Citrohan – Francia (Le Corbusier)': { lat: 48.8566, lng: 2.3522 },
    
    // Tipologías de entramados tridimensionales
    'Cúpula del Reichstag – Berlín, Alemania (Norman Foster)': { lat: 52.5186, lng: 13.3762 },
    'Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)': { lat: 50.3614, lng: -4.7447 },
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
          {
            id: "cables-0",
            name: "Puente Golden Gate – San Francisco, EE.UU.",
            lat: 37.8199,
            lng: -122.4783,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Cables",
            color: colors[0],
            materials: ["Acero", "Concreto"],
            history: "Inaugurado en 1937, diseñado por Joseph Strauss y Leon Moisseiff, símbolo de ingeniería moderna.",
            design: "Puente colgante con tablero suspendido por tirantes verticales conectados a dos grandes cables principales.",
            structuralFunction: "Los cables principales transmiten las cargas del tablero a las torres; las torres llevan la carga al suelo.",
            predominantEfforts: ["Tracción en cables principales y tirantes", "Compresión en torres", "Flexión mínima en el tablero"],
            description: "Icono icónico de San Francisco, inaugurado en 1937, es una óptima unión del ingenio y la belleza. Su puente colgante en su diseño cuenta con cables principales de acero que sostienen el tablero por suspensión. Es un estupendo ejemplo clásico del trasmisión de cargas por tracción.",
            imagePath: getImagePathFromName("Puente Golden Gate – San Francisco, EE.UU."),
            imagePaths: getAllImagePathsFromName("Puente Golden Gate – San Francisco, EE.UU.")
          },
          {
            id: "cables-1",
            name: "Millennium Bridge – Londres, Reino Unido",
            lat: 51.5099,
            lng: -0.0982,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Cables",
            color: colors[0],
            materials: ["Acero", "Aluminio", "Vidrio"],
            history: "Inaugurado en 2000, puente peatonal diseñado por Arup, Foster + Partners y Sir Anthony Caro.",
            design: "Puente colgante con cables tensados en los laterales, delgado y ligero.",
            structuralFunction: "Los cables tensados soportan el tablero, transmitiendo la carga a los apoyos; el puente tiene amortiguadores para controlar vibraciones.",
            predominantEfforts: ["Tracción en cables", "Compresión en soportes", "Vibraciones dinámicas por peatones"],
            description: "Puente peatonal inaugurado en 2000, conocido por su ligereza y diseño minimalista. Está sostenido por cables tensados de acero que permiten grandes luces sin pilares intermedios. Su estructura gestiona eficientemente tracción y vibraciones dinámicas.",
            imagePath: getImagePathFromName("Millennium Bridge – Londres, Reino Unido"),
            imagePaths: getAllImagePathsFromName("Millennium Bridge – Londres, Reino Unido")
          }
        ]
      },
      {
        name: "Arcos",
        color: colors[1],
        locations: [
          {
            id: "arcos-0",
            name: "Arco del Triunfo – París, Francia",
            lat: 48.8738,
            lng: 2.2950,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Arcos",
            color: colors[1],
            materials: ["Piedra"],
            history: "Construido entre 1806 y 1836 por Jean Chalgrin, conmemorando victorias napoleónicas.",
            design: "Arco monumental con forma clásica.",
            structuralFunction: "Transforma cargas verticales en compresión distribuida a lo largo del arco hasta los cimientos.",
            predominantEfforts: ["Compresión", "Tracción mínima en casos de viento"],
            description: "Monumento histórico de mampostería construido entre 1806 y 1836 para celebrar las victorias napoleónicas. Su estructura de arco transfiere las cargas verticales desde arriba a los cimientos mediante compresión. Representa la fuerza y la resiliencia de la arquitectura clásica.",
            imagePath: getImagePathFromName("Arco del Triunfo – París, Francia"),
            imagePaths: getAllImagePathsFromName("Arco del Triunfo – París, Francia")
          },
          {
            id: "arcos-1",
            name: "Puente del Gard – Nîmes, Francia",
            lat: 43.9474,
            lng: 4.5353,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Arcos",
            color: colors[1],
            materials: ["Piedra"],
            history: "Acueducto romano del siglo I d.C., usado para transportar agua.",
            design: "Tres niveles de arcos superpuestos, formando una estructura estable y eficiente.",
            structuralFunction: "Los arcos transfieren cargas de agua y peso propio hacia los pilares y cimientos.",
            predominantEfforts: ["Compresión en los arcos"],
            description: "Roman Acueducto del siglo I d.C., compuesto de diferentes niveles de arcos superpuestos. Realizado en piedra, transmite cargas de agua y su propio peso a los pilares. Ejemplo histórico de estructura eficiente y longevidad.",
            imagePath: getImagePathFromName("Puente del Gard – Nîmes, Francia"),
            imagePaths: getAllImagePathsFromName("Puente del Gard – Nîmes, Francia")
          },
          {
            id: "arcos-2",
            name: "Puente de la Bahía de Sydney – Sídney, Australia",
            lat: -33.8568,
            lng: 151.2153,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Arcos",
            color: colors[1],
            materials: ["Acero", "Hormigón"],
            history: "Inaugurado en 1932, diseñado por John Bradfield, uno de los arcos de acero más grandes del mundo.",
            design: "Gran arco que sostiene el tablero inferior mediante vigas.",
            structuralFunction: "El arco soporta el peso del tablero y distribuye las cargas a los apoyos extremos.",
            predominantEfforts: ["Compresión en la parte superior del arco", "Tracción en la parte inferior", "Flexión mínima en tablero"],
            description: "Inaugurado en 1932, gran arco de acero sostén del tablero inferior del puente. Carga en la parte superior por compresión y en la inferior por tracción. Se caracteriza por su magnitud y monumentalidad estética.",
            imagePath: getImagePathFromName("Puente de la Bahía de Sydney – Sídney, Australia"),
            imagePaths: getAllImagePathsFromName("Puente de la Bahía de Sydney – Sídney, Australia")
          }
        ]
      },
      {
        name: "Estructuras de barras articuladas (celosías o trusses)",
        color: colors[2],
        locations: [
          {
            id: "trusses-0",
            name: "Torre Eiffel – París, Francia",
            lat: 48.8584,
            lng: 2.2945,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Estructuras de barras articuladas (celosías o trusses)",
            color: colors[2],
            materials: ["Hierro"],
            history: "Construida entre 1887-1889 para la Exposición Universal, diseñada por Gustave Eiffel.",
            design: "Estructura de barras trianguladas articuladas, abierta y ligera.",
            structuralFunction: "Los triángulos distribuyen cargas verticales y de viento eficientemente.",
            predominantEfforts: ["Tracción y compresión en barras según su orientación", "Mínima flexión"],
            description: "Construida para la Exposición Universal de 1889, es un icono del hierro estructural. Sus barras trianguladas articuladas transfieren cargas verticales y de viento de manera eficiente. Representa innovación y ligereza en la ingeniería del siglo XIX.",
            imagePath: getImagePathFromName("Torre Eiffel – París, Francia"),
            imagePaths: getAllImagePathsFromName("Torre Eiffel – París, Francia")
          },
          {
            id: "trusses-1",
            name: "Puente Forth – Escocia, Reino Unido",
            lat: 56.0014,
            lng: -3.3879,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Estructuras de barras articuladas (celosías o trusses)",
            color: colors[2],
            materials: ["Acero"],
            history: "Construido entre 1882-1890, puente ferroviario de gran envergadura.",
            design: "Celosía metálica en forma de triángulos interconectados.",
            structuralFunction: "Triángulos transmiten cargas de trenes de forma uniforme a los apoyos.",
            predominantEfforts: ["Tracción y compresión en las barras", "Distribución eficiente de cargas puntuales"],
            description: "Puente de acero de ferrocarril completo en 1890, con celosías triangulares que soportan cargas pesadas de tren. Cada barra se utiliza para la tracción o compresión, lo que maximiza el uso de material. Clásico ejemplo de estructura eficiente en ingeniería.",
            imagePath: getImagePathFromName("Puente Forth – Escocia, Reino Unido"),
            imagePaths: getAllImagePathsFromName("Puente Forth – Escocia, Reino Unido")
          }
        ]
      },
      {
        name: "Vigas",
        color: colors[3],
        locations: [
          {
            id: "vigas-0",
            name: "Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)",
            lat: 41.8832,
            lng: -88.2578,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Vigas",
            color: colors[3],
            materials: ["Acero", "Vidrio", "Hormigón"],
            history: "Construida entre 1945-1951, ejemplo de modernismo minimalista.",
            design: "Casa elevada sobre pilotes, con grandes vigas que sostienen el volumen.",
            structuralFunction: "Vigas soportan el voladizo y transmiten cargas a los pilares.",
            predominantEfforts: ["Flexión en vigas", "Corte en apoyos", "Tracción y compresión local en extremos del voladizo"],
            description: "Casa modernista de 1945-1951, construida sobre pilotes con vigas de acero. Su estructura permite grandes voladizos y transparencia visual. Es un icono del minimalismo y pureza estructural.",
            imagePath: getImagePathFromName("Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)"),
            imagePaths: getAllImagePathsFromName("Casa Farnsworth – Plano, Illinois, EE.UU. (Mies van der Rohe)")
          },
          {
            id: "vigas-1",
            name: "Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)",
            lat: 41.3713,
            lng: 2.1540,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Vigas",
            color: colors[3],
            materials: ["Acero", "Vidrio", "Piedra"],
            history: "Construido para la Exposición Internacional de 1929.",
            design: "Estructura ligera y minimalista, con grandes luces libres.",
            structuralFunction: "Vigas transmiten cargas a pilares; techos planos se apoyan directamente en la estructura.",
            predominantEfforts: ["Flexión en vigas", "Compresión en pilares"],
            description: "Se construyó en 1929 para la Exposición Internacional, cuenta con vigas y pilares metálicos ligeros. Proyecta un espacio abierto y flexible, conjugando estética y funcionalidad. Es símbolo del racionalismo y elegancia del modernismo.",
            imagePath: getImagePathFromName("Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)"),
            imagePaths: getAllImagePathsFromName("Pabellón de Barcelona – Barcelona, España (Mies van der Rohe)")
          }
        ]
      },
      {
        name: "Pórticos de nudos rígidos / Forjados",
        color: colors[4],
        locations: [
          {
            id: "porticos-0",
            name: "Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)",
            lat: 40.7614,
            lng: -73.9776,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Pórticos de nudos rígidos / Forjados",
            color: colors[4],
            materials: ["Acero", "Vidrio"],
            history: "Construido entre 1954-1958, ejemplo icónico de rascacielos moderno.",
            design: "Pórticos rígidos en fachada y núcleo que soportan altura del edificio.",
            structuralFunction: "Los pórticos transfieren cargas verticales y resisten cargas laterales por viento.",
            predominantEfforts: ["Flexión en pilares y vigas", "Corte en nodos", "Compresión en pilares"],
            description: "Rascacielos moderno que se completó en 1958, con pórticos rígidos de acero y vidrio. Transmite cargas verticales y laterales eficientemente estructuralmente. Es un icono del estilo internacional y la simplicidad formal.",
            imagePath: getImagePathFromName("Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)"),
            imagePaths: getAllImagePathsFromName("Seagram Building – Nueva York, EE.UU. (Mies van der Rohe)")
          },
          {
            id: "porticos-1",
            name: "Edificio John Hancock Center – Chicago, EE.UU.",
            lat: 41.8989,
            lng: -87.6228,
            category: "Tipologías a base de elementos lineales",
            subcategory: "Pórticos de nudos rígidos / Forjados",
            color: colors[4],
            materials: ["Acero"],
            history: "Construido entre 1965-1969, rascacielos de gran altura.",
            design: "Pórticos con diagonales rigidizadas (sistema de \"X-bracing\").",
            structuralFunction: "Pórticos y diagonales distribuyen cargas verticales y laterales; alta rigidez ante viento y sismos.",
            predominantEfforts: ["Flexión y corte en pórticos", "Tracción y compresión en diagonales", "Resistencia a cargas laterales"],
            description: "Se construyó durante 1965-1969, tiene pórticos con diagonales rigidizadas para afrontar viento y sismos. Su estructura de acero les da grandes alturas y espacios interiores libres. Es un ejemplo de ingeniería avanzada en rascacielos.",
            imagePath: getImagePathFromName("Edificio John Hancock Center – Chicago, EE.UU."),
            imagePaths: getAllImagePathsFromName("Edificio John Hancock Center – Chicago, EE.UU.")
          }
        ]
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
          {
            id: "membranas-0",
            name: "Olympiastadion – Múnich, Alemania (Frei Otto)",
            lat: 48.1731,
            lng: 11.5498,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Membranas / Textiles",
            color: colors[5],
            materials: ["PVC", "Acero"],
            history: "Construido para los Juegos Olímpicos de 1972. Frei Otto desarrolló un techo ligero que simulaba carpas o montañas.",
            design: "Techo en forma de colinas onduladas, sostenido por cables tensados.",
            structuralFunction: "La membrana transmite las cargas a los puntos de anclaje mediante tracción; los cables llevan la carga a los pilares.",
            predominantEfforts: ["Tracción en membranas y cables", "Compresión mínima en los anclajes y torres"],
            description: "Se inauguró en 1972 para los Juegos Olímpicos, su techo ligero imita colinas y carpas. Está soportado por membranas tensadas y cables de acero, cubriendo grandes luces sin pilas. Es icono de innovación en estructuras tensadas y arquitectura ligera.",
            imagePath: getImagePathFromName("Olympiastadion – Múnich, Alemania (Frei Otto)"),
            imagePaths: getAllImagePathsFromName("Olympiastadion – Múnich, Alemania (Frei Otto)")
          },
          {
            id: "membranas-1",
            name: "Aeropuerto Internacional de Denver – Colorado, EE.UU.",
            lat: 39.8561,
            lng: -104.6737,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Membranas / Textiles",
            color: colors[5],
            materials: ["PTFE (Teflón)", "Acero"],
            history: "Terminado en 1995, diseñado para crear una forma inspirada en las montañas Rocosas.",
            design: "Techo ondulado, ligero y translúcido que cubre grandes luces.",
            structuralFunction: "Membranas tensadas soportadas por cables que transmiten cargas al suelo y a las torres.",
            predominantEfforts: ["Tracción en la membrana", "Compresión en los soportes"],
            description: "Construido en 1995, su cubierta ondulada evoca montañas nevadas. Construido con membranas textiles y cables de acero, encierra enormes volúmenes de forma ligera y transparente. Es un ejemplo de la unión de la ingeniería y el diseño escénico.",
            imagePath: getImagePathFromName("Aeropuerto Internacional de Denver – Colorado, EE.UU."),
            imagePaths: getAllImagePathsFromName("Aeropuerto Internacional de Denver – Colorado, EE.UU.")
          }
        ]
      },
      {
        name: "Láminas de simple y doble curvatura",
        color: colors[6],
        locations: [
          {
            id: "laminas-0",
            name: "Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)",
            lat: 28.4636,
            lng: -16.2518,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Láminas de simple y doble curvatura",
            color: colors[6],
            materials: ["Hormigón"],
            history: "Inaugurado en 2003. Su diseño se inspira en las olas y veleros del mar.",
            design: "Cubierta de doble curvatura que genera dinamismo y permite cubrir grandes luces sin pilares.",
            structuralFunction: "La forma curva convierte cargas verticales en membranas de compresión y tracción, reduciendo flexión local.",
            predominantEfforts: ["Tracción y compresión de membrana", "Flexión en zonas concentradas"],
            description: "Opened in 2003, su doble curvatura adopta la forma de veleros y olas. Fabricado en hormigón armado, permite cubrir grandes luces sin pilares intermedios. Mezcla de escultura estructural y eficiencia arquitectónica.",
            imagePath: getImagePathFromName("Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)"),
            imagePaths: getAllImagePathsFromName("Auditorio de Tenerife – Santa Cruz de Tenerife, España (Santiago Calatrava)")
          },
          {
            id: "laminas-1",
            name: "Museo Guggenheim – Bilbao, España (Frank Gehry)",
            lat: 43.2681,
            lng: -2.9339,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Láminas de simple y doble curvatura",
            color: colors[6],
            materials: ["Titanio", "Acero"],
            history: "Inaugurado en 1997, revolucionó la arquitectura contemporánea.",
            design: "Volúmenes curvos y de doble curvatura que parecen esculturas.",
            structuralFunction: "Láminas metálicas que transfieren cargas a la estructura interna mediante flexión y esfuerzos de membrana.",
            predominantEfforts: ["Tracción y compresión en la lámina", "Flexión en puntos críticos"],
            description: "Apertura en 1997, famoso por sus formas curvas y escultóricas. Se utiliza láminas de titanio y acero, transmitiendo cargas por flexión y membrana. Representative of modern architecture as expression artística and tecnológica.",
            imagePath: getImagePathFromName("Museo Guggenheim – Bilbao, España (Frank Gehry)"),
            imagePaths: getAllImagePathsFromName("Museo Guggenheim – Bilbao, España (Frank Gehry)")
          },
          {
            id: "laminas-2",
            name: "Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)",
            lat: 47.7039,
            lng: 6.6219,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Láminas de simple y doble curvatura",
            color: colors[6],
            materials: ["Hormigón"],
            history: "Construida entre 1950-1955, ejemplo de arquitectura expresiva y escultórica.",
            design: "Cubierta curva, ligera y expresiva, contrastando con los muros macizos.",
            structuralFunction: "La cubierta transmite cargas mediante flexión y compresión local, apoyada en muros robustos.",
            predominantEfforts: ["Compresión en muros", "Flexión en la cubierta"],
            description: "En el período 1950-1955, construida, se distingue por poseer cubierta curva y paredes macizas. El hormigón armado le permite a la estructura cubrir superficies en forma escultórica e iluminada. Se combina funcionalidad religiosa con plástica y estructural expresión.",
            imagePath: getImagePathFromName("Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)"),
            imagePaths: getAllImagePathsFromName("Capilla de Notre-Dame du Haut – Ronchamp, Francia (Le Corbusier)")
          }
        ]
      },
      {
        name: "Placas, losas y muros",
        color: colors[7],
        locations: [
          {
            id: "placas-0",
            name: "Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)",
            lat: 39.9064,
            lng: -79.4681,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Placas, losas y muros",
            color: colors[7],
            materials: ["Hormigón", "Piedra"],
            history: "Construida en 1935, famosa por su integración con el paisaje.",
            design: "Voladizos que se extienden sobre la cascada, creando un efecto dramático.",
            structuralFunction: "Losas en voladizo transmiten cargas a los pilares; muros soportan compresión vertical.",
            predominantEfforts: ["Flexión en voladizos", "Compresión en pilares y muros"],
            description: "Construido en 1935 sobre una cascada, sus losas de voladizo crean un efecto espectacular. El hormigón armado resiste la flexión en los voladizos y la compresión en los pilares. Es un clásico de la integración de la arquitectura y el paisaje.",
            imagePath: getImagePathFromName("Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)"),
            imagePaths: getAllImagePathsFromName("Casa de la Cascada – Pensilvania, EE.UU. (Frank Lloyd Wright)")
          },
          {
            id: "placas-1",
            name: "Casa Citrohan – Francia (Le Corbusier)",
            lat: 48.8566,
            lng: 2.3522,
            category: "Tipologías a base de elementos superficiales",
            subcategory: "Placas, losas y muros",
            color: colors[7],
            materials: ["Hormigón"],
            history: "Construida en 1920, prototipo de vivienda moderna.",
            design: "Planta libre, losas planas, muros portantes.",
            structuralFunction: "Losas transmiten cargas a muros y pilares; muros portantes soportan cargas verticales y cortantes.",
            predominantEfforts: ["Compresión en muros", "Flexión en losas", "Corte en apoyos"],
            description: "Edificada en 1920, prototipo de casa moderna con planta libre. Muros portantes de concreto armado y tejas planas sostenen eficientemente la estructura. Simboliza la pureza del estilo y la funcionalidad del modernismo.",
            imagePath: getImagePathFromName("Casa Citrohan – Francia (Le Corbusier)"),
            imagePaths: getAllImagePathsFromName("Casa Citrohan – Francia (Le Corbusier)")
          }
        ]
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
          {
            id: "entramados-0",
            name: "Cúpula del Reichstag – Berlín, Alemania (Norman Foster)",
            lat: 52.5186,
            lng: 13.3762,
            category: "Tipologías de entramados tridimensionales",
            subcategory: "Ejemplos",
            color: colors[8],
            materials: ["Acero", "Vidrio"],
            history: "Remodelación en 1999, combinación de vidrio y acero.",
            design: "Cúpula geodésica que permite luz natural y ventilación.",
            structuralFunction: "La cúpula transfiere cargas verticales y laterales mediante la geometría espacial.",
            predominantEfforts: ["Tracción y compresión en las barras de acero"],
            description: "Rehabilitada en 1999, combina acero y vidrio para crear una cúpula geodésica. Soporta cargas verticales y laterales a través de geometría espacial. Integra sostenibilidad, luz natural y eficiencia estructural.",
            imagePath: getImagePathFromName("Cúpula del Reichstag – Berlín, Alemania (Norman Foster)"),
            imagePaths: getAllImagePathsFromName("Cúpula del Reichstag – Berlín, Alemania (Norman Foster)")
          },
          {
            id: "entramados-1",
            name: "Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)",
            lat: 50.3614,
            lng: -4.7447,
            category: "Tipologías de entramados tridimensionales",
            subcategory: "Ejemplos",
            color: colors[8],
            materials: ["Acero", "ETFE"],
            history: "Inaugurado en 2001 como invernadero geodésico.",
            design: "Cúpulas geodésicas que crean microclimas para plantas tropicales.",
            structuralFunction: "Red tridimensional de barras que distribuye cargas de manera uniforme.",
            predominantEfforts: ["Compresión y tracción en barras según la geometría"],
            description: "Inaugurado en 2001, invernadero de acero geodésico y panel de ETFE. Su tejido tridimensional recupera grandes superficies y modela microclimas interiores. Es un modelo de arquitectura tecnológica y ecológicamente innovadora.",
            imagePath: getImagePathFromName("Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)"),
            imagePaths: getAllImagePathsFromName("Eden Project – Cornualles, Reino Unido (Nicholas Grimshaw)")
          },
          {
            id: "entramados-2",
            name: "Estadio Nacional de Pekín (\"Nido de Pájaro\") – Pekín, China (Herzog & de Meuron)",
            lat: 39.9930,
            lng: 116.3881,
            category: "Tipologías de entramados tridimensionales",
            subcategory: "Ejemplos",
            color: colors[8],
            materials: ["Acero"],
            history: "Construido para los Juegos Olímpicos de 2008.",
            design: "Estructura de \"nido\" que combina estética y función.",
            structuralFunction: "La red de acero entrelazado soporta la cubierta y cargas del estadio mediante distribución espacial.",
            predominantEfforts: ["Tracción y compresión en barras", "Muy resistente a viento y sismos"],
            description: "Construido para los Juegos Olímpicos de 2008, su estructura de acero entrelazada cubre todo el estadio. Transmite eficazmente las cargas verticales y laterales, a la vez que logra estética y funcionalidad. Es un símbolo de la arquitectura y la ingeniería modernas.",
            imagePath: getImagePathFromName("Estadio Nacional de Pekín (\"Nido de Pájaro\") – Pekín, China (Herzog & de Meuron)"),
            imagePaths: getAllImagePathsFromName("Estadio Nacional de Pekín (\"Nido de Pájaro\") – Pekín, China (Herzog & de Meuron)")
          }
        ]
      }
    ]
  }
];

// Flatten all locations for easy access
export const allLocations: Location[] = categories.flatMap(category =>
  category.subcategories.flatMap(subcategory => subcategory.locations)
);