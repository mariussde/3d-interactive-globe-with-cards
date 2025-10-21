// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import GlobeTooltip from "./tooltip";
import Controls from "./controls";
import LocationInfoCard from "./location-info-card";
import WebsiteTitle from "../website-title";
import { allLocations, Location, Subcategory } from "@/lib/locationData";

const getData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
  );
  return res.json();
};

const GlobeComponent = () => {
  let Globe = () => null;
  if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

  const globeEl = useRef<any>(null);
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [ringsData, setRingsData] = useState<any[]>([]);
  const [htmlElementsData, setHtmlElementsData] = useState<any[]>([]);
  const [hexData, setHexData] = useState<any[]>([]);
  const [currentLocations, setCurrentLocations] = useState<Location[]>(allLocations);
  const [pointsData, setPointsData] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    getData().then((geoData) => {
      setHexData(geoData.features);
    });
  }, []);

  // Always show all locations, but we can highlight selected ones later
  useEffect(() => {
    const points = allLocations.map((location) => ({
      lat: location.lat,
      lng: location.lng,
      color: location.color,
      size: 2,
      name: location.name,
    }));
    setPointsData(points);
  }, []); // Only run once on mount

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Globe will take up most of the right half of the screen
      setDimensions({
        width: window.innerWidth * 0.45, // Right half minus some padding
        height: window.innerHeight * 0.8, // Most of the height minus padding
      });

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth * 0.45,
          height: window.innerHeight * 0.8,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Clear all animations since we're removing automatic switching
  useEffect(() => {
    setArcsData([]);
    setRingsData([]);
    setHtmlElementsData([]);
  }, []);

  // Globe material
  const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  useEffect(() => {
    if (globeEl.current) {
      // Set initial camera position with proper zoom level
      const camera = globeEl.current.camera();
      camera.position.set(0, 0, -400); // Increased distance for better initial view
      camera.lookAt(0, 0, 0);
      globeEl.current.controls().update();
      
      // Set initial point of view with proper altitude
      globeEl.current.pointOfView(
        { lat: 0, lng: 0, altitude: 2.5 }, // Higher altitude for better overview
        0
      );
      
      // Disable camera controls temporarily to prevent unwanted movements
      const controls = globeEl.current.controls();
      if (controls) {
        controls.enabled = true;
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.enablePan = false; // Disable panning to prevent unwanted movements
      }
    }
  }, []);

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    // Keep all locations visible, just change the highlighted ones
    setCurrentLocations(subcategory.locations);
    
    // Focus on the first location of the selected subcategory
    if (subcategory.locations.length > 0 && globeEl.current) {
      const firstLocation = subcategory.locations[0];
      setSelectedLocation(firstLocation);
      
      globeEl.current.pointOfView(
        { lat: firstLocation.lat, lng: firstLocation.lng, altitude: 2 },
        1000
      );
      
      // Add highlighting ring animation
      setRingsData([
        {
          lat: firstLocation.lat,
          lng: firstLocation.lng,
          maxRadius: 5,
          propagationSpeed: 5,
          repeatPeriod: 1000,
        },
      ]);
      
      // Clear the ring after a few seconds
      setTimeout(() => {
        setRingsData([]);
      }, 3000);
    }
  };

  const handleLocationSelect = (location: Location) => {
    // Set the selected location for the info card
    setSelectedLocation(location);
    
    // Don't change currentLocations - keep all dots visible
    // Just focus on the selected location
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: location.lat, lng: location.lng, altitude: 2 },
        1000
      );
      
      // Add highlighting ring animation
      setRingsData([
        {
          lat: location.lat,
          lng: location.lng,
          maxRadius: 5,
          propagationSpeed: 5,
          repeatPeriod: 1000,
        },
      ]);
      
      // Clear the ring after a few seconds
      setTimeout(() => {
        setRingsData([]);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 flex overflow-hidden">
      <WebsiteTitle />
      
      {/* Left half - Location Info Card */}
      <div className="w-1/2 p-6 pt-20 overflow-y-auto">
        <LocationInfoCard selectedLocation={selectedLocation} />
      </div>

      {/* Right half - Globe and Controls */}
      <div className="w-1/2 relative overflow-hidden">
        <Controls
          onSubcategorySelect={handleSubcategorySelect}
          onLocationSelect={handleLocationSelect}
        />
        <div 
          className="h-full w-full flex items-center justify-center"
          style={{ pointerEvents: 'auto' }}
          onMouseDown={(e) => {
            // Only allow globe interactions if clicking directly on the globe area
            if (e.target === e.currentTarget) {
              e.stopPropagation();
            }
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <Globe
              ref={globeEl}
              width={dimensions.width}
              height={dimensions.height}
            globeMaterial={globeMaterial}
            hexPolygonsData={hexData}
            hexPolygonResolution={3}
            hexPolygonMargin={0.3}
            hexPolygonUseDots={true}
            hexPolygonColor={() => "rgba(128, 128, 128, 0.2)"}
            arcsData={arcsData}
            arcColor={(arc: any) => arc.color}
            arcStroke={0.6}
            arcDashLength={1}
            arcDashGap={1}
            arcDashInitialGap={() => Math.random()}
            arcDashAnimateTime={1600}
            arcAltitudeAutoScale={0.4}
            ringsData={ringsData}
            ringColor={() => "rgba(198, 85, 206, .8)"}
            ringMaxRadius={() => 3}
            ringPropagationSpeed={() => 3}
            ringRepeatPeriod={() => 1600}
            htmlElementsData={htmlElementsData}
            htmlLat={(d: any) => d.lat}
            htmlLng={(d: any) => d.lng}
            htmlElement={(d: any) => d.element}
            pointsData={pointsData}
            pointColor={(d: any) => d.color}
            pointAltitude={0.01}
            pointRadius={0.5}
            backgroundColor="white"
            showAtmosphere={false}
            showGlobe={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;
