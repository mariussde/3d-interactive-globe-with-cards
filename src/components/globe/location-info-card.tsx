"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Location } from "@/lib/locationData";

interface LocationInfoCardProps {
  selectedLocation: Location | null;
}

const LocationInfoCard: React.FC<LocationInfoCardProps> = ({ selectedLocation }) => {
  if (!selectedLocation) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Select a Location</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Choose a location from the dropdown menus to view detailed information about the architectural structure.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedLocation.color }}
          />
          {selectedLocation.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Category
          </h4>
          <p className="text-lg">{selectedLocation.category}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Subcategory
          </h4>
          <p className="text-lg">{selectedLocation.subcategory}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Coordinates
          </h4>
          <p className="text-sm font-mono">
            {selectedLocation.lat.toFixed(4)}°N, {selectedLocation.lng.toFixed(4)}°E
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Location Details
          </h4>
          <p className="text-sm leading-relaxed">
            This architectural structure represents a significant example of {selectedLocation.subcategory.toLowerCase()} design. 
            Located at the specified coordinates, it showcases the unique characteristics and engineering principles 
            associated with this structural typology.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationInfoCard;
