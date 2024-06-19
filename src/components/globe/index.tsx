"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import GlobeTooltip from "./tooltip";

interface Location {
  id: number;
  country: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { id: 1, country: "Germany", lat: 52.52, lng: 13.405 },
  { id: 2, country: "Japan", lat: 36.2048, lng: 138.2529 },
  { id: 3, country: "Brazil", lat: -14.235, lng: -51.9253 },
  { id: 4, country: "Bulgaria", lat: 42.6977, lng: 23.3219 },
  { id: 5, country: "Canada", lat: 56.1304, lng: -106.3468 },
  { id: 6, country: "Australia", lat: -35.2809, lng: 149.13 },
  { id: 7, country: "France", lat: 48.8566, lng: 2.3522 },
  { id: 8, country: "India", lat: 28.6139, lng: 77.209 },
  { id: 9, country: "England", lat: 51.5074, lng: -0.1278 },
  { id: 10, country: "South Africa", lat: -25.7461, lng: 28.1881 },
  { id: 11, country: "Russia", lat: 55.7558, lng: 37.6176 },
  { id: 12, country: "Denmark", lat: 55.6761, lng: 12.5683 },
  { id: 13, country: "Sweden", lat: 59.3293, lng: 18.0686 },
];

const getData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
  );
  return res.json();
};

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const GlobeComponent = () => {
  const globeEl = useRef<any>(null);
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [ringsData, setRingsData] = useState<any[]>([]);
  const [htmlElementsData, setHtmlElementsData] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hexData, setHexData] = useState<any[]>([]);
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const animateArc = () => {
      const fromLocation = locations[currentIndex];
      const nextIndex = (currentIndex + 1) % locations.length;
      const toLocation = locations[nextIndex];

      const newArc = {
        startLat: fromLocation.lat,
        startLng: fromLocation.lng,
        endLat: toLocation.lat,
        endLng: toLocation.lng,
        color: "rgba(198, 85, 206, 1)",
      };

      setArcsData([newArc]);

      if (globeEl.current) {
        // Rotate to start location immediately
        globeEl.current.pointOfView(
          { lat: fromLocation.lat, lng: fromLocation.lng, altitude: 2 },
          0
        );

        // Rotate the globe and animate the arc to the end location
        setTimeout(() => {
          globeEl.current.pointOfView(
            { lat: toLocation.lat, lng: toLocation.lng, altitude: 2 },
            3000
          );
        }, 0);

        // Animate the ring and display text at the end location after the globe rotation and arc animation
        setTimeout(() => {
          setRingsData([
            {
              lat: toLocation.lat,
              lng: toLocation.lng,
              maxRadius: 5,
              propagationSpeed: 5,
              repeatPeriod: 1000,
            },
          ]);
          const container = document.createElement("div");
          createRoot(container).render(
            <GlobeTooltip
              fromCountry={fromLocation.country}
              toCountry={toLocation.country}
            />
          );
          setHtmlElementsData([
            {
              lat: toLocation.lat,
              lng: toLocation.lng,
              element: container,
            },
          ]);
        }, 3000); // 3000ms for globe rotation and arc animation

        // Clear the arc data to prevent flashing
        setTimeout(() => {
          setArcsData([]);
        }, 3000); // 3000ms for globe rotation and arc animation

        // Clear the HTML elements after they have been displayed
        setTimeout(() => {
          setHtmlElementsData([]);
        }, 6300); // 3000ms for globe rotation + 3000ms display time + 300ms delay

        // Wait for 800ms before starting the next animation cycle
        setTimeout(() => {
          setCurrentIndex(nextIndex);
        }, 6800); // 3000ms for globe rotation + 3000ms display time + 800ms delay
      }
    };

    animateArc(); // Start the first animation immediately

    const interval = setInterval(animateArc, 6800); // 6800ms for the total cycle duration

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Globe material
  const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  useEffect(() => {
    if (globeEl.current) {
      const camera = globeEl.current.camera();
      camera.position.set(0, 0, -200);
      camera.lookAt(0, 0, 0);
      globeEl.current.controls().update();
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="translate-x-1/4">
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
          backgroundColor="white"
          showAtmosphere={false}
          showGlobe={true}
        />
      </div>
    </div>
  );
};

export default GlobeComponent;
