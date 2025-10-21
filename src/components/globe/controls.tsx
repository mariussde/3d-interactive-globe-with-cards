"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { categories, Subcategory, Location } from "@/lib/locationData";

interface ControlsProps {
  onSubcategorySelect: (subcategory: Subcategory) => void;
  onLocationSelect: (location: Location) => void;
}

const Controls: React.FC<ControlsProps> = ({
  onSubcategorySelect,
  onLocationSelect,
}) => {
  return (
    <div 
      className="absolute top-8 left-4 z-50 flex items-center gap-2"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Dropdown menus for subcategories */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <DropdownMenu key={category.name} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
                {category.name}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-80" 
              side="bottom" 
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuLabel>{category.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubcategorySelect(subcategory);
                    }}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: subcategory.color }}
                      />
                      <span className="font-medium">{subcategory.name}</span>
                    </div>
                  </DropdownMenuItem>
                  
                  {/* Show locations for this subcategory */}
                  <div className="ml-6">
                    {subcategory.locations.map((location) => (
                      <DropdownMenuItem
                        key={location.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onLocationSelect(location);
                        }}
                        className="cursor-pointer text-sm text-gray-600"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: location.color }}
                          />
                          <span className="truncate max-w-64">{location.name}</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </div>
  );
};

export default Controls;
