"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Location } from "@/lib/locationData";

interface LocationInfoCardProps {
  selectedLocation: Location | null;
}

// Material icons mapping
const getMaterialIcon = (material: string): string => {
  const iconMap: { [key: string]: string } = {
    "Acero": "🔩",
    "Concreto": "🏗️",
    "Hormigón": "🏗️",
    "Vidrio": "🪟",
    "Piedra": "🪨",
    "Hierro": "⚙️",
    "Aluminio": "🔧",
    "PVC": "🔲",
    "PTFE (Teflón)": "🔲",
    "Titanio": "⚡",
    "ETFE": "🔲"
  };
  return iconMap[material] || "🔧";
};

// Extract location from name
const extractLocation = (name: string): string => {
  const parts = name.split(' – ');
  return parts.length > 1 ? parts[1] : '';
};

const LocationInfoCard: React.FC<LocationInfoCardProps> = ({ selectedLocation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when location changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedLocation]);

  if (!selectedLocation) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-shrink-0">
          <CardTitle>Selecciona una Ubicación</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto">
          <p className="text-muted-foreground">
            Elige una ubicación del menú desplegable para ver información detallada sobre la estructura arquitectónica.
          </p>
        </CardContent>
      </Card>
    );
  }

  const locationName = selectedLocation.name.split(' – ')[0];
  const locationPlace = extractLocation(selectedLocation.name);
  
  // Get all available images for this location
  const availableImages = selectedLocation.imagePaths || (selectedLocation.imagePath ? [selectedLocation.imagePath] : []);
  const currentImage = availableImages[currentImageIndex] || selectedLocation.imagePath;

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? availableImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === availableImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedLocation.color }}
          />
          {locationName}
        </CardTitle>
        <p className="text-sm text-muted-foreground font-normal">
          {locationPlace}
        </p>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {currentImage && (
          <div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={currentImage}
                alt={locationName}
                width={800}
                height={480}
                className="w-full aspect-[5/3] object-cover"
              />
            </div>
            {availableImages.length > 1 && (
              <div className="flex justify-end items-center gap-2 mt-3">
                <button
                  onClick={handlePreviousImage}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Imagen anterior"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-sm text-muted-foreground px-2">
                  {currentImageIndex + 1} / {availableImages.length}
                </span>
                <button
                  onClick={handleNextImage}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Categoría
          </h4>
          <p className="text-lg">{selectedLocation.subcategory}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Materiales
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedLocation.materials.map((material, index) => (
              <div key={index} className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-sm">
                <span>{getMaterialIcon(material)}</span>
                <span>{material}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Descripción
          </h4>
          <p className="text-sm leading-relaxed">
            {selectedLocation.description}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Historia
          </h4>
          <p className="text-sm leading-relaxed">
            {selectedLocation.history}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Diseño
          </h4>
          <p className="text-sm leading-relaxed">
            {selectedLocation.design}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Funcionamiento Estructural
          </h4>
          <p className="text-sm leading-relaxed">
            {selectedLocation.structuralFunction}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Esfuerzos Predominantes
          </h4>
          <ul className="text-sm leading-relaxed space-y-1">
            {selectedLocation.predominantEfforts.map((effort, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>{effort}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationInfoCard;
