"use client";

import React from "react";

const WebsiteTitle: React.FC = () => {
  return (
    <div className="absolute top-6 left-6 z-50">
      <h1 
        className="text-2xl font-light italic tracking-tight"
        style={{ 
          fontFamily: 'PPEditorialNew-UltralightItalic',
          fontWeight: 200,
          letterSpacing: '-0.025em',
          color: '#2C231E'
        }}
      >
        Hind portfolio
      </h1>
    </div>
  );
};

export default WebsiteTitle;
