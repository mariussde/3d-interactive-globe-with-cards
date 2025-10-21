"use client";

import React from "react";
import { Location } from "@/lib/locationData";

interface HoverCardProps {
  location: Location | null;
  mousePosition: { x: number; y: number };
}

const HoverCard: React.FC<HoverCardProps> = ({ location, mousePosition }) => {
  if (!location) return null;

  const locationName = location.name.split(' – ')[0];
  const locationPlace = location.name.split(' – ')[1] || '';

  // Calculate position with offset to avoid cursor overlap
  const cardOffset = 20;
  const cardWidth = 320; // max-w-xs is 320px
  const cardHeight = 120; // approximate height
  
  // Prevent card from going off-screen
  const left = mousePosition.x + cardOffset;
  const top = mousePosition.y - cardOffset;
  
  const adjustedLeft = left + cardWidth > window.innerWidth 
    ? mousePosition.x - cardWidth - cardOffset 
    : left;
    
  const adjustedTop = top < 0 
    ? mousePosition.y + cardOffset 
    : top;

  const cardStyle = {
    left: `${adjustedLeft}px`,
    top: `${adjustedTop}px`,
  };

  return (
    <div 
      className="fixed z-50 pointer-events-none"
      style={cardStyle}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: location.color }}
          />
          <h3 className="font-semibold text-sm text-gray-900 truncate">
            {locationName}
          </h3>
        </div>
        {locationPlace && (
          <p className="text-xs text-gray-600 mb-2 truncate">
            {locationPlace}
          </p>
        )}
        {location.imagePath && (
          <div className="rounded overflow-hidden">
            <img
              src={location.imagePath}
              alt={locationName}
              className="w-full h-20 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverCard;
